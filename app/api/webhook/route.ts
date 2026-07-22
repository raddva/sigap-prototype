import { createClient } from "@supabase/supabase-js";
import { sendWA } from "@/lib/whatsapp";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const { nik } = await req.json();

  // Ambil data warga
  const { data: citizen, error } = await supabase
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

  // Simpan riwayat
  await supabase.from("verification_history").insert({
    citizen_nik: nik,
    title: "WhatsApp verification sent",
    description:
      "Automated WhatsApp verification sent by SIGAP.",
    status: "done",
  });

  // Kirim WhatsApp
  await sendWA(
    citizen.phone,
    `Halo ${citizen.name}, sistem SIGAP mendeteksi perubahan kondisi ekonomi Anda.\n\nMohon lakukan verifikasi melalui WhatsApp ini dengan membalas pesan atau mengunggah dokumen pendukung.\n\nTerima kasih.`
  );

  return Response.json({
    success: true,
  });
}