// src/app/screens/verification-requests/components/StatsCards.tsx
import React from 'react';
import { statsData } from '../data';

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
      {statsData.map((stat) => {
        if (stat.isPrimary) {
          return (
            <div key={stat.id} className="bg-[#002b73] rounded-xl p-5 flex flex-col justify-center shadow-sm relative overflow-hidden text-white">
              <span className="text-xs font-semibold text-blue-200 mb-2 relative z-10">{stat.label}</span>
              <span className="text-3xl font-bold relative z-10">{stat.value}</span>
            </div>
          );
        }

        return (
          <div key={stat.id} className="bg-white rounded-xl p-5 flex flex-col justify-center shadow-sm border border-gray-100">
            <span className={`text-xs font-semibold mb-2 ${stat.isError ? 'text-[#ba1a1a]' : 'text-gray-500'}`}>
              {stat.label}
            </span>
            <div className="flex items-baseline gap-2">
              <span className={`text-3xl font-bold ${stat.isError ? 'text-[#ba1a1a]' : 'text-gray-900'}`}>
                {stat.value}
              </span>
              {stat.trend && (
                <span className={`text-xs font-bold ${stat.trendColor} flex items-center`}>
                  <span className="material-symbols-outlined text-[14px]">{stat.trendIcon}</span> {stat.trend}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}