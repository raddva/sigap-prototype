// src/app/screens/ai-insights/components/RecommendationFeed.tsx
import React from 'react';
import { recommendations } from '../data';

export default function RecommendationFeed() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Public Sans, sans-serif" }}>
        Priority Recommendations
      </h2>
      <div className="bg-[#f3f4f6] p-4 rounded-2xl flex flex-col gap-4 border border-gray-200">
        {recommendations.map((rec) => (
          <div key={rec.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-start justify-between gap-4">
            <div className="flex gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${rec.avatarBg} ${rec.avatarColor}`}>
                {rec.id}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-bold text-gray-900">{rec.name}</h3>
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold ${rec.tagStyle}`}>
                    <span className="material-symbols-outlined text-[14px]">{rec.tagIcon}</span> {rec.tagText}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4 max-w-2xl leading-relaxed">
                  {rec.desc}
                </p>
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-1 bg-gray-100 text-[#002b73] px-2 py-1 rounded text-xs font-bold">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span> AI Recommended
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#1b6d24] text-xs font-bold">
                    <span className="material-symbols-outlined text-[14px]">verified</span> {rec.confidence} Confidence
                  </span>
                </div>
              </div>
            </div>
            <button className="shrink-0 text-[#0056D2] font-bold text-sm hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors">
              Review Case
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}