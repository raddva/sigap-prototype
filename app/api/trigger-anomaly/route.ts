import { NextResponse } from 'next/server';
import { sendWA } from '@/lib/whatsapp';
import { demoStore } from '@/lib/store';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Nomor HP tujuan yang dikirim dari tombol Frontend
    // WAJIB format: 628xxx (tanpa + dan tanpa 0 di depan)
    const targetPhone = body.phone; 

    if (!targetPhone) {
      return NextResponse.json({ error: "Nomor HP wajib diisi di body request" }, { status: 400 });
    }

    // 1. Ubah status di database bohongan
    demoStore.status = "AI Recommended";
    demoStore.evidenceUploaded = false; // Reset bukti (jaga-jaga kalau didemo ulang)

    // 2. Pesan yang dikirim Bot ke User
    const pesanWA = `*SIGAP Official - Sistem Layanan Sosial*\n\nHalo *${demoStore.citizenName}*,\nSistem AI kami mendeteksi adanya indikasi penurunan pendapatan berdasarkan data utilitas terbaru Anda.\n\nMohon balas pesan ini dengan *mengirimkan FOTO BUKTI TERBARU* (seperti Surat Keterangan PHK atau Struk Listrik) agar bantuan Anda dapat diprioritaskan.\n\n_Pesan ini dikirim otomatis oleh AI SIGAP._`;
    
    // 3. Kirim WA!
    await sendWA(targetPhone, pesanWA);

    return NextResponse.json({ success: true, message: "Anomali berhasil ditrigger dan WA terkirim!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Gagal memproses anomali" }, { status: 500 });
  }
}