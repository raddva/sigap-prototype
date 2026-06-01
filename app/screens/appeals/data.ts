// src/app/screens/appeals/data.ts

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
    statusStyle: 'bg-[#fef7e0] text-[#b06000]', // Yellow badge
    statusIcon: 'more_horiz',
    officer: 'Unassigned',
    priority: 'High',
    priorityStyle: 'text-[#ba1a1a] font-semibold', // Red text
    priorityIcon: 'priority_high', // Exclamation mark
  },
  {
    id: 'APP-8925',
    initials: 'BS',
    name: 'Budi Santoso',
    type: 'Data Correction',
    date: 'Oct 10, 2023',
    status: 'Under Review',
    statusStyle: 'bg-[#e8f0fe] text-[#0056D2]', // Blue badge
    statusIcon: 'hourglass_empty',
    officer: 'Ahmad Fauzi',
    priority: 'Medium',
    priorityStyle: 'text-gray-600 font-medium',
    priorityIcon: '',
  },
  {
    id: 'APP-8926',
    initials: 'NW',
    name: 'Nurul Wulandari',
    type: 'Payment Missing',
    date: 'Oct 05, 2023',
    status: 'Resolved',
    statusStyle: 'bg-[#e6f4ea] text-[#1b6d24]', // Green badge
    statusIcon: 'check_circle',
    officer: 'Dian Kusuma',
    priority: 'Low',
    priorityStyle: 'text-gray-600 font-medium',
    priorityIcon: '',
  }
];