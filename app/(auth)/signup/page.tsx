"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { register } from "@/lib/auth";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateFullName,
} from "@/lib/validation";
import { redirectLogin } from "@/lib/redirect";

export default function SignUpPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Full Name
      if (!validateFullName(fullName)) {
        throw new Error("Nama minimal 3 karakter.");
      }

      // Email
      if (!validateEmail(email)) {
        throw new Error("Format email tidak valid.");
      }

      // Password
      if (!validatePassword(password)) {
        throw new Error("Password minimal 8 karakter.");
      }

      // Confirm Password
      if (!validateConfirmPassword(password, confirmPassword)) {
        throw new Error("Konfirmasi password tidak sesuai.");
      }

      // Register
      const { error } = await register(
        email,
        password,
        fullName
      );

      if (error) {
        throw error;
      }

      setSuccess(
        "Akun berhasil dibuat.\nSilakan cek email Anda untuk melakukan verifikasi sebelum login."
      );

      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        redirectLogin(router);
      }, 3000);

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
            Create Admin Account
          </h1>
          <p className="mt-2 text-gray-500">
            SIGAP Dashboard
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              required
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              required
              autoComplete="email"
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
              required
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimal 8 karakter"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              required
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Ulangi password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600"
            />
          </div>
          {error && (
            <div className="rounded-lg border border-red-300 bg-red-100 p-3 text-sm text-red-700 whitespace-pre-line">
              {error}
            </div>
          )}
          {success && (
            <div className="rounded-lg border border-green-300 bg-green-100 p-3 text-sm text-green-700 whitespace-pre-line">
              {success}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-600">
          Sudah punya akun?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-700 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}