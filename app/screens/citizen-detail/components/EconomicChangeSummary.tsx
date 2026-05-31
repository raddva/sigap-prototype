// src/app/screens/citizen-detail/components/EconomicChangeSummary.tsx
import React from 'react';
import { economicScores } from '../data';

export default function EconomicChangeSummary() {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "Public Sans, sans-serif" }}>Economic Change Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {economicScores.map((score, index) => (
          <div key={index} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-gray-500">{score.title}</span>
              <span className={`text-xl font-bold ${score.textColor}`}>{score.value}</span>
            </div>
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
              <div className={`${score.color} h-full rounded-full`} style={{ width: `${score.percentage}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}