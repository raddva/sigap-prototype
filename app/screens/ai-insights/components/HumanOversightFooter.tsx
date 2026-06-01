// src/app/screens/ai-insights/components/HumanOversightFooter.tsx
import React from 'react';

export default function HumanOversightFooter() {
  return (
    <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-[#0056D2] p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="flex gap-4 items-start md:items-center">
        <div className="w-10 h-10 rounded-full bg-[#e8f0fe] text-[#0056D2] flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined">admin_panel_settings</span>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-sm mb-1">Officer Decision Required</h3>
          <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
            SIGAP AI acts solely as a recommendation engine to surface critical cases rapidly. All assistance approvals remain exclusively under human jurisdiction. Final verification is mandated.
          </p>
        </div>
      </div>
      <div className="shrink-0 bg-[#e6f4ea] border border-[#1b6d24]/20 text-[#1b6d24] px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold">
        <span className="material-symbols-outlined text-[18px]">verified_user</span> Human Verified Pipeline
      </div>
    </div>
  );
}