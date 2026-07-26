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
        avatar,
        phone,
        province,
        city,
        family_members,
        desil,
        desil_category,
        desil_description,
        monthly_income,
        monthly_expense,
        occupation,
        employment_status,
        eligibility_score,
        economic_change,
        verification_confidence,
        verification_status,
        last_verification,
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
      console.error(error);
      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    const formattedCitizens = (citizens ?? []).map((citizen: any) => ({
      nik: citizen.nik,
      name: citizen.name,
      avatar: citizen.avatar,
      phone: citizen.phone,
      province: citizen.province,
      city: citizen.city,
      region:
        [citizen.city, citizen.province]
          .filter(Boolean)
          .join(", ") || "-",
      family_members: citizen.family_members,
      desil: citizen.desil,
      desil_category: citizen.desil_category,
      desil_description: citizen.desil_description,
      monthly_income: citizen.monthly_income,
      monthly_expense: citizen.monthly_expense,
      occupation: citizen.occupation,
      employment_status: citizen.employment_status,
      eligibility_score: citizen.eligibility_score ?? 0,
      economic_change: citizen.economic_change ?? 0,
      verification_confidence:
        citizen.verification_confidence ?? 0,
      verification_status:
        citizen.verification_status ?? "Pending",
      last_verification: citizen.last_verification,
      ai_status: citizen.ai_status,
      ai_cases:
        Array.isArray(citizen.ai_cases) &&
        citizen.ai_cases.length > 0
          ? citizen.ai_cases[0]
          : null,
    }));
    return NextResponse.json(formattedCitizens);
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: err.message,
      },
      {
        status: 500,
      }
    );
  }
}