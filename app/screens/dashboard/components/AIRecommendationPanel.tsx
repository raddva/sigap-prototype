// app/screens/dashboard/components/AIRecommendationPanel.tsx
import React from "react";
import { focusCaseData } from "../data";

export default function AIRecommendationPanel() {
  const { name, id, anomalyTitle, anomalyDesc, confidenceScores } = focusCaseData;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-8">
      {/* Header Panel */}
      <div className="bg-[#0056D2] p-6 relative overflow-hidden text-white">
        <span className="material-symbols-outlined absolute -right-6 -top-6 text-[120px] opacity-10" style={{ fontVariationSettings: "'FILL' 1" }}>
          settings
        </span>
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-blue-200 text-xs font-bold tracking-wider uppercase mb-2">
            <span className="material-symbols-outlined text-[16px]">show_chart</span> AI Analysis Active
          </div>
          <h3 className="text-2xl font-bold" style={{ fontFamily: "Public Sans, sans-serif" }}>Focus Case: {name}</h3>
          <p className="text-blue-200 text-sm mt-1 font-mono">ID: {id}</p>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-6">
        {/* Alert Box */}
        <div className="bg-[#fef7e0] border border-[#fde293] rounded-xl p-4">
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-[#b06000]">warning</span>
            <div>
              <h4 className="font-bold text-[#b06000] text-sm mb-1">{anomalyTitle}</h4>
              <p className="text-xs text-[#8f4f00] leading-relaxed">{anomalyDesc}</p>
            </div>
          </div>
        </div>

        {/* Confidence Scores */}
        <div>
          <h4 className="font-bold text-gray-900 text-sm mb-4">Confidence Scores</h4>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700">Identity Match</span>
                <span className="font-bold text-[#1b6d24]">{confidenceScores.identityMatch}%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full">
                <div className="h-full bg-[#1b6d24] rounded-full" style={{ width: `${confidenceScores.identityMatch}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700">Income Veracity</span>
                <span className="font-bold text-[#ba1a1a]">{confidenceScores.incomeVeracity}%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full">
                <div className="h-full bg-[#ba1a1a] rounded-full" style={{ width: `${confidenceScores.incomeVeracity}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Action Buttons */}
        <div>
          <p className="text-xs text-center text-gray-500 mb-3">Officer decision required to proceed.</p>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <button className="px-4 py-2.5 rounded-lg bg-gray-50 text-[#0056D2] font-semibold text-sm hover:bg-gray-100 transition-colors">
              Request Info
            </button>
            <button className="px-4 py-2.5 rounded-lg border border-[#ba1a1a] text-[#ba1a1a] font-semibold text-sm hover:bg-red-50 transition-colors">
              Reject
            </button>
          </div>
          <button className="w-full px-4 py-3 rounded-lg bg-[#0056D2] text-white font-semibold text-sm hover:bg-[#0040a1] transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-500/20">
            <span className="material-symbols-outlined text-[18px]">check_circle</span> Approve with Override
          </button>
        </div>
      </div>
    </div>
  );
}