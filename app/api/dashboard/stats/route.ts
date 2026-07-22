import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();

    const { count: verified, error: errVerified } = await supabase
      .from("citizens")
      .select("*", { count: "exact", head: true })
      .eq("verification_status", "Verified");

    const { count: pending, error: errPending } = await supabase
      .from("citizens")
      .select("*", { count: "exact", head: true })
      .eq("verification_status", "Pending");

    const { count: ai, error: errAi } = await supabase
      .from("ai_cases")
      .select("*", { count: "exact", head: true });

    const { count: total, error: errTotal } = await supabase
      .from("citizens")
      .select("*", { count: "exact", head: true });

    // Cek jika ada error dari Supabase (misal karena RLS)
    if (errVerified || errPending || errAi || errTotal) {
      console.error("Supabase Error:", { errVerified, errPending, errAi, errTotal });
    }

    const approval =
      total && total > 0 ? (((verified ?? 0) / total) * 100).toFixed(1) : "0";

    return NextResponse.json([
      {
        id: 1,
        title: "Total Citizens Verified",
        value: verified?.toString() || "0",
        type: "verified",
        trend: "Updated",
        trendType: "up",
      },
      {
        id: 2,
        title: "AI Detection Triggered",
        value: ai?.toString() || "0",
        type: "warning",
        trend: "Requires manual review",
        trendType: "risk",
      },
      {
        id: 3,
        title: "Pending Verification",
        value: pending?.toString() || "0",
        type: "pending",
        trend: "Waiting review",
        trendType: "neutral",
      },
      {
        id: 4,
        title: "Approval Rate",
        value: approval + "%",
        type: "neutral",
        trend: "Current approval",
        trendType: "up",
      },
    ]);
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}