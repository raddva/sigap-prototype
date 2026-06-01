import makeWASocket, { useMultiFileAuthState } from '@whiskeysockets/baileys';
import pino from 'pino';
import qrcode from 'qrcode-terminal';

// Mencegah Next.js membuat koneksi WA berulang-ulang saat hot-reload
let sock: any = null;

export async function initWhatsApp() {
  if (sock) return sock;

  const { state, saveCreds } = await useMultiFileAuthState('./wa-auth');

  sock = makeWASocket({
    auth: state,
    printQRInTerminal: false,
    logger: pino({ level: 'silent' }) as any,
  });

  sock.ev.on('connection.update', (update: any) => {
    const { connection, qr } = update;
    if (qr) {
      console.log('\n--- SCAN QR CODE INI PAKAI WHATSAPP BOT ---');
      qrcode.generate(qr, { small: true });
    }
    if (connection === 'close') {
      console.log('WhatsApp connection closed. Reconnecting...');
      sock = null;
      initWhatsApp();
    } else if (connection === 'open') {
      console.log('✅ WhatsApp Siap Digunakan!');
    }
  });

  sock.ev.on('creds.update', saveCreds);
  return sock;
}

export async function sendWA(phone: string, message: string) {
  const socket = await initWhatsApp();
  const jid = `${phone}@s.whatsapp.net`;
  await socket.sendMessage(jid, { text: message });
}