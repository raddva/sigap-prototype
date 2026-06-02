// src/app/screens/ai-insights/components/InsightsHeader.tsx
import React from 'react';

export default function InsightsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-6">
      <div>
        <h1 className="text-3xl font-bold text-[#002b73] mb-2" style={{ fontFamily: "Public Sans, sans-serif" }}>
          AI Insights
        </h1>
        <p className="text-sm text-gray-500">Transparent AI recommendation and socioeconomic analysis</p>
      </div>
      <button className="flex items-center gap-2 text-[#0056D2] font-bold text-sm hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors">
        <span className="material-symbols-outlined text-[18px]">refresh</span> Refresh Analysis
      </button>
    </div>
  );
}