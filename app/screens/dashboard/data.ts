// app/screens/dashboard/data.ts

export const statsData = [
  {
    id: 1,
    title: "Total Citizens Verified",
    value: "124,592",
    type: "verified" as const,
    trend: "+12% this month",
    trendType: "up" as const,
  },
  {
    id: 2,
    title: "AI Detection Triggered",
    value: "3,421",
    type: "warning" as const,
    trend: "Requires manual review",
    trendType: "risk" as const,
  },
  {
    id: 3,
    title: "Pending Verification",
    value: "8,904",
    type: "pending" as const,
    trend: "Avg processing: 2 days",
    trendType: "neutral" as const,
  },
  {
    id: 4,
    title: "Approval Rate",
    value: "86.4%",
    type: "neutral" as const,
    trend: "+2.1% vs last month",
    trendType: "up" as const,
  },
];

export const citizenQueueData = [
  {
    id: "SW",
    name: "Siti Wahyuni",
    region: "Central Java",
    eligScore: 60,
    econScore: 45,
    status: "High Priority Review",
    statusType: "warning",
    isActive: false,
    aiCase: {
      name: "Siti Wahyuni",
      id: "3301XXXXXXXX0002",
      anomalyTitle: "Anomaly Detected",
      anomalyDesc:
        "Economic status indicates a 45% improvement in utility usage over 3 months, conflicting with reported income level.",
      confidenceScores: {
        identityMatch: 99,
        incomeVeracity: 42,
      },
    },
  },

  {
    id: "BS",
    name: "Budi Santoso",
    region: "West Java",
    eligScore: 85,
    econScore: -12,
    status: "AI Recommended",
    statusType: "ai",
    isActive: false,
    aiCase: {
      name: "Budi Santoso",
      id: "3201XXXXXXXX0001",
      anomalyTitle: "Income Stability Alert",
      anomalyDesc:
        "Sudden drop in reported income while transaction pattern remains stable.",
      confidenceScores: {
        identityMatch: 97,
        incomeVeracity: 68,
      },
    },
  },

  {
    id: "AS",
    name: "Agus Setiawan",
    region: "East Java",
    eligScore: 92,
    econScore: -5,
    status: "Pending Check",
    statusType: "pending",
    isActive: false,
    aiCase: {
      name: "Agus Setiawan",
      id: "3578XXXXXXXX0003",
      anomalyTitle: "Pending Data Validation",
      anomalyDesc:
        "Missing financial documents and inconsistent household data.",
      confidenceScores: {
        identityMatch: 88,
        incomeVeracity: 55,
      },
    },
  },

  {
    id: "DN",
    name: "Dewi Natalia",
    region: "Jakarta",
    eligScore: 72,
    econScore: 18,
    status: "AI Recommended",
    statusType: "ai",
    isActive: false,
    aiCase: {
      name: "Dewi Natalia",
      id: "3172XXXXXXXX0004",
      anomalyTitle: "Spending Pattern Shift",
      anomalyDesc:
        "Increase in non-essential spending detected over last 60 days.",
      confidenceScores: {
        identityMatch: 95,
        incomeVeracity: 61,
      },
    },
  },

  {
    id: "RJ",
    name: "Rudi Jatmiko",
    region: "West Java",
    eligScore: 48,
    econScore: -30,
    status: "High Priority Review",
    statusType: "warning",
    isActive: false,
    aiCase: {
      name: "Rudi Jatmiko",
      id: "3205XXXXXXXX0005",
      anomalyTitle: "Severe Economic Drop",
      anomalyDesc:
        "Significant decline in income and utility consumption detected.",
      confidenceScores: {
        identityMatch: 93,
        incomeVeracity: 38,
      },
    },
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