// src/app/api/action/route.ts
import { NextResponse } from 'next/server';
import { sendWA } from '@/lib/whatsapp';
import { demoStore } from '@/lib/store';

export async function POST(req: Request) {
  try {
    const { action } = await req.json();
    const phone = demoStore.phone;

    if (!phone) {
      return NextResponse.json({ error: "Nomor HP belum terdaftar di simulasi" }, { status: 400 });
    }

    if (action === 'approve') {
      demoStore.status = "Approved";
      const msg = `✅ *Pemberitahuan SIGAP*\n\nHalo *${demoStore.citizenName}*, dokumen bukti Anda telah di-*Review* oleh petugas.\n\nStatus Kelayakan: *DISETUJUI*\nBantuan Anda akan segera disalurkan pada periode berikutnya. Terima kasih.`;
      await sendWA(phone, msg);
    } 
    else if (action === 'reject') {
      demoStore.status = "Rejected";
      const msg = `❌ *Pemberitahuan SIGAP*\n\nHalo *${demoStore.citizenName}*, dokumen bukti Anda telah di-*Review* oleh petugas.\n\nStatus Kelayakan: *DITOLAK*\nAlasan: Dokumen yang dilampirkan tidak valid/kurang jelas. Silakan ajukan banding melalui kelurahan setempat.`;
      await sendWA(phone, msg);
    }

    return NextResponse.json({ success: true, status: demoStore.status });
  } catch (error) {
    return NextResponse.json({ error: "Gagal memproses aksi" }, { status: 500 });
  }
}