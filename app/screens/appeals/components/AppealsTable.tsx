// src/app/screens/appeals/components/AppealsTable.tsx
import React from 'react';
import { appealsData } from '../data';

interface AppealsTableProps {
  onRowClick: (id: string) => void;
}

export default function AppealsTable({ onRowClick }: AppealsTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8f9fa] border-b border-gray-200">
              <th className="py-4 px-6 text-sm text-gray-600 font-bold">Citizen Name</th>
              <th className="py-4 px-6 text-sm text-gray-600 font-bold">Appeal Type</th>
              <th className="py-4 px-6 text-sm text-gray-600 font-bold">Submission Date</th>
              <th className="py-4 px-6 text-sm text-gray-600 font-bold">Status</th>
              <th className="py-4 px-6 text-sm text-gray-600 font-bold">Officer Assigned</th>
              <th className="py-4 px-6 text-sm text-gray-600 font-bold">Priority</th>
              <th className="py-4 px-6 text-sm text-gray-600 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {appealsData.map((appeal) => (
              <tr 
                key={appeal.id}
                onClick={() => onRowClick(appeal.id)}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors group cursor-pointer last:border-0"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-xs shrink-0">
                      {appeal.initials}
                    </div>
                    <span className="font-medium text-gray-900">{appeal.name}</span>
                  </div>
                </td>
                <td className="py-4 px-6">{appeal.type}</td>
                <td className="py-4 px-6 text-gray-500">{appeal.date}</td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${appeal.statusStyle}`}>
                    <span className="material-symbols-outlined text-[14px]">{appeal.statusIcon}</span> {appeal.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-600">{appeal.officer}</td>
                <td className="py-4 px-6">
                  <span className={`flex items-center gap-1 ${appeal.priorityStyle}`}>
                    {appeal.priorityIcon && <span className="material-symbols-outlined text-[16px]">{appeal.priorityIcon}</span>}
                    {appeal.priority}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="text-[#0056D2] hover:bg-[#e8f0fe] font-semibold text-sm px-3 py-1.5 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination Footer */}
      <div className="px-6 py-4 border-t border-gray-200 bg-white flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-sm text-gray-500 font-medium">Showing 1 to 3 of 42 entries</span>
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 rounded flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors disabled:opacity-50" disabled>
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#0056D2] text-white text-sm font-bold shadow-sm">1</button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 text-gray-600 text-sm font-medium transition-colors">2</button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 text-gray-600 text-sm font-medium transition-colors">3</button>
          <button className="w-8 h-8 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}