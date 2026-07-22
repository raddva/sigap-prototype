import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();

    const { data: citizens, error } = await supabase
      .from("citizens")
      .select(`
        nik,
        name,
        province,
        city,
        desil,
        eligibility_score,
        economic_change,
        verification_status,
        ai_status,
        ai_cases (
          id,
          anomaly_title,
          anomaly_description,
          identity_match,
          income_veracity,
          status
        )
      `)
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) {
      console.error("Supabase Error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const formattedCitizens = (citizens || []).map((citizen: any) => ({
      nik: citizen.nik,
      name: citizen.name,
      region: [citizen.city, citizen.province].filter(Boolean).join(", ") || "-",
      desil: citizen.desil ?? 0,
      eligibility_score: citizen.eligibility_score ?? 0,
      economic_score: citizen.economic_change ?? 0,
      verification_status: citizen.verification_status || "Pending",
      ai_cases: Array.isArray(citizen.ai_cases) && citizen.ai_cases.length > 0 
        ? citizen.ai_cases[0] 
        : null, 
    }));

    return NextResponse.json(formattedCitizens);
  } catch (err: any) {
    console.error("Internal Server Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error", details: err.message },
      { status: 500 }
    );
  }
}