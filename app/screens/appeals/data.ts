// app/screens/appeals/data.ts

export interface Appeal {
  id: string;
  initials: string;
  name: string;
  type: string;
  date: string;
  status: string;
  statusStyle: string;
  statusIcon: string;
  officer: string;
  priority: string;
  priorityStyle: string;
  priorityIcon: string;
}

export const appealsData: Appeal[] = [
  {
    id: 'APP-8924',
    initials: 'SR',
    name: 'Siti Rahmawati',
    type: 'Eligibility Dispute',
    date: 'Oct 12, 2023',
    status: 'New Appeal',
    statusStyle: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
    statusIcon: 'pending',
    officer: 'Unassigned',
    priority: 'High',
    priorityStyle: 'text-error font-medium',
    priorityIcon: 'priority_high',
  },
  {
    id: 'APP-8925',
    initials: 'BS',
    name: 'Budi Santoso',
    type: 'Data Correction',
    date: 'Oct 10, 2023',
    status: 'Under Review',
    statusStyle: 'bg-primary-container/10 text-primary-container',
    statusIcon: 'hourglass_empty',
    officer: 'Ahmad Fauzi',
    priority: 'Medium',
    priorityStyle: 'text-on-surface-variant',
    priorityIcon: '',
  },
  {
    id: 'APP-8926',
    initials: 'NW',
    name: 'Nurul Wulandari',
    type: 'Payment Missing',
    date: 'Oct 05, 2023',
    status: 'Resolved',
    statusStyle: 'bg-secondary-container text-on-secondary-container',
    statusIcon: 'check_circle',
    officer: 'Dian Kusuma',
    priority: 'Low',
    priorityStyle: 'text-on-surface-variant',
    priorityIcon: '',
  }
];