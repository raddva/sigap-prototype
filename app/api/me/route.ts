import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { data: admin } = await supabase
    .from("admins")
    .select("*")
    .eq("id", user.id)
    .single();

  return NextResponse.json({
    email: user.email,
    full_name: admin?.full_name,
    role: admin?.role,
  });
}