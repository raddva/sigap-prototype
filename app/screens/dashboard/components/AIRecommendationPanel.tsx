import React from "react";

export default function AIRecommendationPanel({ citizen, onClose }: any) {
  if (!citizen) {
    return (
      <div className="bg-white rounded-2xl p-6 border text-center text-gray-500 h-full flex items-center justify-center min-h-[300px]">
        Select a citizen from the table to view AI analysis
      </div>
    );
  }

  const aiData = citizen.ai_cases;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-8">
      {/* HEADER */}
      <div className="bg-[#0056D2] p-6 text-white flex justify-between items-start">
        <div>
          <p className="text-xs text-blue-200 font-bold uppercase mb-1">
            {aiData ? "AI Analysis Active" : "AI Verification Clear"}
          </p>

          <h3 className="text-2xl font-bold">
            Focus Case: {citizen.name}
          </h3>

          {/* ID & DESIL BADGE */}
          <div className="flex items-center gap-3 mt-1.5">
            <p className="text-blue-200 text-sm font-mono">
              ID: {citizen.nik}
            </p>
            
            <span
              className={`px-2 py-0.5 rounded text-xs font-bold shadow-sm ${
                citizen.desil <= 4
                  ? "bg-red-100 text-red-700" 
                  : "bg-blue-50 text-[#0056D2]" 
              }`}
            >
              Desil {citizen.desil ?? "-"}
            </span>
          </div>
        </div>

        {/* Tombol Close */}
        <button onClick={onClose} className="text-white/70 hover:text-white text-xl">
          ✕
        </button>
      </div>

      <div className="p-6 flex flex-col gap-6">

        {/* ALERT (Hanya tampil jika ada data AI / Anomali) */}
        {aiData ? (
          <div className="bg-[#fef7e0] border border-[#fde293] rounded-xl p-4">
            <h4 className="font-bold text-[#b06000] text-sm mb-1">
              {aiData.anomaly_title || "Anomaly Detected"}
            </h4>
            <p className="text-xs text-[#8f4f00]">
              {aiData.anomaly_description || "Further review is required based on AI findings."}
            </p>
          </div>
        ) : (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <h4 className="font-bold text-green-700 text-sm mb-1">
              No Anomalies Detected
            </h4>
            <p className="text-xs text-green-600">
              The AI did not find any issues with this citizen's data.
            </p>
          </div>
        )}

        {/* CONFIDENCE SCORES */}
        <div>
          <h4 className="font-bold text-gray-900 text-sm mb-4">
            Confidence Scores
          </h4>

          <div className="flex flex-col gap-4">
            {/* Identity Match */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700">
                  Identity Match
                </span>
                <span className="font-bold text-[#1b6d24]">
                  {/* Jika aiData kosong, asumsikan 100% aman */}
                  {aiData?.identity_match ?? 100}%
                </span>
              </div>

              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1b6d24] rounded-full transition-all duration-500"
                  style={{
                    width: `${aiData?.identity_match ?? 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Income Veracity */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700">
                  Income Veracity
                </span>
                <span className={`font-bold ${aiData && aiData.income_veracity < 70 ? "text-[#ba1a1a]" : "text-[#1b6d24]"}`}>
                  {aiData?.income_veracity ?? 100}%
                </span>
              </div>

              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${aiData && aiData.income_veracity < 70 ? "bg-[#ba1a1a]" : "bg-[#1b6d24]"}`}
                  style={{
                    width: `${aiData?.income_veracity ?? 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col gap-3 mt-2">
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