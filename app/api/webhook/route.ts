import { supabaseAdmin } from "@/lib/supabase/admin";
import { sendWA } from "@/lib/whatsapp";

export async function POST(req: Request) {
  const { nik } = await req.json();

  const { data: citizen, error } = await supabaseAdmin
    .from("citizens")
    .select("*")
    .eq("nik", nik)
    .single();

  if (error || !citizen) {
    return Response.json(
      { success: false, message: "Citizen not found" },
      { status: 404 }
    );
  }

  await supabaseAdmin.from("verification_history").insert({
    citizen_nik: nik,
    title: "WhatsApp verification sent",
    description: "Automated WhatsApp verification sent by SIGAP.",
    status: "done",
  });

  await sendWA(
    citizen.phone,
    `Halo ${citizen.name}, sistem SIGAP mendeteksi perubahan kondisi ekonomi Anda.\n\nMohon lakukan verifikasi melalui WhatsApp ini dengan membalas pesan atau mengunggah dokumen pendukung.\n\nTerima kasih.`
  );

  return Response.json({ success: true });
}