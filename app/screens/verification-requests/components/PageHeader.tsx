// src/app/screens/verification-requests/components/PageHeader.tsx
import React from 'react';

export default function PageHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-[#002b73] mb-2" style={{ fontFamily: "Public Sans, sans-serif" }}>
          Verification Requests
        </h1>
        <p className="text-[15px] text-gray-600">
          Monitor and manage automated WhatsApp verification requests.
        </p>
      </div>
      
      {/* Badges */}
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-1.5 bg-[#e6f4ea] text-[#1b6d24] px-3 py-1.5 rounded-full border border-[#1b6d24]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1b6d24] animate-pulse"></span>
          <span className="text-xs font-bold">WhatsApp System Active</span>
        </div>
        <div className="flex items-center gap-1.5 bg-[#e8f0fe] text-[#0056D2] px-3 py-1.5 rounded-full border border-[#0056D2]/20">
          <span className="material-symbols-outlined text-[14px]">cable</span>
          <span className="text-xs font-bold">Baileys Integration: Connected</span>
        </div>
        <div className="flex items-center gap-1.5 bg-[#e8f0fe] text-[#0056D2] px-3 py-1.5 rounded-full border border-[#0056D2]/20">
          <span className="material-symbols-outlined text-[14px]">sync</span>
          <span className="text-xs font-bold">Real-time sync</span>
        </div>
      </div>
    </div>
  );
}