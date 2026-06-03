// src/app/api/trigger-anomaly/route.ts (Update sedikit di bagian atas)
import { NextResponse } from 'next/server';
import { sendWA } from '@/lib/whatsapp';
import { demoStore } from '@/lib/store';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const targetPhone = body.phone; 

    if (!targetPhone) return NextResponse.json({ error: "No phone" }, { status: 400 });

    // SIMPAN NOMOR HP KE STORE
    demoStore.phone = targetPhone;
    demoStore.status = "AI Recommended";
    demoStore.evidenceUploaded = false; 

    const pesanWA = `*SIGAP Official - Sistem Layanan Sosial*\n\nHalo *${demoStore.citizenName}*,\nSistem AI kami mendeteksi adanya indikasi penurunan pendapatan berdasarkan data utilitas terbaru Anda.\n\nMohon balas pesan ini dengan *mengirimkan FOTO BUKTI TERBARU* (seperti Surat Keterangan PHK atau Struk Listrik) agar bantuan Anda dapat diprioritaskan.`;
    
    await sendWA(targetPhone, pesanWA);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}