// src/app/screens/ai-insights/components/ExplainabilityPanel.tsx
import React from 'react';
import { explainabilityFactors } from '../data';

export default function ExplainabilityPanel() {
  return (
    <aside className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
      <div className="flex items-center gap-2 text-[#0056D2] text-[10px] font-bold uppercase tracking-wider mb-2">
        <span className="material-symbols-outlined text-[14px]">bar_chart</span> Active Analysis
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Public Sans, sans-serif" }}>Model Explainability</h2>
      <p className="text-sm text-gray-600 mb-6">
        Currently detailing recommendation logic for <span className="font-bold text-gray-900">Siti Wahyuni</span>.
      </p>

      {/* Contributing Factors */}
      <div className="mb-6">
        <h3 className="text-sm font-bold text-gray-900 mb-4">Contributing Factors</h3>
        <div className="flex flex-col gap-4">
          {explainabilityFactors.map((factor) => (
            <div key={factor.id}>
              <div className="flex justify-between text-xs font-semibold mb-1.5">
                <span className="text-gray-600">{factor.label}</span>
                <span className={factor.isNegative ? "text-[#ba1a1a]" : "text-[#1b6d24]"}>{factor.impact}</span>
              </div>
              <div className={`w-full h-1.5 bg-gray-100 rounded-full flex ${factor.isNegative ? 'justify-start' : 'justify-end'}`}>
                <div 
                  className={`h-full rounded-full ${factor.isNegative ? 'bg-[#ba1a1a]' : 'bg-[#1b6d24]'}`} 
                  style={{ width: `${factor.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scores Box */}
      <div className="bg-[#f8f9fa] rounded-xl p-4 flex flex-col gap-3 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-gray-700">Eligibility Score</span>
          <span className="text-xl font-bold text-[#0056D2]">82/100</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-gray-700">Economic Change Severity</span>
          <span className="text-lg font-bold text-[#ba1a1a]">High</span>
        </div>
      </div>

      {/* Info Notice */}
      <div className="bg-[#fef7e0]/30 border border-[#fde293]/50 rounded-lg p-3 flex gap-2">
        <span className="material-symbols-outlined text-[#b06000] text-[16px] shrink-0 mt-0.5">info</span>
        <p className="text-[11px] text-gray-600 leading-relaxed">
          Model behavior is based on Q3 national census data and localized economic indicators. Last trained: 2 days ago.
        </p>
      </div>
    </aside>
  );
}