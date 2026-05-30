export const citizenProfile = {
  name: "Siti Wahyuni",
  nik: "3273010101900001",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl7k2cf6mmNeYwpAVTYbWBvQGQh_sOaQ9jCd5VfOPwfrdeRU0vFRb-DLJMLdZJ0-8a99DLkvhMHLTnvGDrfCQYgewqj-E0SYTSJPZagccYn2GlpN3AL7thhZAajeoYveM2YLQW-PNr1ToPgHyAwGhDrDe3k-0sO-IkLEd5RqduPYPTpX6cEn0x6sbmuHuccq9pv-Q-eePNUDOYB9THryxcqGF_WUhjcueS8j2Isu33g0fmRjbT8keGpC9RGZSl34qlQzTSW2APvu5j",
  location: "West Java, Indonesia",
  familyMembers: 4,
  verificationStatus: "WhatsApp Verified",
  lastVerification: "2 hrs ago",
  badges: [
    { label: "AI Recommended", icon: "psychology", type: "primary" },
    { label: "High Priority", type: "tertiary" },
    { label: "Under Review", type: "surface" }
  ]
};

export const economicScores = [
  { title: "Eligibility Score", value: "82/100", percentage: 82, color: "primary" },
  { title: "Economic Change", value: "-12%", percentage: 12, color: "error" },
  { title: "Verification Confidence", value: "96%", percentage: 96, color: "secondary" }
];

export const aiRecommendations = [
  { id: 1, reason: "Income inconsistency detected", impact: "-35%", impactType: "error", icon: "trending_down", iconBg: "error-container", iconColor: "on-error-container" },
  { id: 2, reason: "Employment status changed", impact: "-20%", impactType: "error", icon: "work_off", iconBg: "error-container", iconColor: "on-error-container" },
  { id: 3, reason: "Utility spending increased 45%", impact: "+15%", impactType: "primary", icon: "receipt_long", iconBg: "primary-fixed", iconColor: "on-primary-fixed" },
  { id: 4, reason: "Household dependency increased", impact: "-15%", impactType: "error", icon: "group_add", iconBg: "error-container", iconColor: "on-error-container" }
];

export const uploadedEvidence = [
  { id: 1, title: "Salary Proof", time: "Verified today", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUPlTrZiEPLxGSW17WAlesXuiGLi3cZfHTJrrHSvb05dNtJLIivr2ESe4pPUhM5j_akyh6L8zEFvfrVnhF4pTsOqxtbIEXMahgbWEwJkxxPW9IkVEFaingJhlmZ5E8dEMXl_3gjUyac48QrEvY0FRvpSYkqa5AuPZXBkGu0TtH5oPp2dwe85WR1DHlWCYkJV8hEq5KSpCfSLQPCgXpLaVOE6K3qxIjyoPL_bQISrPzJea0-FJAzc3vzD-uCyZ_0rlnnfQBtAy1wHqX" },
  { id: 2, title: "ID Photo", time: "Verified 1 day ago", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEmaUijzxxkJ6bVkC6_ragvowK03Xgvl_jho-Sk45Se34OIhuhbeLOu8xzb-PMd3E21s-vGR9JEESxu5ttGEMufuhg1w8PYDujhCPtm22Jyd1Fkb5N_vVPumelsCXM7311VgFZ0d-SHzI5kw9almzF1osYA6xvPbSjV_ZNCokp51zL6tIQHFfUkNidM3nfCYY0LZl0Wkue-UXjN7rHBvJBGd4zPul_PRvuBseGGiX2fFqx_QR6veUT4ceJ_6qfl1pTCUfXqyAyVaEk" },
  { id: 3, title: "Support Document", time: "Verified 2 days ago", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0X8Z79JyiAa5Pni12bkcR0BdwlHFRI1X20UQST3AvsjrRdmfgOc_sxgBJRS0lR2e7aFpgtO-fAxWBvKzvJxOvIlQvfi_-go337SAIzvYW1qAF7GPQsSRYJAHtpyYYN9BgUvDR2FktPLI6iUtXXsbp_YwBMCiNTwjo3szte1RUKrJwkU-bnYvFSJrBRUBWxUryehKels7KyI-Zc97NVo5hCTMmtiPrUSYCodaPnYx0jM9Wbi1DL07eZ70Fennd541rJ3sGxR5tM2Yo" }
];

export const verificationHistory = [
  { id: 1, title: "Officer reviewed submission", time: "Pending", desc: "Awaiting final validation from human officer.", status: "pending" },
  { id: 2, title: "Evidence uploaded", time: "1 day ago", desc: "Citizen uploaded 3 required documents.", status: "completed" },
  { id: 3, title: "Citizen completed form", time: "1 day ago", desc: "Initial eligibility questionnaire completed via portal.", status: "completed" },
  { id: 4, title: "WhatsApp verification sent", time: "2 days ago", desc: "Automated ping sent to registered number.", status: "completed" },
  { id: 5, title: "AI Detection Triggered", time: "2 days ago", desc: "System flagged significant economic change based on utility and employment data.", status: "completed" }
];