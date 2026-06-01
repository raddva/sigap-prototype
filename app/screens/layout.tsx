"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [isCollapsed, setIsCollapsed] = useState(false); // State untuk fitur collapsible

  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">
      {/* Persistant Sidebar */}
      <aside
        className={`
          ${navOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 fixed md:static z-50 top-0 left-0 h-screen bg-white border-r border-black/5 flex flex-col transition-all duration-300 relative
          ${isCollapsed ? "w-64 md:w-20 p-4" : "w-64 p-5"}
        `}
      >
        {/* Tombol Toggle Collapse (Hanya tampil di Desktop) */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="
            hidden md:flex
            absolute -right-4 top-8
            h-9 w-9 items-center justify-center
            rounded-full
            bg-white/80 backdrop-blur
            border border-gray-200
            shadow-md
            hover:shadow-lg
            hover:scale-105
            transition-all duration-200
            text-gray-600 hover:text-[#002b73]
            z-50
          "
        >
          {isCollapsed ? (
            <ChevronRight size={18} strokeWidth={2.5} />
          ) : (
            <ChevronLeft size={18} strokeWidth={2.5} />
          )}
        </button>

        {/* Logo & Header Sidebar */}
        <Link 
          href="/screens/dashboard" 
          className={`flex items-center mb-8 overflow-hidden transition-all ${isCollapsed ? "justify-center" : "gap-3"}`}
        >
          <div className="h-10 w-10 shrink-0 flex items-center justify-center text-white font-bold">
            <img src="/logo.svg" alt="SIGAP Logo" className="h-full w-full object-contain" />
          </div>
          {/* Teks hanya muncul jika tidak di-collapse */}
          <div className={`transition-opacity duration-300 whitespace-nowrap ${isCollapsed ? "opacity-0 hidden md:hidden" : "opacity-100"}`}>
            <h1 className="text-3xl font-bold text-[#002b73]" style={{ fontFamily: "Public Sans, sans-serif" }}>
              SIGAP
            </h1>
            <p className="text-[7px] text-[#40484B] uppercase tracking-wider font-semibold">Government Portal</p>
          </div>
        </Link>
        
        {/* Menu Navigasi */}
        <nav className="flex flex-col gap-1.5 flex-1 overflow-y-auto scrollbar-hide">
          {SCREENS.map((s) => {
            const isActive = pathname === s.path;
            return (
              <Link
                key={s.path}
                href={s.path}
                title={isCollapsed ? s.title : ""} // Tambahkan tooltip saat mode icon-only
                onClick={() => setNavOpen(false)}
                className={`flex items-center rounded-lg py-2.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-[#a0f499] text-[#207128]"
                    : "text-[#40484B] hover:bg-[#e7e8e9]"
                } ${isCollapsed ? "justify-center px-0" : "gap-3 px-3 text-left"}`}
              >
                <span className="material-symbols-outlined text-[20px] shrink-0">{s.icon}</span>
                {/* Teks disembunyikan saat collapse */}
                <span className={`whitespace-nowrap transition-all ${isCollapsed ? "hidden md:hidden" : "block"}`}>
                  {s.title}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Tombol Logout di Bawah */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <button 
            title={isCollapsed ? "Logout" : ""}
            className={`w-full flex items-center rounded-lg py-2.5 text-[#ba1a1a] hover:bg-[#fce8e8] transition-colors ${
              isCollapsed ? "justify-center px-0" : "gap-3 px-3 text-left"
            }`}
          >
            <span className="material-symbols-outlined text-[20px] shrink-0">logout</span>
            <span className={`text-sm font-semibold whitespace-nowrap ${isCollapsed ? "hidden md:hidden" : "block"}`}>
              Logout
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content Viewport */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between bg-white px-4 py-3 border-b border-black/5 sticky top-0 z-40">
          <Link href="/screens/dashboard" className="flex items-center gap-2">
            <div className="h-8 w-8 shrink-0 flex items-center justify-center">
              <img src="/logo.svg" alt="SIGAP Logo" className="h-full w-full object-contain" />
            </div>
            <span className="font-bold text-[#002b73]" style={{ fontFamily: "Public Sans, sans-serif" }}>SIGAP</span>
          </Link>
          <button onClick={() => setNavOpen((v) => !v)} className="p-2 rounded-full hover:bg-black/5">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 w-full bg-[#f8f9fa] overflow-y-auto">
          {children}
        </main>
      </div>
      
      {/* Overlay Gelap untuk Mobile saat Sidebar Terbuka */}
      {navOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-40" 
          onClick={() => setNavOpen(false)}
        ></div>
      )}
    </div>
  );
}