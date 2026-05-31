// src/app/screens/analytics/components/AnalyticsChart.tsx
import React from "react";

export default function AnalyticsChart() {
  const bars = [40, 60, 50, 75, 90, 60]; // Dummy heights in percentage

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm h-full flex flex-col">
      <h3 className="text-sm font-bold text-gray-900 mb-6">AI Detection Trends</h3>
      <div className="flex-1 flex items-end justify-between gap-2 md:gap-4 mt-auto">
        {bars.map((height, i) => (
          <div 
            key={i} 
            className="w-full bg-[#b2c5ff] rounded-t-sm" 
            style={{ height: `${height}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
}