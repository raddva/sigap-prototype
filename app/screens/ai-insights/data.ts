// src/app/screens/ai-insights/data.ts

export const detectionStats = [
  { id: 1, value: "142", label: "Active Detections", icon: "radar", iconColor: "text-[#0056D2]" },
  { id: 2, value: "28", label: "High Priority Cases", icon: "priority_high", iconColor: "text-[#ba1a1a]" },
  { id: 3, value: "85", label: "Recommended Updates", icon: "update", iconColor: "text-[#b06000]" },
  { id: 4, value: "94%", label: "Model Confidence Avg", icon: "verified_user", iconColor: "text-[#1b6d24]" },
];

export const recommendations = [
  {
    id: "SW",
    name: "Siti Wahyuni",
    avatarBg: "bg-[#e8f0fe]",
    avatarColor: "text-[#0056D2]",
    tagText: "Sudden income drop",
    tagStyle: "bg-[#fef7e0] text-[#b06000]",
    tagIcon: "trending_down",
    desc: "Anomaly detected in recent tax reporting paired with localized industry layoff data. High probability of assistance qualification.",
    confidence: "96%",
  },
  {
    id: "AS",
    name: "Agus Setiawan",
    avatarBg: "bg-gray-200",
    avatarColor: "text-gray-700",
    tagText: "Medical dependency",
    tagStyle: "bg-[#fce8e8] text-[#ba1a1a]",
    tagIcon: "local_hospital",
    desc: "Correlation found between new disability registry entry and household income stability. Proactive assistance suggested.",
    confidence: "91%",
  },
];

export const explainabilityFactors = [
  { id: 1, label: "Decrease in Income", impact: "-35% Impact", percentage: 35, isNegative: true },
  { id: 2, label: "Employment Status Change", impact: "-20% Impact", percentage: 20, isNegative: true },
  { id: 3, label: "Regional Cost of Living", impact: "+15% Buffer", percentage: 15, isNegative: false },
];