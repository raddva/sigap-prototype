export const statsData = [
  { id: 1, label: 'Total Requests Sent', value: '12,450', highlight: '+5.2%', highlightIcon: 'trending_up', highlightColor: 'text-secondary' },
  { id: 2, label: 'Delivered', value: '11,890' },
  { id: 3, label: 'Pending Response', value: '450' },
  { id: 4, label: 'Failed', value: '110', isError: true },
  { id: 5, label: 'Completion Rate', value: '92.4%', isPrimary: true }
];

export const verificationRequests = [
  {
    id: 1,
    name: 'Budi Santoso',
    phone: '+62 812-3456-7890',
    type: 'Economic Change',
    deliveryStatus: 'Read',
    deliveryIcon: 'done_all',
    deliveryColor: 'text-primary',
    responseStatus: 'Completed',
    responseStyle: 'bg-secondary-container/50 text-on-secondary-container',
    lastActivity: '2 mins ago'
  },
  {
    id: 2,
    name: 'Siti Aminah',
    phone: '+62 856-7890-1234',
    type: 'ID Update',
    deliveryStatus: 'Sent',
    deliveryIcon: 'done',
    deliveryColor: 'text-on-surface-variant',
    responseStatus: 'Pending',
    responseStyle: 'bg-tertiary-fixed text-on-tertiary-fixed',
    lastActivity: '5 hours ago'
  },
  {
    id: 3,
    name: 'Agus Wijaya',
    phone: '+62 811-2233-4455',
    type: 'Address Change',
    deliveryStatus: 'Failed',
    deliveryIcon: 'error',
    deliveryColor: 'text-error',
    responseStatus: 'Expired',
    responseStyle: 'bg-surface-variant text-on-surface-variant',
    lastActivity: '2 days ago'
  }
];