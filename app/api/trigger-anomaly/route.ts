import { NextResponse } from 'next/server';
import { sendWA } from '@/lib/whatsapp';
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nik } = body; 

    // 1. Validasi Input
    if (!nik) {
      return NextResponse.json({ error: "No NIK provided in the request" }, { status: 400 });
    }

    const supabase = await createClient();

    // 2. Ambil Data Warga dari Database Supabase
    const { data: citizen, error } = await supabase
      .from("citizens")
      .select("name, phone, verification_status")
      .eq("nik", nik)
      .single();

    if (error || !citizen) {
      console.error("Database error:", error);
      return NextResponse.json({ error: "Citizen not found in database" }, { status: 404 });
    }

    const targetPhone = citizen.phone;

    // 3. Pastikan warga punya nomor HP di database
    if (!targetPhone) {
      return NextResponse.json({ error: "This citizen does not have a registered phone number" }, { status: 400 });
    }

    // 4. Susun Pesan WhatsApp dengan nama dinamis dari Database
    const pesanWA = `*SIGAP Official - Sistem Layanan Sosial*\n\nHalo *${citizen.name}*,\nSistem AI kami mendeteksi adanya indikasi penurunan pendapatan berdasarkan data utilitas terbaru Anda.\n\nMohon balas pesan ini dengan *mengirimkan FOTO BUKTI TERBARU* (seperti Surat Keterangan PHK atau Struk Listrik) agar bantuan Anda dapat diprioritaskan.`;
    
    // 5. Kirim Pesan
    await sendWA(targetPhone, pesanWA);

    // 6. (Opsional) Update status di database menjadi 'Pending Evidence'
    await supabase
      .from("citizens")
      .update({ verification_status: "Pending" })
      .eq("nik", nik);

    return NextResponse.json({ success: true, message: `Message sent to ${citizen.name}` });
  } catch (error: any) {
    console.error("Trigger anomaly error:", error);
    return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
  }
}