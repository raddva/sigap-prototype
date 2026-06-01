// src/app/screens/layout.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SCREENS = [
  { path: "/screens/dashboard", title: "Dashboard", icon: "dashboard" },
  { path: "/screens/citizen-monitoring", title: "Citizen Monitoring", icon: "supervised_user_circle" },
  { path: "/screens/citizen-detail", title: "Citizen Detail", icon: "person" },
  { path: "/screens/analytics", title: "Analytics & Reporting", icon: "analytics" },
  { path: "/screens/ai-insights", title: "AI Insights", icon: "psychology" },
  { path: "/screens/activity", title: "Activity Feed", icon: "history" },
  { path: "/screens/verification-requests", title: "Verification Requests", icon: "fact_check" },
  { path: "/screens/reports-center", title: "Reports Center", icon: "description" },
  { path: "/screens/appeals", title: "Appeals & Complaints", icon: "gavel" },
  { path: "/screens/security-logs", title: "Security & Audit Logs", icon: "security" },
  { path: "/screens/settings", title: "Settings", icon: "settings" },
];

export default function ScreensLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">
      {/* Persistant Sidebar */}
      <aside
        className={`${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static z-50 top-0 left-0 h-screen w-64 bg-white border-r border-black/5 flex flex-col p-5 transition-transform`}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-[#002b73] flex items-center justify-center text-white font-bold">
            S
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#002b73]" style={{ fontFamily: "Public Sans, sans-serif" }}>
              SIGAP
            </h1>
            <p className="text-xs text-[#40484B]">Government Portal</p>
          </div>
        </div>
        
        <nav className="flex flex-col gap-1 flex-1 overflow-y-auto">
          {SCREENS.map((s) => {
            const isActive = pathname === s.path;
            return (
              <Link
                key={s.path}
                href={s.path}
                onClick={() => setNavOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold text-left transition-colors ${
                  isActive
                    ? "bg-[#a0f499] text-[#207128]"
                    : "text-[#40484B] hover:bg-[#e7e8e9]"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{s.icon}</span>
                <span>{s.title}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Viewport */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between bg-white px-4 py-3 border-b border-black/5 sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-[#002b73] text-white flex items-center justify-center text-sm font-bold">
              S
            </div>
            <span className="font-bold text-[#002b73]">SIGAP</span>
          </div>
          <button onClick={() => setNavOpen((v) => !v)} className="p-2 rounded-full hover:bg-black/5">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>

        {/* Semua halaman page.tsx anak akan dirender secara dinamis di sini */}
        <main className="flex-1 w-full bg-[#f8f9fa] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}