import makeWASocket, { useMultiFileAuthState, Browsers } from '@whiskeysockets/baileys';
import pino from 'pino';
import qrcode from 'qrcode-terminal';
import { demoStore } from './store';

// Mencegah Zombie Connection
const globalForWA = global as unknown as { sock: any };

function getSmartReply(text: string, citizenName: string): string {
  const lowerText = text.toLowerCase();

  if (lowerText.includes('status') || lowerText.includes('cek')) {
    return `🤖 *SIGAP AI Asisten*\n\nHalo ${citizenName}, status verifikasi Anda saat ini adalah: *${demoStore.status}*.\n\nJika status Anda "Pending Review", mohon tunggu petugas kami untuk melakukan validasi akhir.`;
  } 
  else if (lowerText.includes('syarat') || lowerText.includes('dokumen')) {
    return `🤖 *SIGAP AI Asisten*\n\nUntuk proses verifikasi perubahan ekonomi, Anda dapat mengunggah salah satu dokumen berikut:\n1. Surat Keterangan PHK dari Perusahaan\n2. Foto Struk Tagihan Listrik terbaru\n3. Surat Keterangan Tidak Mampu (SKTM) dari Kelurahan\n\nSilakan kirimkan foto dokumen tersebut langsung di obrolan ini.`;
  }
  else if (lowerText.includes('bantuan') || lowerText.includes('bansos')) {
    return `🤖 *SIGAP AI Asisten*\n\nSIGAP mendeteksi kelayakan Anda untuk program bantuan:\n- Bantuan Langsung Tunai (BLT)\n- Bantuan Pangan Non-Tunai (BPNT)\n\nKelayakan akhir akan ditentukan setelah dokumen bukti Anda diverifikasi oleh petugas.`;
  }
  else if (lowerText.includes('terima kasih') || lowerText.includes('makasih')) {
    return `🤖 *SIGAP AI Asisten*\n\nSama-sama, ${citizenName}! SIGAP selalu siap membantu Anda. Semoga sehat selalu!`;
  }
  else if (lowerText.includes('halo') || lowerText.includes('pagi') || lowerText.includes('siang')) {
    return `🤖 *SIGAP AI Asisten*\n\nHalo ${citizenName}! Saya adalah Asisten AI dari SIGAP. Ada yang bisa saya bantu terkait informasi bantuan sosial atau proses verifikasi Anda?`;
  }
  else {
    // Fallback
    return `🤖 *SIGAP AI Asisten*\n\nMaaf, saya belum sepenuhnya mengerti maksud Anda. \n\nKetik *Status* untuk mengecek status verifikasi.\nKetik *Syarat* untuk melihat daftar dokumen bukti.\nAtau langsung kirimkan *Foto Bukti* Anda di sini.`;
  }
}

export async function initWhatsApp() {
  if (globalForWA.sock) {
    return globalForWA.sock;
  }

  const { state, saveCreds } = await useMultiFileAuthState('./wa-auth');

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: false,
    logger: pino({ level: 'silent' }) as any, 
    browser: Browsers.macOS('Desktop'),
    syncFullHistory: false, 
  });

  sock.ev.on('connection.update', (update: any) => {
    const { connection, qr, lastDisconnect } = update;
    
    if (qr) {
      console.log('\n=============================================');
      console.log('📱 SCAN QR CODE INI PAKAI WHATSAPP BOT SIGAP');
      console.log('=============================================');
      qrcode.generate(qr, { small: true });
    }
    
    if (connection === 'close') {
      const reason = lastDisconnect?.error?.output?.statusCode;
      console.log('⚠️ Koneksi terputus. Kode Error:', reason);
      globalForWA.sock = null; 
      if (reason !== 401) initWhatsApp();
    } else if (connection === 'open') {
      console.log('✅ WhatsApp Bot SIGAP Berhasil Tersambung!');
    }
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('messages.upsert', async ({ messages, type }: any) => {
    if (type !== 'notify') return; 
    
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const senderJid = msg.key.remoteJid;
    const isImage = msg.message.imageMessage;
    const isDocument = msg.message.documentMessage;
    const isImageWithCaption = msg.message.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage;
    const textMessage = msg.message.conversation || msg.message.extendedTextMessage?.text || "";

    if (isImage || isDocument || isImageWithCaption) {
      console.log("BUKTI FILE DITERIMA DARI WA PENGGUNA!");

      demoStore.status = "Pending Review";
      demoStore.evidenceUploaded = true;

      const replyText = `✅ *Verifikasi Berhasil Diterima*\n\nTerima kasih, *${demoStore.citizenName}*. Berkas/bukti Anda telah berhasil ditangkap oleh sistem SIGAP.\n\nKasus Anda sekarang masuk dalam antrean *Prioritas Review Petugas*. Kami akan menghubungi Anda kembali setelah proses validasi final selesai.`;
      await sock.sendMessage(senderJid, { text: replyText });
      
    } 
    else if (textMessage) {
      console.log(`User bertanya: "${textMessage}"`);
      
      // Smart Mock AI
      const aiResponse = getSmartReply(textMessage, demoStore.citizenName);
      await sock.sendPresenceUpdate('composing', senderJid);
      setTimeout(async () => {
        await sock.sendMessage(senderJid, { text: aiResponse });
      }, 1500); // delay 1.5s
    }
  });

  globalForWA.sock = sock;
  return sock;
}

export async function sendWA(phone: string, message: string) {
  const socket = await initWhatsApp();
  const jid = `${phone}@s.whatsapp.net`;
  await socket.sendMessage(jid, { text: message });
}