// src/app/screens/verification-requests/data.ts

export const statsData = [
  { id: 1, label: 'Total Requests Sent', value: '12,450', trend: '+5.2%', trendIcon: 'trending_up', trendColor: 'text-[#1b6d24]' },
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
    deliveryColor: 'text-[#0056D2]',
    responseStatus: 'Completed',
    responseStyle: 'bg-[#e6f4ea] text-[#1b6d24]',
    lastActivity: '2 mins ago'
  },
  {
    id: 2,
    name: 'Siti Aminah',
    phone: '+62 856-7890-1234',
    type: 'ID Update',
    deliveryStatus: 'Sent',
    deliveryIcon: 'done',
    deliveryColor: 'text-gray-500',
    responseStatus: 'Pending',
    responseStyle: 'bg-[#fef7e0] text-[#b06000]',
    lastActivity: '5 hours ago'
  },
  {
    id: 3,
    name: 'Agus Wijaya',
    phone: '+62 811-2233-4455',
    type: 'Address Change',
    deliveryStatus: 'Failed',
    deliveryIcon: 'error',
    deliveryColor: 'text-[#ba1a1a]',
    responseStatus: 'Expired',
    responseStyle: 'bg-gray-100 text-gray-500',
    lastActivity: '2 days ago'
  }
];