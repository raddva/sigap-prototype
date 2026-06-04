import React from "react";
import { citizenQueueData } from "../data";
import { AlertTriangle, CheckCircle2, Clock, Sparkles, XCircle } from "lucide-react";

interface Props {
  onSelectCitizen?: (citizen: any) => void;
}

const getStatusBadge = (statusType: string) => {
  switch (statusType?.toLowerCase()) {
    case "approved":
    case "verified":
    case "ai":
      return {
        icon: <CheckCircle2 className="w-3.5 h-3.5" />,
        className: "bg-green-50 text-green-700 border-green-100",
      };

    case "pending":
    case "in review":
      return {
        icon: <Clock className="w-3.5 h-3.5" />,
        className: "bg-amber-50 text-amber-700 border-amber-100",
      };

    case "flagged":
    case "warning":
      return {
        icon: <AlertTriangle className="w-3.5 h-3.5" />,
        className: "bg-orange-50 text-orange-700 border-orange-100",
      };

    case "rejected":
      return {
        icon: <XCircle className="w-3.5 h-3.5" />,
        className: "bg-red-50 text-red-700 border-red-100",
      };

    default:
      return {
        icon: <Sparkles className="w-3.5 h-3.5" />,
        className: "bg-gray-100 text-gray-600 border-gray-200",
      };
  }
};

export default function CitizenTable({ onSelectCitizen }: Props) {
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
              {/* KOLOM DESIL DITAMBAHKAN DI SINI */}
              <th className="px-6 py-4 font-semibold">Desil</th>
              <th className="px-6 py-4 font-semibold">Scores (Elig/Econ)</th>
              <th className="px-6 py-4 font-semibold">AI Status</th>
              <th className="px-6 py-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {citizenQueueData.map((citizen) => (
              <tr 
                key={citizen.id} 
                className={`transition-colors group cursor-pointer ${citizen.isActive ? "bg-blue-50/30" : "hover:bg-gray-50"}`}
                onClick={() => onSelectCitizen?.(citizen)}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e8f0fe] text-[#0056D2] flex items-center justify-center font-bold text-xs">
                      {citizen.id}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{citizen.name}</p>
                      <p className="text-xs text-gray-500">{citizen.region}</p>
                    </div>
                  </div>
                </td>
                
                {/* DATA DESIL DITAMBAHKAN DI SINI */}
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold ${
                      citizen.desil <= 4
                        ? "bg-red-100 text-red-700" 
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    Desil {citizen.desil ?? "-"}
                  </span>
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
                  {(() => {
                    const badge = getStatusBadge(citizen.statusType);

                    return (
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badge.className}`}
                      >
                        {badge.icon}
                        {citizen.status}
                      </span>
                    );
                  })()}
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