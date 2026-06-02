import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  type?: "verified" | "warning" | "pending" | "neutral";
  trend: string;
  trendType?: "up" | "down" | "neutral" | "risk";
}

export default function StatsCard({
  title,
  value,
  type = "neutral",
  trend,
  trendType = "neutral",
}: StatsCardProps) {
  const iconMap = {
    verified: {
      icon: <ShieldCheck className="w-4 h-4" />,
      bg: "bg-blue-50",
      color: "text-[#0056D2]",
    },
    warning: {
      icon: <AlertTriangle className="w-4 h-4" />,
      bg: "bg-orange-50",
      color: "text-[#b06000]",
    },
    pending: {
      icon: <Clock className="w-4 h-4" />,
      bg: "bg-gray-100",
      color: "text-gray-600",
    },
    neutral: {
      icon: <CheckCircle2 className="w-4 h-4" />,
      bg: "bg-green-50",
      color: "text-green-600",
    },
  };

  const trendMap = {
    up: {
      icon: <TrendingUp className="w-3.5 h-3.5" />,
      color: "text-[#1b6d24]",
    },
    down: {
      icon: <TrendingDown className="w-3.5 h-3.5" />,
      color: "text-[#ba1a1a]",
    },
    risk: {
      icon: <AlertTriangle className="w-3.5 h-3.5" />,
      color: "text-[#ba1a1a]",
    },
    neutral: {
      icon: <Minus className="w-3.5 h-3.5" />,
      color: "text-gray-500",
    },
  };

  const icon = iconMap[type];
  const trendIcon = trendMap[trendType];

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition">

      {/* HEADER */}
      <div className="flex justify-between items-start mb-4">
        <span className={`text-lg font-semibold ${icon.color}`}>
          {title}
        </span>

        <div
          className={`w-9 h-9 rounded-lg flex items-center justify-center ${icon.bg} ${icon.color}`}
        >
          {icon.icon}
        </div>
      </div>

      {/* VALUE */}
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>

      {/* TREND */}
      <p className={`text-xs font-medium mt-1 flex items-center gap-1 ${trendMap[trendType].color}`}>
        {trendIcon.icon}
        {trend}
      </p>
    </div>
  );
}