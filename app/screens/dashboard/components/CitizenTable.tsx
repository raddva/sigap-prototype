// app/screens/dashboard/components/CitizenTable.tsx
import React from "react";
import { citizenQueueData } from "../data";

export default function CitizenTable() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="flex justify-between items-center p-6 border-b border-gray-100">
        <h2 className="text-lg font-bold text-gray-900" style={{ fontFamily: "Public Sans, sans-serif" }}>
          Citizen Verification Queue
        </h2>
        <button className="text-sm font-semibold text-[#0056D2] hover:underline">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50/50 text-gray-500 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-semibold">Citizen</th>
              <th className="px-6 py-4 font-semibold">Scores (Elig/Econ)</th>
              <th className="px-6 py-4 font-semibold">AI Status</th>
              <th className="px-6 py-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {citizenQueueData.map((citizen) => (
              <tr 
                key={citizen.id} 
                className={`transition-colors group ${citizen.isActive ? "bg-blue-50/30" : "hover:bg-gray-50"}`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e8f0fe] text-[#0056D2] flex items-center justify-center font-bold text-xs">
                      {citizen.id}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{citizen.name}</p>
                      <p className="text-xs text-gray-500">Reg: {citizen.region}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-2 w-32">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-8">Elig:</span> 
                      <div className="flex-1 h-1.5 bg-gray-200 rounded-full">
                        <div 
                          className={`h-full rounded-full ${citizen.eligScore > 70 ? 'bg-[#1b6d24]' : 'bg-[#b06000]'}`} 
                          style={{ width: `${citizen.eligScore}%` }}
                        ></div>
                      </div> 
                      <span className="w-6 text-right font-medium">{citizen.eligScore}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-8">Econ:</span> 
                      <div className="flex-1 h-1.5 bg-gray-200 rounded-full">
                        <div 
                          className={`h-full rounded-full ${citizen.econScore < 0 ? 'bg-[#b06000]' : 'bg-[#ba1a1a]'}`} 
                          style={{ width: `${Math.abs(citizen.econScore)}%` }}
                        ></div>
                      </div> 
                      <span className={`w-6 text-right font-medium ${citizen.econScore > 0 ? 'text-[#ba1a1a]' : (citizen.econScore < -10 ? 'text-[#b06000]' : 'text-[#1b6d24]')}`}>
                        {citizen.econScore > 0 ? `+${citizen.econScore}%` : `${citizen.econScore}%`}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1 ${citizen.statusBg} ${citizen.statusColor} px-2.5 py-1 rounded-md text-xs font-semibold`}>
                    <span className="material-symbols-outlined text-[14px]">{citizen.statusIcon}</span> {citizen.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className={citizen.isActive ? "text-[#0056D2]" : "text-gray-400 hover:text-[#0056D2]"}>
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}