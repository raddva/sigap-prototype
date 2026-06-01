// src/app/screens/reports-center/components/PageHeader.tsx
import React from 'react';

export default function PageHeader() {
  return (
    <div className="mb-8 flex flex-col gap-3">
      {/* Badges */}
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold border border-gray-200">
          <span className="material-symbols-outlined text-[16px] text-[#0056D2]">auto_awesome</span>
          Automated Reporting
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold border border-gray-200">
          <span className="material-symbols-outlined text-[16px] text-[#0056D2]">monitoring</span>
          Real-time Analytics
        </span>
      </div>
      
      {/* Title & Subtitle */}
      <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "Public Sans, sans-serif" }}>
        Reports Center
      </h2>
      <p className="text-[15px] text-gray-600 max-w-2xl">
        Generate operational and government reporting documents
      </p>
    </div>
  );
}