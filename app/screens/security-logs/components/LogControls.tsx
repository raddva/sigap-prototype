// src/app/screens/security-logs/components/LogControls.tsx
import React from 'react';

export default function LogControls() {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-8 items-center">
      {/* Search Bar */}
      <div className="relative w-full">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-[20px]">
          search
        </span>
        <input 
          type="text" 
          placeholder="Search events, users, or IPs..." 
          className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#002b73] text-gray-700 shadow-sm"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 shrink-0">
        <button className="flex items-center gap-2 px-4 py-3 font-semibold text-[#002b73] hover:bg-gray-50 rounded-xl transition-colors">
          <span className="material-symbols-outlined text-[20px]">filter_list</span> Filter
        </button>
        <button className="flex items-center gap-2 px-4 py-3 font-semibold text-[#002b73] hover:bg-gray-50 rounded-xl transition-colors">
          <span className="material-symbols-outlined text-[20px]">download</span> Export
        </button>
      </div>
    </div>
  );
}