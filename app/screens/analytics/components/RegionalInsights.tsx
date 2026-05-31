// src/app/screens/analytics/components/RegionalInsights.tsx
import React from "react";

export default function RegionalInsights() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm h-full flex flex-col">
      <h3 className="text-sm font-bold text-gray-900 mb-1">Regional Assistance</h3>
      <p className="text-xs text-gray-500 mb-4">Heatmap distribution across Indonesia</p>
      
      <div className="flex-1 bg-[#f0f4f8] rounded-xl flex items-center justify-center min-h-[200px]">
        <span className="material-symbols-outlined text-gray-400 text-4xl">map</span>
      </div>
    </div>
  );
}