// app/screens/citizen-monitoring/components/CitizenDetailPanel.tsx
import React from "react";
import { detailData } from "../data";

export default function CitizenDetailPanel() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full sticky top-8">
      
      {/* Detail Header */}
      <div className="p-6 border-b border-gray-100 flex justify-between items-start">
        <div className="flex items-center gap-3">
          <img src={detailData.avatar} alt={detailData.name} className="w-12 h-12 rounded-full border border-gray-200" />
          <div>
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "Public Sans, sans-serif" }}>{detailData.name}</h2>
            <div className="flex items-center text-sm text-gray-500 gap-1">
              <span className="material-symbols-outlined text-[16px]">badge</span>
              {detailData.id}
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-700">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className="p-6 flex-1 overflow-y-auto flex flex-col gap-6">
        
        {/* AI Summary Box */}
        <div className="bg-[#f0f4f8] rounded-xl p-5 border border-blue-100">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2 text-[#002b73] font-bold text-sm">
              <span className="material-symbols-outlined">psychology</span>
              AI Explanation<br/>Summary
            </div>
            <div className="bg-[#002b73] text-white px-3 py-1 rounded-full text-xs font-semibold text-center leading-tight">
              {detailData.confidence}<br/><span className="text-[10px] font-normal">Confidence</span>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            {detailData.summary}
          </p>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                <span>Economic Change Score</span>
                <span className="text-[#ba1a1a]">{detailData.econScore}%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-full bg-[#ba1a1a] rounded-full" style={{ width: `${Math.abs(detailData.econScore)}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                <span>Eligibility Score</span>
                <span className="text-[#002b73]">{detailData.eligibilityScore}/100</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-full bg-[#002b73] rounded-full" style={{ width: `${detailData.eligibilityScore}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Uploaded Evidence */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-3">Uploaded Evidence</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center gap-2 text-gray-500 hover:bg-gray-100 cursor-pointer">
              <span className="material-symbols-outlined text-3xl">description</span>
              <span className="text-xs font-medium text-gray-700">Medical Bill.pdf</span>
            </div>
            <div className="border border-gray-200 rounded-xl overflow-hidden relative group cursor-pointer">
              <img src={detailData.evidence[1].url} className="w-full h-24 object-cover" alt="Notice" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white">visibility</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-white/90 py-1 text-center text-xs font-medium text-gray-700">
                Notice.jpg
              </div>
            </div>
          </div>
        </div>

        {/* Verification Timeline */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-4">Verification Timeline</h3>
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gray-200 ml-2">
            {detailData.timeline.map((item, index) => (
              <div key={index} className="relative flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full border-2 border-white z-10 shrink-0 ${item.status === 'current' ? 'bg-[#b06000] ring-2 ring-[#fef7e0]' : 'bg-gray-300'}`}></div>
                <div className="flex flex-col">
                  <span className={`text-sm ${item.status === 'current' ? 'font-bold text-gray-900' : 'font-medium text-gray-600'}`}>{item.title}</span>
                  {item.time && <span className="text-xs text-gray-400">{item.time}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-5 border-t border-gray-100 flex gap-3">
        <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold text-sm rounded-lg hover:bg-gray-50 transition-colors">
          Reject
        </button>
        <button className="flex-1 px-4 py-2 bg-transparent text-[#002b73] font-bold text-sm rounded-lg hover:bg-blue-50 transition-colors">
          Manual Review
        </button>
      </div>
    </div>
  );
}