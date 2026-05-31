// app/screens/citizen-monitoring/data.ts

export const citizensData = [
  {
    id: "320114567890002",
    name: "Budi Santoso",
    initials: "BS",
    img: "https://ui-avatars.com/api/?name=Budi+Santoso&background=random",
    region: "Jakarta Pusat",
    econScore: "-15%",
    econTrendIcon: "trending_down",
    econTrendColor: "text-[#ba1a1a]",
    aiRecommendation: "AI Recommended",
    aiRecBg: "bg-[#e6f4ea]",
    aiRecColor: "text-[#1b6d24]",
    aiRecIcon: "psychology",
    verificationStatus: "Under Review",
    verStatBg: "bg-[#fef7e0]",
    verStatColor: "text-[#b06000]",
    isActive: true,
  },
  {
    id: "35022111222333",
    name: "Siti Aminah",
    initials: "SA",
    img: "",
    region: "Surabaya",
    econScore: "-5%",
    econTrendIcon: "trending_flat",
    econTrendColor: "text-gray-500",
    aiRecommendation: "Needs Review",
    aiRecBg: "bg-gray-100",
    aiRecColor: "text-gray-600",
    aiRecIcon: "help",
    verificationStatus: "Pending",
    verStatBg: "bg-gray-100",
    verStatColor: "text-gray-600",
    isActive: false,
  },
];

export const detailData = {
  name: "Budi Santoso",
  id: "320114567890002",
  avatar: "https://ui-avatars.com/api/?name=Budi+Santoso&background=random",
  confidence: "92%",
  summary: "System detected a significant drop in primary income indicators combined with recent medical expense anomalies reported via WhatsApp verification.",
  econScore: -15,
  eligibilityScore: 88,
  evidence: [
    { type: 'pdf', name: 'Medical Bill.pdf' },
    { type: 'image', name: 'Notice.jpg', url: 'https://images.unsplash.com/photo-1616628188550-808682f3926d?q=80&w=200&auto=format&fit=crop' }
  ],
  timeline: [
    { title: "Officer review pending", time: "Current State", status: "current" },
    { title: "Citizen Uploaded Evidence", time: "Today 09:15", status: "done" },
    { title: "WhatsApp Verification Sent", time: "Yesterday 14:30", status: "done" },
    { title: "AI Detection Triggered", time: "Yesterday 10:05", status: "done" },
  ]
};