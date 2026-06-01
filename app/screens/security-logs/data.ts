// src/app/screens/security-logs/data.ts

export const auditLogsData = [
  {
    id: 'log-1',
    title: 'Officer Login',
    icon: 'login',
    iconColor: 'text-[#002b73]',
    timestamp: 'Today, 08:14 AM',
    description: 'Successful authentication via biometric verification. Session initiated from Regional Office B.',
    tags: [
      { label: 'Info', styleClass: 'bg-gray-200 text-gray-700' },
      { label: 'User: ID-4921', styleClass: 'bg-gray-200 text-gray-700' },
      { label: 'IP: 192.168.1.45', styleClass: 'bg-gray-200 text-gray-700' },
    ]
  },
  {
    id: 'log-2',
    title: 'Approval Action',
    icon: 'check_circle',
    iconColor: 'text-[#1b6d24]',
    timestamp: 'Today, 09:30 AM',
    description: 'Bulk approval of 150 aid distribution requests for District 4.',
    tags: [
      { label: 'Approved', styleClass: 'bg-[#a0f499] text-[#005312]' },
      { label: 'Batch: #892-A', styleClass: 'bg-gray-200 text-gray-700' },
    ]
  },
  {
    id: 'log-3',
    title: 'AI Threshold Changed',
    icon: 'warning',
    iconColor: 'text-[#b06000]',
    timestamp: 'Yesterday, 14:22 PM',
    description: 'System admin adjusted anomaly detection sensitivity from 0.85 to 0.70.',
    tags: [
      { label: 'Warning', styleClass: 'bg-[#fef7e0] text-[#b06000]' },
      { label: 'Admin: sys_root', styleClass: 'bg-gray-200 text-gray-700' },
    ]
  },
  {
    id: 'log-4',
    title: 'Report Exported',
    icon: 'download',
    iconColor: 'text-[#002b73]',
    timestamp: 'Yesterday, 16:45 PM',
    description: 'Monthly compliance report generated and exported to secure storage.',
    tags: [
      { label: 'Info', styleClass: 'bg-gray-200 text-gray-700' },
      { label: 'Format: PDF', styleClass: 'bg-gray-200 text-gray-700' },
    ]
  }
];