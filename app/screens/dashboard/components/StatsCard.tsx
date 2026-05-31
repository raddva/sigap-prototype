// app/screens/dashboard/components/StatsCard.tsx
import React from "react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  trend: string;
  trendIcon: string;
  trendColor: string;
}

export default function StatsCard({ title, value, icon, iconBg, iconColor, trend, trendIcon, trendColor }: StatsCardProps) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-semibold text-gray-500">{title}</span>
        <div className={`w-8 h-8 rounded-lg ${iconBg} ${iconColor} flex items-center justify-center`}>
          <span className="material-symbols-outlined text-[18px]">{icon}</span>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        <p className={`text-xs font-medium ${trendColor} mt-1 flex items-center gap-1`}>
          <span className="material-symbols-outlined text-[14px]">{trendIcon}</span> {trend}
        </p>
      </div>
    </div>
  );
}