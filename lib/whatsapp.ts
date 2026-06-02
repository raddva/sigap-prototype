import makeWASocket, { useMultiFileAuthState, Browsers } from '@whiskeysockets/baileys';
import pino from 'pino';
import qrcode from 'qrcode-terminal';
import { demoStore } from './store';

// Mencegah Zombie Connection di Next.js saat Hot Reload
const globalForWA = global as unknown as { sock: any };

export async function initWhatsApp() {
  // Jika socket sudah ada, pakai yang lama
  if (globalForWA.sock) {
    return globalForWA.sock;
  }

  const { state, saveCreds } = await useMultiFileAuthState('./wa-auth');

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: false,
    logger: pino({ level: 'silent' }) as any, // Matikan log berisik
    browser: Browsers.macOS('Desktop'), // Menyamar sebagai WA Mac agar tidak diblokir
    syncFullHistory: false, // Login super cepat
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
      
      // Reconnect otomatis jika bukan karena di-logout manual
      if (reason !== 401) {
        initWhatsApp();
      }
    } else if (connection === 'open') {
      console.log('✅ WhatsApp Bot SIGAP Berhasil Tersambung!');
    }
  });

  sock.ev.on('creds.update', saveCreds);

  // --- LISTENER: DETEKSI USER UPLOAD BUKTI ---
  sock.ev.on('messages.upsert', async ({ messages, type }: any) => {
    if (type !== 'notify') return; 
    
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const senderJid = msg.key.remoteJid;

    // Cek apakah pesan berisi Gambar atau Dokumen
    const isImage = msg.message.imageMessage;
    const isDocument = msg.message.documentMessage;
    const isImageWithCaption = msg.message.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage;

    if (isImage || isDocument || isImageWithCaption) {
      console.log("📸 BUKTI FILE DITERIMA DARI WA PENGGUNA!");

      // 1. Update Database Bohongan (Mock)
      demoStore.status = "Pending Review";
      demoStore.evidenceUploaded = true;

      // 2. Kirim Auto-Reply
      const replyText = `✅ *Verifikasi Berhasil Diterima*\n\nTerima kasih, *${demoStore.citizenName}*. Berkas/bukti Anda telah berhasil ditangkap oleh sistem SIGAP.\n\nKasus Anda sekarang masuk dalam antrean *Prioritas Review Petugas*. Kami akan menghubungi Anda kembali setelah proses validasi final selesai.`;
      await sock.sendMessage(senderJid, { text: replyText });
      
    } else {
      // Jika user cuma balas teks biasa
      const warningText = `Maaf, sistem hanya dapat memproses bukti berupa *Foto/Gambar* atau *Dokumen (PDF)*. Mohon kirim ulang bukti Anda.`;
      await sock.sendMessage(senderJid, { text: warningText });
    }
  });

  globalForWA.sock = sock;
  return sock;
}

// Fungsi untuk mengirim pesan dari API Route
export async function sendWA(phone: string, message: string) {
  const socket = await initWhatsApp();
  const jid = `${phone}@s.whatsapp.net`;
  await socket.sendMessage(jid, { text: message });
}