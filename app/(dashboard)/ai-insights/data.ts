export const summaryStats = [
  { id: 1, title: 'Active Detections', value: '142', icon: 'radar', color: 'primary' },
  { id: 2, title: 'High Priority Cases', value: '28', icon: 'priority_high', color: 'error' },
  { id: 3, title: 'Recommended Updates', value: '85', icon: 'update', color: 'tertiary' },
  { id: 4, title: 'Model Confidence Avg', value: '94%', icon: 'verified', color: 'secondary' },
];

export const recommendations = [
  {
    id: 1,
    initials: 'SW',
    name: 'Siti Wahyuni',
    avatarBg: 'bg-primary-fixed-dim',
    avatarColor: 'text-primary',
    tagIcon: 'trending_down',
    tagText: 'Sudden income drop',
    tagStyle: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
    description: 'Anomaly detected in recent tax reporting paired with localized industry layoff data. High probability of assistance qualification.',
    confidence: '96%',
  },
  {
    id: 2,
    initials: 'AS',
    name: 'Agus Setiawan',
    avatarBg: 'bg-surface-variant',
    avatarColor: 'text-on-surface-variant',
    tagIcon: 'local_hospital',
    tagText: 'Medical dependency',
    tagStyle: 'bg-error-container text-on-error-container',
    description: 'Correlation found between new disability registry entry and household income stability. Proactive assistance suggested.',
    confidence: '91%',
  },
];

export const explainabilityFactors = [
  { id: 1, label: 'Decrease in Income', impact: '-35%', isNegative: true, percentage: 35 },
  { id: 2, label: 'Employment Status Change', impact: '-20%', isNegative: true, percentage: 20 },
  { id: 3, label: 'Regional Cost of Living', impact: '+15%', isNegative: false, percentage: 15 },
];