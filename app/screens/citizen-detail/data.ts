// src/app/screens/citizen-detail/data.ts

export const citizenProfile = {
  name: "Siti Wahyuni",
  nik: "3273010101900001",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl7k2cf6mmNeYwpAVTYbWBvQGQh_sOaQ9jCd5VfOPwfrdeRU0vFRb-DLJMLdZJ0-8a99DLkvhMHLTnvGDrfCQYgewqj-E0SYTSJPZagccYn2GlpN3AL7thhZAajeoYveM2YLQW-PNr1ToPgHyAwGhDrDe3k-0sO-IkLEd5RqduPYPTpX6cEn0x6sbmuHuccq9pv-Q-eePNUDOYB9THryxcqGF_WUhjcueS8j2Isu33g0fmRjbT8keGpC9RGZSl34qlQzTSW2APvu5j",
  location: "West Java, Indonesia",
  familyMembers: 4,
  verificationStatus: "WhatsApp Verified",
  lastVerification: "2 hrs ago",
};

export const economicScores = [
  { title: "Eligibility Score", value: "82/100", percentage: 82, color: "bg-[#002b73]", textColor: "text-[#002b73]" },
  { title: "Economic Change", value: "-12%", percentage: 12, color: "bg-[#ba1a1a]", textColor: "text-[#ba1a1a]" },
  { title: "Verification Confidence", value: "96%", percentage: 96, color: "bg-[#1b6d24]", textColor: "text-[#1b6d24]" }
];

export const aiRecommendations = [
  { id: 1, reason: "Income inconsistency detected", impact: "-35% impact", isNegative: true, icon: "trending_down" },
  { id: 2, reason: "Employment status changed", impact: "-20% impact", isNegative: true, icon: "work_off" },
  { id: 3, reason: "Utility spending increased 45%", impact: "+15% impact", isNegative: false, icon: "receipt_long" },
  { id: 4, reason: "Household dependency increased", impact: "-15% impact", isNegative: true, icon: "group_add" }
];

export const uploadedEvidence = [
  { id: 1, title: "Salary Proof", time: "Verified today", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUPlTrZiEPLxGSW17WAlesXuiGLi3cZfHTJrrHSvb05dNtJLIivr2ESe4pPUhM5j_akyh6L8zEFvfrVnhF4pTsOqxtbIEXMahgbWEwJkxxPW9IkVEFaingJhlmZ5E8dEMXl_3gjUyac48QrEvY0FRvpSYkqa5AuPZXBkGu0TtH5oPp2dwe85WR1DHlWCYkJV8hEq5KSpCfSLQPCgXpLaVOE6K3qxIjyoPL_bQISrPzJea0-FJAzc3vzD-uCyZ_0rlnnfQBtAy1wHqX" },
  { id: 2, title: "ID Photo", time: "Verified 1 day ago", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEmaUijzxxkJ6bVkC6_ragvowK03Xgvl_jho-Sk45Se34OIhuhbeLOu8xzb-PMd3E21s-vGR9JEESxu5ttGEMufuhg1w8PYDujhCPtm22Jyd1Fkb5N_vVPumelsCXM7311VgFZ0d-SHzI5kw9almzF1osYA6xvPbSjV_ZNCokp51zL6tIQHFfUkNidM3nfCYY0LZl0Wkue-UXjN7rHBvJBGd4zPul_PRvuBseGGiX2fFqx_QR6veUT4ceJ_6qfl1pTCUfXqyAyVaEk" },
  { id: 3, title: "Support Document", time: "Verified 2 days ago", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0X8Z79JyiAa5Pni12bkcR0BdwlHFRI1X20UQST3AvsjrRdmfgOc_sxgBJRS0lR2e7aFpgtO-fAxWBvKzvJxOvIlQvfi_-go337SAIzvYW1qAF7GPQsSRYJAHtpyYYN9BgUvDR2FktPLI6iUtXXsbp_YwBMCiNTwjo3szte1RUKrJwkU-bnYvFSJrBRUBWxUryehKels7KyI-Zc97NVo5hCTMmtiPrUSYCodaPnYx0jM9Wbi1DL07eZ70Fennd541rJ3sGxR5tM2Yo" }
];

export const verificationHistory = [
  { id: 1, title: "Officer reviewed submission", desc: "Awaiting final validation from human officer.", time: "Pending", isPending: true },
  { id: 2, title: "Evidence uploaded", desc: "Citizen uploaded 3 required documents.", time: "1 day ago", isPending: false },
  { id: 3, title: "Citizen completed form", desc: "Initial eligibility questionnaire completed via portal.", time: "1 day ago", isPending: false },
  { id: 4, title: "WhatsApp verification sent", desc: "Automated ping sent to registered number.", time: "2 days ago", isPending: false },
  { id: 5, title: "AI Detection Triggered", desc: "System flagged significant economic change based on utility and employment data.", time: "2 days ago", isPending: false }
];