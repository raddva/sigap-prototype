// app/screens/security-logs/data.ts

export interface LogTag {
  label: string;
  styleClass: string;
}

export interface AuditLog {
  id: string;
  title: string;
  icon: string;
  iconColorClass: string;
  timestamp: string;
  description: string;
  tags: LogTag[];
}

export const auditLogsData: AuditLog[] = [
  {
    id: 'log-1',
    title: 'Officer Login',
    icon: 'login',
    iconColorClass: 'text-primary',
    timestamp: 'Today, 08:14 AM',
    description: 'Successful authentication via biometric verification. Session initiated from Regional Office B.',
    tags: [
      { label: 'Info', styleClass: 'bg-surface-container-high text-on-surface-variant' },
      { label: 'User: ID-4921', styleClass: 'bg-surface-container-high text-on-surface-variant' },
      { label: 'IP: 192.168.1.45', styleClass: 'bg-surface-container-high text-on-surface-variant' },
    ]
  },
  {
    id: 'log-2',
    title: 'Approval Action',
    icon: 'check_circle',
    iconColorClass: 'text-secondary',
    timestamp: 'Today, 09:30 AM',
    description: 'Bulk approval of 150 aid distribution requests for District 4.',
    tags: [
      { label: 'Approved', styleClass: 'bg-secondary-container text-on-secondary-container' },
      { label: 'Batch: #892-A', styleClass: 'bg-surface-container-high text-on-surface-variant' },
    ]
  },
  {
    id: 'log-3',
    title: 'AI Threshold Changed',
    icon: 'warning',
    iconColorClass: 'text-tertiary-container',
    timestamp: 'Yesterday, 14:22 PM',
    description: 'System admin adjusted anomaly detection sensitivity from 0.85 to 0.70.',
    tags: [
      { label: 'Warning', styleClass: 'bg-tertiary-fixed text-on-tertiary-fixed' },
      { label: 'Admin: sys_root', styleClass: 'bg-surface-container-high text-on-surface-variant' },
    ]
  },
  {
    id: 'log-4',
    title: 'Report Exported',
    icon: 'file_download',
    iconColorClass: 'text-primary',
    timestamp: 'Yesterday, 16:45 PM',
    description: 'Monthly compliance report generated and exported to secure storage.',
    tags: [
      { label: 'Info', styleClass: 'bg-surface-container-high text-on-surface-variant' },
      { label: 'Format: PDF', styleClass: 'bg-surface-container-high text-on-surface-variant' },
    ]
  }
];