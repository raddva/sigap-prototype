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
          <p className="text-xs text-blue-200 font-bold uppercase">
            AI Analysis Active
          </p>

          <h3 className="text-2xl font-bold">
            Focus Case: {aiCase?.name}
          </h3>

          <p className="text-blue-200 text-sm font-mono">
            ID: {aiCase?.id}
          </p>
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
          <button className="w-full px-4 py-3 bg-[#0056D2] text-white rounded-lg font-semibold">
            Approve
          </button>

          <button className="w-full px-4 py-3 border border-red-500 text-red-500 rounded-lg font-semibold">
            Reject
          </button>
        </div>

      </div>
    </div>
  );
}