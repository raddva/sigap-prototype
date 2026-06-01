import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendWA } from '@/lib/whatsapp';

export async function POST(req: Request) {
  try {
    const { citizenId } = await req.json();

    // 1. Ambil data citizen dari Supabase
    const { data: citizen, error: fetchErr } = await supabase
      .from('citizens')
      .select('*')
      .eq('id', citizenId)
      .single();

    if (!citizen || fetchErr) return NextResponse.json({ error: 'Citizen not found' }, { status: 404 });

    // 2. Update status jadi 'AI Recommended / Pending Check'
    await supabase
      .from('citizens')
      .update({ status: 'AI Recommended' })
      .eq('id', citizenId);

    // 3. Catat di Activity Logs
    await supabase.from('logs').insert({
      title: 'AI Detection Triggered',
      description: `Penurunan ekonomi drastis terdeteksi pada ${citizen.name}. Meminta verifikasi otomatis via WhatsApp.`
    });

    // 4. Kirim Pesan WhatsApp via Baileys
    const pesanWA = `*SIGAP Official - Sistem Layanan Sosial*\n\nHalo *${citizen.name}*,\nSistem mendeteksi adanya anomali pada status ekonomi/pekerjaan Anda (indikasi penurunan pendapatan).\n\nMohon lakukan verifikasi dan unggah bukti terbaru (seperti Surat Keterangan PHK/Struk Listrik) melalui link berikut:\n🌐 https://sigap-portal.go.id/verify/${citizen.id}\n\n_Pesan ini dikirim otomatis oleh AI SIGAP._`;
    
    await sendWA(citizen.phone, pesanWA);

    return NextResponse.json({ success: true, message: 'Anomaly triggered & WA sent!' });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}