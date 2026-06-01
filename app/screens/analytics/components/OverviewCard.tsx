// src/app/screens/analytics/components/OverviewCard.tsx
import React from "react";

interface OverviewCardProps {
  title: string;
  value: string;
  icon: string;
  trend: string;
  isPositive: boolean;
}

export default function OverviewCard({ title, value, icon, trend, isPositive }: OverviewCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <span className="material-symbols-outlined text-[#0056D2] text-[24px]">{icon}</span>
        <span className={`text-xs font-bold ${isPositive ? 'text-[#1b6d24]' : 'text-gray-500'}`}>
          {trend}
        </span>
      </div>
      <div>
        <p className="text-xs text-gray-500 font-medium mb-1">{title}</p>
        <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
      </div>
    </div>
  );
}