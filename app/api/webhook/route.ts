import { NextResponse } from 'next/server';
import { sendWA } from '@/lib/whatsapp';
import { askGemini } from '@/lib/gemini';
import { demoStore } from '@/lib/store';

// 1. GET: UNTUK VERIFIKASI WEBHOOK DARI META
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  // Pastikan WEBHOOK_VERIFY_TOKEN di .env sama dengan yang kamu isi di Dashboard Meta
  if (mode === "subscribe" && token === process.env.WEBHOOK_VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 });
  }

  return new NextResponse("Forbidden", { status: 403 });
}

// 2. POST: MENERIMA PESAN MASUK DARI WARGA
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Pastikan ini dari WhatsApp API
    if (body.object === "whatsapp_business_account") {
      const entry = body.entry?.[0];
      const changes = entry?.changes?.[0]?.value;
      const messages = changes?.messages;

      // Jika ada pesan masuk
      if (messages && messages.length > 0) {
        const msg = messages[0];
        const senderPhone = msg.from; // Nomor pengirim

        // Cek tipe pesan
        const isImage = msg.type === "image";
        const isDocument = msg.type === "document";
        const textMessage = msg.type === "text" ? msg.text.body : "";

        // JIKA WARGA MENGIRIM GAMBAR / DOKUMEN
        if (isImage || isDocument) {
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

          await sendWA(senderPhone, `🤖 *SIGAP AI Assistant*\n\n${aiReply}`);
        } 
        
        // JIKA WARGA MENGIRIM TEKS
        else if (textMessage) {
          console.log(`User bertanya: "${textMessage}"`);

          try {
            const aiResponse = await askGemini(textMessage);
            await sendWA(senderPhone, `🤖 *SIGAP AI Assistant*\n\n${aiResponse}`);
          } catch (error) {
            console.error(error);
            await sendWA(senderPhone, "Maaf, AI sedang mengalami gangguan. Silakan coba beberapa saat lagi.");
          }
        }
      }
    }

    // WA API membutuhkan respons 200 OK agar tidak mengirim ulang notifikasi
    return NextResponse.json({ status: 'ok' }, { status: 200 });
  } catch (error) {
    console.error("Webhook Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}