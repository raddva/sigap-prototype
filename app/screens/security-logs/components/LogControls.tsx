import React from "react";
import { Search, Filter, Download } from "lucide-react";

export default function LogControls() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8 items-stretch md:items-center">

      {/* SEARCH */}
      <div className="relative w-full group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#002b73] transition" />

        <input
          type="text"
          placeholder="Search events, users, or IPs..."
          className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm text-gray-700 shadow-sm
          focus:outline-none focus:ring-2 focus:ring-[#002b73] focus:border-transparent transition"
        />
      </div>

      {/* ACTIONS */}
      <div className="flex gap-3 shrink-0">
        <button className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-[#002b73] font-semibold text-sm hover:bg-gray-50 transition">
          <Filter className="w-4 h-4" />
          Filter
        </button>

        <button className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-[#002b73] font-semibold text-sm hover:bg-gray-50 transition">
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>
    </div>
  );
}