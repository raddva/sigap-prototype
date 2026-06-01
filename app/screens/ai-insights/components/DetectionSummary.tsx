// src/app/screens/ai-insights/components/DetectionSummary.tsx
import React from 'react';
import { detectionStats } from '../data';

export default function DetectionSummary() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {detectionStats.map((stat) => (
        <div key={stat.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <span className={`material-symbols-outlined text-[24px] mb-4 ${stat.iconColor}`}>
            {stat.icon}
          </span>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
          <p className="text-xs font-medium text-gray-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}