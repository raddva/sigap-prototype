// app/screens/dashboard/data.ts

export const statsData = [
  {
    id: 1,
    title: "Total Citizens Verified",
    value: "124,592",
    icon: "verified_user",
    iconBg: "bg-[#e8f0fe]",
    iconColor: "text-[#0056D2]",
    trend: "+12% this month",
    trendIcon: "trending_up",
    trendColor: "text-[#1b6d24]",
  },
  {
    id: 2,
    title: "AI Detection Triggered",
    value: "3,421",
    icon: "psychology_alt",
    iconBg: "bg-[#fef7e0]",
    iconColor: "text-[#b06000]",
    trend: "Requires manual review",
    trendIcon: "warning",
    trendColor: "text-[#ba1a1a]",
  },
  {
    id: 3,
    title: "Pending Verification",
    value: "8,904",
    icon: "assignment",
    iconBg: "bg-[#e6f4ea]",
    iconColor: "text-[#1b6d24]",
    trend: "Avg processing: 2 days",
    trendIcon: "schedule",
    trendColor: "text-gray-500",
  },
  {
    id: 4,
    title: "Approval Rate",
    value: "86.4%",
    icon: "fact_check",
    iconBg: "bg-[#f1f3f4]",
    iconColor: "text-[#5f6368]",
    trend: "+2.1% vs last month",
    trendIcon: "trending_up",
    trendColor: "text-[#1b6d24]",
  },
];

export const citizenQueueData = [
  {
    id: "BS",
    name: "Budi Santoso",
    region: "West Java",
    eligScore: 85,
    econScore: -12,
    status: "AI Recommended",
    statusIcon: "psychology",
    statusBg: "bg-[#e6f4ea]",
    statusColor: "text-[#1b6d24]",
    isActive: false,
  },
  {
    id: "SW",
    name: "Siti Wahyuni",
    region: "Central Java",
    eligScore: 60,
    econScore: 45,
    status: "High Priority Review",
    statusIcon: "warning",
    statusBg: "bg-[#fef7e0]",
    statusColor: "text-[#b06000]",
    isActive: true, // Menandakan baris ini sedang di-highlight
  },
  {
    id: "AS",
    name: "Agus Setiawan",
    region: "East Java",
    eligScore: 92,
    econScore: -5,
    status: "Pending Check",
    statusIcon: "schedule",
    statusBg: "bg-gray-100",
    statusColor: "text-gray-600",
    isActive: false,
  },
];

export const focusCaseData = {
  name: "Siti Wahyuni",
  id: "3301XXXXXXXX0002",
  anomalyTitle: "Anomaly Detected",
  anomalyDesc: "Economic status indicates a 45% improvement in utility usage over 3 months, conflicting with reported income level.",
  confidenceScores: {
    identityMatch: 99,
    incomeVeracity: 42,
  },
};