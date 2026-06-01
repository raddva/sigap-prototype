// src/app/screens/analytics/components/AIPerformance.tsx
import React from "react";
import { aiPerformanceData } from "../data";

export default function AIPerformance() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm h-full min-h-[250px] flex flex-col">
      <h3 className="text-sm font-bold text-gray-900 mb-4">AI Performance Metrics</h3>
      
      <div className="grid grid-cols-2 gap-4 flex-1">
        {aiPerformanceData.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-lg p-4 flex flex-col justify-center bg-white">
            <p className="text-[#0056D2] text-[12px] font-medium mb-1">{item.label}</p>
            <h4 className="text-2xl font-bold text-gray-900">{item.value}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}