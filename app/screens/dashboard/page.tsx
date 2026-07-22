import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

import Dashboard from "./Dashboard";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: admin } = await supabase
    .from("admins")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!admin) {
    redirect("/login");
  }

  return <Dashboard />;
}