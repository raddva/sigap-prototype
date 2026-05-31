// src/app/screens/citizen-detail/components/AIRecommendations.tsx
import React from 'react';
import { aiRecommendations } from '../data';

export default function AIRecommendations() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-5">
        <span className="material-symbols-outlined text-[#0056D2]">psychology</span>
        <h2 className="text-lg font-bold text-gray-900" style={{ fontFamily: "Public Sans, sans-serif" }}>Why AI Recommended This</h2>
      </div>
      
      <div className="flex flex-col gap-3">
        {aiRecommendations.map((item) => (
          <div key={item.id} className="bg-gray-50 p-4 rounded-xl flex justify-between items-center border border-gray-100">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.isNegative ? 'bg-[#fce8e8] text-[#ba1a1a]' : 'bg-[#e8f0fe] text-[#0056D2]'}`}>
                <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
              </div>
              <span className="text-sm font-medium text-gray-800">{item.reason}</span>
            </div>
            <span className={`text-sm font-bold ${item.isNegative ? 'text-[#ba1a1a]' : 'text-[#0056D2]'}`}>
              {item.impact}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}