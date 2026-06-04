// app/screens/dashboard/components/AIRecommendationPanel.tsx
import React from "react";

export default function AIRecommendationPanel({ citizen, onClose }: any) {
  if (!citizen) {
    return (
      <div className="bg-white rounded-2xl p-6 border text-center text-gray-500">
        Select a citizen to view AI analysis
      </div>
    );
  }

  const aiCase = citizen.aiCase;
  const confidenceScores = aiCase?.confidenceScores;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-8">

      {/* HEADER */}
      <div className="bg-[#0056D2] p-6 text-white flex justify-between items-start">
        <div>
          <p className="text-xs text-blue-200 font-bold uppercase mb-1">
            AI Analysis Active
          </p>

          <h3 className="text-2xl font-bold">
            Focus Case: {aiCase?.name}
          </h3>

          {/* ID & DESIL BADGE */}
          <div className="flex items-center gap-3 mt-1.5">
            <p className="text-blue-200 text-sm font-mono">
              ID: {aiCase?.id}
            </p>
            
            <span
              className={`px-2 py-0.5 rounded text-xs font-bold shadow-sm ${
                aiCase?.desil <= 4
                  ? "bg-red-100 text-red-700" // Warna kontras merah untuk desil bawah
                  : "bg-blue-50 text-[#0056D2]" // Warna biru muda untuk desil atas
              }`}
            >
              Desil {aiCase?.desil ?? "-"}
            </span>
          </div>
        </div>

        <button onClick={onClose} className="text-white/70 hover:text-white text-xl">
          ✕
        </button>
      </div>

      <div className="p-6 flex flex-col gap-6">

        {/* ALERT */}
        <div className="bg-[#fef7e0] border border-[#fde293] rounded-xl p-4">
          <h4 className="font-bold text-[#b06000] text-sm mb-1">
            {aiCase?.anomalyTitle}
          </h4>
          <p className="text-xs text-[#8f4f00]">
            {aiCase?.anomalyDesc}
          </p>
        </div>

        {/* CONFIDENCE */}
        <div>
          <h4 className="font-bold text-gray-900 text-sm mb-4">
            Confidence Scores
          </h4>

          <div className="flex flex-col gap-4">

            {/* Identity */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700">
                  Identity Match
                </span>

                <span className="font-bold text-[#1b6d24]">
                  {confidenceScores?.identityMatch ?? 0}%
                </span>
              </div>

              <div className="w-full h-2 bg-gray-100 rounded-full">
                <div
                  className="h-full bg-[#1b6d24] rounded-full"
                  style={{
                    width: `${confidenceScores?.identityMatch ?? 0}%`,
                  }}
                />
              </div>
            </div>

            {/* Income */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700">
                  Income Veracity
                </span>

                <span className="font-bold text-[#ba1a1a]">
                  {confidenceScores?.incomeVeracity ?? 0}%
                </span>
              </div>

              <div className="w-full h-2 bg-gray-100 rounded-full">
                <div
                  className="h-full bg-[#ba1a1a] rounded-full"
                  style={{
                    width: `${confidenceScores?.incomeVeracity ?? 0}%`,
                  }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col gap-3">
          <button className="w-full px-4 py-3 bg-[#0056D2] text-white rounded-lg font-semibold shadow-sm hover:bg-[#0047b3] transition-colors">
            Approve
          </button>

          <button className="w-full px-4 py-3 border border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-50 transition-colors">
            Reject
          </button>
        </div>

      </div>
    </div>
  );
}