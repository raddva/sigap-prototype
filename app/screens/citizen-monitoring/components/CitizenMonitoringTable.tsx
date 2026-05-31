// app/screens/citizen-monitoring/components/CitizenMonitoringTable.tsx
import React from "react";
import { citizensData } from "../data";

export default function CitizenMonitoringTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex-1">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-white border-b border-gray-100 text-gray-500 text-xs font-semibold">
            <tr>
              <th className="px-6 py-4">Citizen Name <span className="material-symbols-outlined text-[14px] align-middle">arrow_downward</span></th>
              <th className="px-6 py-4">Region</th>
              <th className="px-6 py-4">Economic Change Score</th>
              <th className="px-6 py-4">AI Recommendation</th>
              <th className="px-6 py-4">Verification Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {citizensData.map((citizen) => (
              <tr 
                key={citizen.id} 
                className={`transition-colors group cursor-pointer ${
                  citizen.isActive ? "bg-blue-50/20" : "hover:bg-gray-50"
                }`}
              >
                <td className="px-6 py-4 relative">
                  {/* Active Indicator Line */}
                  {citizen.isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#002b73]"></div>
                  )}
                  <div className="flex items-center gap-3 pl-2">
                    {citizen.img ? (
                      <img src={citizen.img} alt={citizen.name} className="w-8 h-8 rounded-full" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs text-gray-600">
                        {citizen.initials}
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-gray-900">{citizen.name}</p>
                      <p className="text-xs text-gray-500">ID: {citizen.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">{citizen.region}</td>
                <td className="px-6 py-4">
                  <span className={`font-semibold ${citizen.econTrendColor} flex items-center gap-1`}>
                    {citizen.econScore}
                    <span className="material-symbols-outlined text-[16px]">{citizen.econTrendIcon}</span>
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1 ${citizen.aiRecBg} ${citizen.aiRecColor} px-2.5 py-1 rounded-md text-xs font-semibold`}>
                    <span className="material-symbols-outlined text-[14px]">{citizen.aiRecIcon}</span> {citizen.aiRecommendation}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center ${citizen.verStatBg} ${citizen.verStatColor} px-2.5 py-1 rounded-md text-xs font-semibold`}>
                    {citizen.verificationStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500 bg-white">
        <span>Showing 1-10 of 245</span>
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-gray-700"><span className="material-symbols-outlined">chevron_left</span></button>
          <button className="text-gray-700 hover:text-[#002b73]"><span className="material-symbols-outlined">chevron_right</span></button>
        </div>
      </div>
    </div>
  );
}