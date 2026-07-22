import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {

    const supabase = await createClient();

    const { count: verified } =
        await supabase
            .from("citizens")
            .select("*", { count: "exact", head: true })
            .eq("verification_status", "Verified");

    const { count: pending } =
        await supabase
            .from("citizens")
            .select("*", { count: "exact", head: true })
            .eq("verification_status", "Pending");

    const { count: ai } =
        await supabase
            .from("ai_cases")
            .select("*", { count: "exact", head: true });

    const { count: total } =
        await supabase
            .from("citizens")
            .select("*", { count: "exact", head: true });

    const approval =
        total && total > 0
            ? (((verified ?? 0) / total) * 100).toFixed(1)
            : "0";

    return NextResponse.json([
        {
            id: 1,
            title: "Total Citizens Verified",
            value: verified,
            type: "verified",
            trend: "Updated",
            trendType: "up",
        },
        {
            id: 2,
            title: "AI Detection Triggered",
            value: ai,
            type: "warning",
            trend: "Requires manual review",
            trendType: "risk",
        },
        {
            id: 3,
            title: "Pending Verification",
            value: pending,
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
}