"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";

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

export default function Sidebar({
  pathname,
  navOpen,
  setNavOpen,
}: {
  pathname: string;
  navOpen: boolean;
  setNavOpen: (v: boolean) => void;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`
        ${navOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 fixed md:static z-50 top-0 left-0 h-screen bg-white border-r border-black/5 flex flex-col transition-all duration-300 relative
        ${isCollapsed ? "w-64 md:w-20 p-4" : "w-64 p-5"}
      `}
    >
      {/* Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="hidden md:flex absolute -right-4 top-8 h-9 w-9 items-center justify-center rounded-full bg-white border border-gray-300 shadow"
      >
        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>

      {/* Logo */}
      <Link
        href="/screens/dashboard"
        className={`flex items-center mb-8 ${
          isCollapsed ? "justify-center" : "gap-3"
        }`}
      >
        <div className="h-10 w-10">
          <img src="/logo.svg" alt="logo" />
        </div>

        {!isCollapsed && (
          <div className="flex flex-col leading-tight">
            <h1 className="text-2xl font-bold text-[#002b73]">
              SIGAP
            </h1>

            <span className="text-[9px] text-gray-500 font-medium tracking-wide">
              Government Analytics
            </span>
          </div>
        )}
      </Link>

      {/* Menu */}
      <nav className="flex flex-col gap-1.5 flex-1">
        {SCREENS.map((s) => {
          const isActive = pathname === s.path;

          return (
            <Link
              key={s.path}
              href={s.path}
              onClick={() => setNavOpen(false)}
              className={`flex items-center rounded-lg py-2.5 text-sm font-semibold
                ${isActive ? "bg-[#a0f499]" : "hover:bg-[#e7e8e9]"}
                ${isCollapsed ? "justify-center" : "gap-3 px-3"}
              `}
            >
              <span className="material-symbols-outlined">{s.icon}</span>
              {!isCollapsed && <span>{s.title}</span>}
            </Link>
          );
        })}
      </nav>
      <div className="pt-4 border-t border-gray-100">
        <Link
          href="/auth/logout"
          className={`
            w-full flex items-center rounded-lg py-2.5 transition-colors
            text-red-600 hover:bg-red-50
            ${isCollapsed ? "justify-center px-0" : "gap-3 px-3"}
          `}
        >
          <LogOut size={20} className="shrink-0" />

          {!isCollapsed && (
            <span className="text-sm font-semibold whitespace-nowrap">
              Logout
            </span>
          )}
        </Link>
      </div>
    </aside>
  );
}