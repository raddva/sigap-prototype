// app/screens/citizen-monitoring/components/CitizenFilter.tsx
import React from "react";

export default function CitizenFilter() {
  return (
    <div className="bg-[#f8f9fa] border border-gray-100 rounded-xl p-4 mb-6">
      {/* Search Bar */}
      <div className="relative mb-4 w-full md:w-1/2 lg:w-1/3">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
          search
        </span>
        <input
          type="text"
          placeholder="Search citizen name or ID..."
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#002b73] text-sm text-gray-700 shadow-sm"
        />
      </div>

      {/* Dropdowns */}
      <div className="flex flex-wrap gap-3">
        <div className="relative">
          <select className="appearance-none bg-white border border-gray-200 text-gray-700 text-sm rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#002b73] shadow-sm cursor-pointer">
            <option>Region</option>
            <option>Jakarta Pusat</option>
            <option>Surabaya</option>
          </select>
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[18px]">
            expand_more
          </span>
        </div>

        <div className="relative">
          <select className="appearance-none bg-white border border-gray-200 text-gray-700 text-sm rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#002b73] shadow-sm cursor-pointer">
            <option>Verification Status</option>
            <option>Under Review</option>
            <option>Pending</option>
          </select>
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[18px]">
            expand_more
          </span>
        </div>

        <div className="relative">
          <select className="appearance-none bg-white border border-gray-200 text-gray-700 text-sm rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#002b73] shadow-sm cursor-pointer">
            <option>AI Recommendation</option>
            <option>AI Recommended</option>
            <option>Needs Review</option>
          </select>
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[18px]">
            expand_more
          </span>
        </div>
      </div>
    </div>
  );
}