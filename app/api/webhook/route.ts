import { createClient } from '@supabase/supabase-js';
import { sendWA } from '@/lib/whatsapp'; // Inisialisasi Baileys

export async function POST(req: Request) {
  const body = await req.json();
  
  // 1. Log event ke Supabase
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);
  await supabase.from('logs').insert({ event: 'Anomaly Detected', citizen_id: body.id });

  // 2. Trigger Baileys
  await sendWA(body.phone, `Halo ${body.name}, sistem mendeteksi perubahan ekonomi. Mohon verifikasi.`);
  
  return Response.json({ success: true });
}