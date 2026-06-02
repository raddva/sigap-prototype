"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/app/screens/components/Sidebar";

export default function ScreensLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f9fa]">
      
      {/* Sidebar */}
      <Sidebar
        pathname={pathname}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between bg-white px-4 py-3 border-b sticky top-0 z-40">
          <Link href="/screens/dashboard" className="flex items-center gap-2">
            <img src="/logo.svg" className="h-8 w-8" />
            <span className="font-bold text-[#002b73]">SIGAP</span>
          </Link>

          <button onClick={() => setNavOpen((v) => !v)}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Overlay */}
      {navOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 z-40"
          onClick={() => setNavOpen(false)}
        />
      )}
    </div>
  );
}