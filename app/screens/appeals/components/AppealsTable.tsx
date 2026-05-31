// app/screens/appeals/components/AppealsTable.tsx

import { appealsData } from '../data';

interface AppealsTableProps {
  onRowClick: (id: string) => void;
}

export default function AppealsTable({ onRowClick }: AppealsTableProps) {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden mb-space-12 shadow-[0_12px_32px_-4px_rgba(25,28,29,0.06)] ring-1 ring-outline-variant">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant">
              <th className="py-space-4 px-space-6 font-label-sm text-label-sm text-on-surface-variant font-semibold">Citizen Name</th>
              <th className="py-space-4 px-space-6 font-label-sm text-label-sm text-on-surface-variant font-semibold">Appeal Type</th>
              <th className="py-space-4 px-space-6 font-label-sm text-label-sm text-on-surface-variant font-semibold">Submission Date</th>
              <th className="py-space-4 px-space-6 font-label-sm text-label-sm text-on-surface-variant font-semibold">Status</th>
              <th className="py-space-4 px-space-6 font-label-sm text-label-sm text-on-surface-variant font-semibold">Officer Assigned</th>
              <th className="py-space-4 px-space-6 font-label-sm text-label-sm text-on-surface-variant font-semibold">Priority</th>
              <th className="py-space-4 px-space-6 font-label-sm text-label-sm text-on-surface-variant font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="font-body-md text-body-md text-on-surface">
            {appealsData.map((appeal) => (
              <tr 
                key={appeal.id}
                onClick={() => onRowClick(appeal.id)}
                className="hover:bg-surface-container transition-colors group cursor-pointer even:bg-surface"
              >
                <td className="py-space-4 px-space-6">
                  <div className="flex items-center gap-space-4">
                    <div className="w-8 h-8 rounded-full bg-surface-dim flex items-center justify-center text-on-surface font-label-sm">
                      {appeal.initials}
                    </div>
                    <span className="font-medium">{appeal.name}</span>
                  </div>
                </td>
                <td className="py-space-4 px-space-6">{appeal.type}</td>
                <td className="py-space-4 px-space-6 text-on-surface-variant">{appeal.date}</td>
                <td className="py-space-4 px-space-6">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-label-sm text-label-sm ${appeal.statusStyle}`}>
                    <span className="material-symbols-outlined text-[14px]">{appeal.statusIcon}</span> {appeal.status}
                  </span>
                </td>
                <td className="py-space-4 px-space-6 text-on-surface-variant">{appeal.officer}</td>
                <td className="py-space-4 px-space-6">
                  <span className={`flex items-center gap-1 ${appeal.priorityStyle}`}>
                    {appeal.priorityIcon && <span className="material-symbols-outlined text-[16px]">{appeal.priorityIcon}</span>}
                    {appeal.priority}
                  </span>
                </td>
                <td className="py-space-4 px-space-6 text-right">
                  <button className="text-primary hover:text-primary-container font-label-sm p-2 rounded-lg hover:bg-surface-container-low transition-colors opacity-0 group-hover:opacity-100">
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="px-space-6 py-space-4 border-t border-outline-variant bg-surface-container-lowest flex justify-between items-center">
        <span className="text-label-sm text-on-surface-variant">Showing 1 to 3 of 42 entries</span>
        <div className="flex gap-1">
          <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-surface-container-low text-on-surface-variant disabled:opacity-50" disabled>
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
          <button className="w-8 h-8 rounded flex items-center justify-center bg-primary-container text-white font-label-sm">1</button>
          <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-surface-container-low text-on-surface-variant font-label-sm">2</button>
          <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-surface-container-low text-on-surface-variant font-label-sm">3</button>
          <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-surface-container-low text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}