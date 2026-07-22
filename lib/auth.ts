import { createClient } from "./supabase/client";

const supabase = createClient();

export async function login(
  email: string,
  password: string
) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function register(
  email: string,
  password: string,
  fullName: string
) {
  return await supabase.auth.signUp({
    email,
    password,

    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`,

      data: {
        full_name: fullName,
      },
    },
  });
}

export async function logout() {
  return await supabase.auth.signOut();
}

export async function currentUser() {
  return await supabase.auth.getUser();
}

export async function currentSession() {
  return await supabase.auth.getSession();
}