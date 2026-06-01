// src/app/screens/appeals/components/ActionBar.tsx
import React from 'react';

export default function ActionBar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 bg-[#f8f9fa] p-3 rounded-xl border border-gray-100">
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        <button className="px-4 py-2 rounded-lg bg-white text-gray-700 text-sm font-semibold border border-gray-200 hover:border-[#0056D2] hover:text-[#0056D2] transition-colors flex items-center gap-2 shadow-sm">
          <span className="material-symbols-outlined text-[18px]">filter_list</span> All Statuses
        </button>
        <button className="px-4 py-2 rounded-lg bg-white text-gray-700 text-sm font-semibold border border-gray-200 hover:border-[#0056D2] hover:text-[#0056D2] transition-colors flex items-center gap-2 shadow-sm">
          <span className="material-symbols-outlined text-[18px]">calendar_today</span> This Month
        </button>
        <button className="px-4 py-2 rounded-lg bg-white text-gray-700 text-sm font-semibold border border-gray-200 hover:border-[#0056D2] hover:text-[#0056D2] transition-colors flex items-center gap-2 shadow-sm">
          <span className="material-symbols-outlined text-[18px]">sort</span> Priority
        </button>
      </div>

      {/* Action Button */}
      <div className="w-full md:w-auto">
        <button className="w-full md:w-auto px-5 py-2.5 bg-[#0056D2] hover:bg-[#0040a1] text-white rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-[20px]">add</span> New Case
        </button>
      </div>

    </div>
  );
}