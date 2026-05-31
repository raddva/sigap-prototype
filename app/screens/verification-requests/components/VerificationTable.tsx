import { verificationRequests } from '../data';

export default function VerificationTable() {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_12px_32px_-4px_rgba(25,28,29,0.06)] flex flex-col">
      <div className="p-space-6 flex justify-between items-center bg-surface-container-lowest">
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface text-label-sm font-label-sm hover:bg-surface-variant transition-colors">All Requests</button>
          <button className="px-4 py-2 rounded-lg bg-transparent text-on-surface-variant text-label-sm font-label-sm hover:bg-surface-container-low transition-colors">Pending Only</button>
        </div>
        <button className="flex items-center gap-2 text-primary text-label-sm font-label-sm hover:bg-primary-fixed/30 px-3 py-1.5 rounded-lg transition-colors">
          <span className="material-symbols-outlined text-[18px]">filter_list</span>
          Filter
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant text-label-sm font-label-sm uppercase tracking-wider">
              <th className="p-space-4 font-medium rounded-tl-lg">Citizen Info</th>
              <th className="p-space-4 font-medium">Type</th>
              <th className="p-space-4 font-medium">Delivery</th>
              <th className="p-space-4 font-medium">Response</th>
              <th className="p-space-4 font-medium">Last Activity</th>
              <th className="p-space-4 font-medium rounded-tr-lg">Action</th>
            </tr>
          </thead>
          <tbody className="text-body-md font-body-md">
            {verificationRequests.map((req) => (
              <tr key={req.id} className="group hover:bg-surface-container-low/50 transition-colors">
                <td className="p-space-4">
                  <div className="font-semibold text-on-surface">{req.name}</div>
                  <div className="text-label-sm text-on-surface-variant">{req.phone}</div>
                </td>
                <td className="p-space-4">
                  <span className="bg-surface-container px-2 py-1 rounded text-label-sm text-on-surface">{req.type}</span>
                </td>
                <td className="p-space-4">
                  <div className={`flex items-center gap-1 ${req.deliveryColor}`}>
                    <span className="material-symbols-outlined text-[16px]">{req.deliveryIcon}</span>
                    <span className="text-label-sm">{req.deliveryStatus}</span>
                  </div>
                </td>
                <td className="p-space-4">
                  <span className={`${req.responseStyle} px-2 py-1 rounded-full text-label-sm inline-block`}>
                    {req.responseStatus}
                  </span>
                </td>
                <td className="p-space-4 text-on-surface-variant text-label-sm">{req.lastActivity}</td>
                <td className="p-space-4">
                  <button className="text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-space-4 border-t border-outline-variant/10 flex justify-center">
        <button className="text-primary text-label-sm font-label-sm hover:underline">Load More Records</button>
      </div>
    </div>
  );
}