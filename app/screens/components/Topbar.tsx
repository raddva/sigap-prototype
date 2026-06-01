"use client";

import { Search, Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-transparent sticky top-0 z-40 w-full h-16 flex items-center px-6 lg:px-8">
      <div className="ml-auto flex items-center gap-6">
        
        {/* System Status */}
        <div className="hidden md:flex items-center gap-2 bg-[#e6f4ea] text-[#1b6d24] px-3 py-1.5 rounded-full text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#1b6d24] animate-pulse"></span>
          System Active
        </div>

        {/* Notification */}
        <button className="relative text-gray-500 hover:text-gray-700 transition-colors">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
            <img
              src="https://ui-avatars.com/api/?name=Officer+A+Rahman&background=0D8ABC&color=fff"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden lg:block text-sm">
            <p className="font-bold text-gray-900 leading-none">
              Officer A. Rahman
            </p>
            <p className="text-gray-500 text-xs mt-0.5">
              Senior Analyst
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}