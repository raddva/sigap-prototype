"use client";

import { Bell, Settings } from "lucide-react";
import Link from "next/link";

export default function Topbar() {
  return (
    <header className="bg-white sticky top-0 z-0 w-full h-16 flex items-center px-6 lg:px-8 border-b border-none">
      
      {/* RIGHT ACTIONS */}
      <div className="ml-auto flex items-center gap-5">

        {/* System Status */}
        <div className="hidden md:flex items-center gap-2 bg-[#e6f4ea] text-[#1b6d24] px-3 py-1.5 rounded-full text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#1b6d24] animate-pulse"></span>
          System Active
        </div>

        {/* Settings */}
        <Link
          href="/screens/settings"
          className="relative flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors group"
        >
          <Settings size={18} className="text-gray-600 group-hover:text-[#0056D2]" />
        </Link>

        {/* Notification */}
        <button className="relative flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors">
          <Bell size={18} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 border-l border-gray-200 pl-5 ml-1">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 shrink-0">
            <img
              src="https://img.magnific.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="hidden lg:block text-sm leading-tight">
            <p className="font-bold text-gray-900">
              Officer A. Rahman
            </p>
            <p className="text-gray-500 text-xs">
              Senior Analyst
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}