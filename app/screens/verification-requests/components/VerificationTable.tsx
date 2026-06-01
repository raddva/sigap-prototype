// src/app/screens/verification-requests/components/VerificationTable.tsx
import React from 'react';
import { verificationRequests } from '../data';

export default function VerificationTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
      {/* Table Header / Tabs */}
      <div className="p-2 border-b border-gray-100 flex justify-between items-center">
        <div className="flex">
          <button className="px-4 py-2 text-sm font-bold text-gray-800 bg-gray-100 rounded-lg">All Requests</button>
          <button className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-800 transition-colors">Pending Only</button>
        </div>
        <button className="flex items-center gap-1.5 text-[#0056D2] text-sm font-bold px-3 py-1.5 hover:bg-[#e8f0fe] rounded-lg transition-colors mr-2">
          <span className="material-symbols-outlined text-[18px]">filter_list</span> Filter
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8f9fa] text-gray-500 text-[11px] font-bold uppercase tracking-wider border-b border-gray-100">
              <th className="p-4">Citizen Info</th>
              <th className="p-4">Type</th>
              <th className="p-4">Delivery</th>
              <th className="p-4">Response</th>
              <th className="p-4">Last Activity</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {verificationRequests.map((req) => (
              <tr key={req.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <div className="font-bold text-gray-900">{req.name}</div>
                  <div className="text-xs text-gray-500">{req.phone}</div>
                </td>
                <td className="p-4">
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs font-semibold text-gray-700">{req.type}</span>
                </td>
                <td className="p-4">
                  <div className={`flex items-center gap-1 font-semibold text-xs ${req.deliveryColor}`}>
                    <span className="material-symbols-outlined text-[16px]">{req.deliveryIcon}</span>
                    {req.deliveryStatus}
                  </div>
                </td>
                <td className="p-4">
                  <span className={`${req.responseStyle} px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide inline-block`}>
                    {req.responseStatus}
                  </span>
                </td>
                <td className="p-4 text-gray-500 text-xs font-medium">{req.lastActivity}</td>
                <td className="p-4 text-center">
                  <button className="text-gray-400 hover:text-gray-800 transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer */}
      <div className="p-4 border-t border-gray-100 flex justify-center">
        <button className="text-[#0056D2] text-xs font-bold hover:underline">Load More Records</button>
      </div>
    </div>
  );
}