// src/app/screens/settings/data.ts

export const settingsTabs = [
  { id: 'ai', label: 'AI Configuration', icon: 'psychology' },
  { id: 'whatsapp', label: 'WhatsApp Integration', icon: 'chat' },
  { id: 'access', label: 'Access Management', icon: 'manage_accounts' },
  { id: 'security', label: 'Security & Audit Logs', icon: 'security' },
];

export const initialAiConfig = {
  eligibilityScore: 72,
  confidenceMin: 85,
  economicSensitivity: true,
  requireManualSignoff: true,
};

export const whatsappStatus = {
  status: 'Connected & Active',
  lastSynced: '2 mins ago',
  linkedNumber: '+62 812 3456 7890',
  messagesSent24h: '1,248',
};