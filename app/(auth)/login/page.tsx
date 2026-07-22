"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { login, currentUser, logout } from "@/lib/auth";
import { validateEmail } from "@/lib/validation";
import { redirectDashboard } from "@/lib/redirect";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      // Validasi Email
      if (!validateEmail(email)) {
        throw new Error("Email tidak valid.");
      }

      // Login
      const { error } = await login(email, password);

      if (error) {
        throw error;
      }

      // Ambil user yang sedang login
      const {
        data: { user },
      } = await currentUser();

      if (!user) {
        throw new Error("User tidak ditemukan.");
      }

      // Cek apakah email sudah diverifikasi
        if (!user.email_confirmed_at) {
        await logout();
        throw new Error(
            "Email belum diverifikasi. Silakan cek inbox atau folder spam Anda."
        );
        }

      // Redirect ke Dashboard
      redirectDashboard(router);
      router.refresh();
    } catch (err: any) {
      setError(err.message ?? "Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800">
            SIGAP Dashboard
          </h1>

          <p className="mt-2 text-gray-500">
            Login sebagai Admin
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@sigap.id"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {error && (
            <div className="rounded-lg border border-red-300 bg-red-100 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing In..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Belum punya akun?{" "}
          <Link
            href="/signup"
            className="font-semibold text-blue-700 hover:underline"
          >
            Daftar
          </Link>
        </div>
      </div>
    </main>
  );
}