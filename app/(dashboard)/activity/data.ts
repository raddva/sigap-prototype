export const statusCards = [
  { id: 1, title: 'Active Verifications', icon: 'verified_user', value: '1,432', subtext: '12%', subtextIcon: 'arrow_upward', type: 'primary', isOptimal: false },
  { id: 2, title: 'AI Processing Queue', icon: 'psychology', value: '89', subtext: 'items pending', type: 'tertiary', isOptimal: false },
  { id: 3, title: 'WhatsApp Delivery', icon: 'forum', value: '98.2%', subtext: 'Optimal', type: 'secondary', isOptimal: true },
  { id: 4, title: 'Pending Officer Reviews', icon: 'assignment_late', value: '340', subtext: 'High', type: 'error', isOptimal: true },
];

export const feedEvents = [
  { id: 1, type: 'error', icon: 'warning', title: 'AI Detection Triggered', time: '2 mins ago', citizen: 'Budi Santoso', detail: 'High economic change detected (-15%).', detailIcon: 'trending_down' },
  { id: 2, type: 'neutral', icon: 'upload_file', title: 'Evidence Uploaded', time: '15 mins ago', citizen: 'Siti Aminah', detail: '3 documents verified.', detailIcon: 'description' },
  { id: 3, type: 'success', icon: 'check_circle', title: 'Officer Approved', time: '1 hour ago', officer: 'A. Rahman', caseNo: '#3201' },
  { id: 4, type: 'primary', icon: 'chat', title: 'WhatsApp Sent', time: '2 hours ago', count: '1,240' },
];

export const priorityEvents = [
  { id: 1, tag: 'AI Escalated', title: 'High Priority: Anomaly Detected', desc: 'Concentration of unexpected applications in Surabaya region.', action: 'Investigate', type: 'error' },
  { id: 2, tag: 'System Alert', title: 'Requires Attention', desc: '12 verification timeouts recorded in West Java data nodes.', action: 'View Logs', type: 'tertiary' },
];