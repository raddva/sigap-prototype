// src/app/screens/components/Topbar.tsx
import React from "react";

export default function Topbar() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 w-full h-16 flex items-center justify-between px-6 lg:px-8">
      {/* Search Bar */}
      <div className="relative w-full max-w-md hidden md:block">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
          search
        </span>
        <input
          type="text"
          placeholder="Search citizens..."
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0056D2] text-sm text-gray-700"
        />
      </div>

      {/* Mobile Menu Spacer */}
      <div className="md:hidden flex-1"></div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-2 bg-[#e6f4ea] text-[#1b6d24] px-3 py-1.5 rounded-full text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#1b6d24] animate-pulse"></span>
          System Active
        </div>
        <button className="relative text-gray-500 hover:text-gray-900 transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-[#ba1a1a] rounded-full border border-white"></span>
        </button>
        <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 shrink-0">
            <img 
              src="https://ui-avatars.com/api/?name=Officer+A+Rahman&background=e7e8e9&color=002b73" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden lg:block text-sm">
            <p className="font-bold text-gray-900 leading-none">Officer A. Rahman</p>
            <p className="text-gray-500 text-xs mt-0.5">Senior Analyst</p>
          </div>
        </div>
      </div>
    </header>
  );
}