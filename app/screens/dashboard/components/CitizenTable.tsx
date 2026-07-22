"use client";

import React, { useEffect, useState } from "react";
import { AlertTriangle, CheckCircle2, Clock, Sparkles, XCircle } from "lucide-react";

interface Citizen {
  nik: string;
  name: string;
  region: string;
  desil: number;
  eligibility_score: number;
  economic_score: number;
  verification_status: string;
  ai_cases: {
    anomaly_title: string;
    anomaly_description: string;
    identity_match: number;
    income_veracity: number;
  } | null;
}

interface Props {
  onSelectCitizen?: (citizen: Citizen) => void;
}

const getStatusBadge = (statusType: string) => {
  switch (statusType?.toLowerCase()) {
    case "approved":
    case "verified":
    case "ai":
    case "ai recommended":
      return {
        icon: <CheckCircle2 className="w-3.5 h-3.5" />,
        className: "bg-green-50 text-green-700 border-green-100",
      };

    case "pending":
    case "in review":
    case "under review":
      return {
        icon: <Clock className="w-3.5 h-3.5" />,
        className: "bg-amber-50 text-amber-700 border-amber-100",
      };

    case "flagged":
    case "warning":
    case "high priority review":
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
  const [citizens, setCitizens] = useState<Citizen[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCitizens() {
      try {
        const res = await fetch("/api/dashboard/citizens");
        const data = await res.json();
        setCitizens(data);
      } finally {
        setLoading(false);
      }
    }
    loadCitizens();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex items-center justify-center">
        <div className="flex items-center gap-2 text-gray-500">
          <Clock className="w-5 h-5 animate-spin" />
          <span className="font-medium">Loading queue data...</span>
        </div>
      </div>
    );
  }

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
              <th className="px-6 py-4 font-semibold">Desil</th>
              <th className="px-6 py-4 font-semibold">Scores (Elig/Econ)</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {citizens.map((citizen) => {
              const badge = getStatusBadge(citizen.verification_status);

              return (
                <tr
                  key={citizen.nik}
                  className="transition-colors group cursor-pointer hover:bg-gray-50"
                  onClick={() => onSelectCitizen?.(citizen)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#e8f0fe] text-[#0056D2] flex items-center justify-center font-bold text-xs uppercase">
                        {/* Mengambil 2 huruf pertama dari nama untuk avatar */}
                        {citizen.name.substring(0, 2)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{citizen.name}</p>
                        <p className="text-xs text-gray-500">{citizen.region}</p>
                      </div>
                    </div>
                  </td>

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
                      {/* Eligibility Score Bar */}
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-8">Elig:</span>
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full">
                          <div
                            className={`h-full rounded-full ${
                              citizen.eligibility_score > 70 ? "bg-[#1b6d24]" : "bg-[#b06000]"
                            }`}
                            style={{ width: `${citizen.eligibility_score}%` }}
                          ></div>
                        </div>
                        <span className="w-6 text-right font-medium">{citizen.eligibility_score}</span>
                      </div>
                      
                      {/* Economic Score Bar */}
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-8">Econ:</span>
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full">
                          <div
                            className={`h-full rounded-full ${
                              citizen.economic_score < 0 ? "bg-[#b06000]" : "bg-[#ba1a1a]"
                            }`}
                            style={{ width: `${Math.abs(citizen.economic_score)}%` }}
                          ></div>
                        </div>
                        <span
                          className={`w-8 text-right font-medium ${
                            citizen.economic_score > 0
                              ? "text-[#ba1a1a]"
                              : citizen.economic_score < -10
                              ? "text-[#b06000]"
                              : "text-[#1b6d24]"
                          }`}
                        >
                          {citizen.economic_score > 0
                            ? `+${citizen.economic_score}%`
                            : `${citizen.economic_score}%`}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badge.className}`}
                    >
                      {badge.icon}
                      <span className="capitalize">{citizen.verification_status}</span>
                    </span>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 group-hover:text-[#0056D2] transition-colors">
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}