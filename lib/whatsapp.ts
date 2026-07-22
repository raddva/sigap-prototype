import makeWASocket, { useMultiFileAuthState, Browsers } from '@whiskeysockets/baileys';
import pino from 'pino';
import qrcode from 'qrcode-terminal';
import { demoStore } from './store';
import { askGemini } from "./gemini";

// Mencegah Zombie Connection
const globalForWA = global as unknown as { sock: any };

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
      const aiReply = await askGemini(`
        Warga baru saja mengunggah dokumen sebagai bukti perubahan kondisi ekonomi.

        Buat balasan singkat yang:
        - Mengucapkan terima kasih.
        - Menginformasikan bahwa bukti telah diterima.
        - Status menjadi Pending Review.
        - Petugas akan melakukan validasi.
      `);

      await sock.sendMessage(senderJid, {
        text: `🤖 *SIGAP AI Assistant*\n\n${aiReply}`,
      });
    } else if (textMessage) {
      console.log(`User bertanya: "${textMessage}"`);

      await sock.sendPresenceUpdate("composing", senderJid);

      try {
        const aiResponse = await askGemini(textMessage);

        await sock.sendMessage(senderJid, {
          text: `🤖 *SIGAP AI Assistant*\n\n${aiResponse}`,
        });

      } catch (error) {
        console.error(error);
        await sock.sendMessage(senderJid, {
          text: "Maaf, AI sedang mengalami gangguan. Silakan coba beberapa saat lagi.",
        });
      }
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