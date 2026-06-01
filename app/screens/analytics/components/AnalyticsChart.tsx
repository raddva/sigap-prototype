// src/app/screens/analytics/components/AnalyticsChart.tsx
import React from "react";

export default function AnalyticsChart() {
  // Mockup tinggi bar chart dalam persen
  const bars = [35, 55, 45, 65, 85, 55]; 

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm h-full min-h-[300px] flex flex-col">
      <h3 className="text-sm font-bold text-gray-900 mb-6">AI Detection Trends</h3>
      <div className="flex-1 flex items-end justify-between gap-4 mt-auto">
        {bars.map((height, i) => (
          <div 
            key={i} 
            className="w-full bg-[#b2c5ff] rounded-t-sm hover:bg-[#0056D2] transition-colors duration-300 cursor-pointer" 
            style={{ height: `${height}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
}