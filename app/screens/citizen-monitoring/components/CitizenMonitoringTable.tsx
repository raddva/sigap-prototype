import React from "react";

type Props = {
  data: any[];
  onSelectCitizen: (citizen: any) => void;
};

export default function CitizenMonitoringTable({
  data,
  onSelectCitizen,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex-1">
      {/* HEADER */}
      <div className="overflow-x-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end w-full p-5">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              Monitoring
            </h1>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="w-3 h-3 rounded-full bg-[#1b6d24]"></span>
              Monitor AI-detected socioeconomic changes in real time
            </div>
          </div>
        </header>

        {/* TABLE */}
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 text-xs font-semibold">
            <tr>
              <th className="px-6 py-4">Citizen Name</th>
              <th className="px-6 py-4">Region</th>
              <th className="px-6 py-4">Status (Desil)</th>
              <th className="px-6 py-4">Economic Change</th>
              <th className="px-6 py-4">AI Recommendation</th>
              <th className="px-6 py-4">Verification Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 text-sm">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-10 text-gray-400 text-sm"
                >
                  No citizens found
                </td>
              </tr>
            ) : (
              data.map((citizen) => {
                // 1. Initials Avatar
                const initials = citizen.name
                  ? citizen.name.substring(0, 2).toUpperCase()
                  : "NA";

                // 2. Economic Trend Logic
                const econScore = citizen.economic_score ?? 0;
                const isNegativeEcon = econScore < 0;
                const econColor = isNegativeEcon
                  ? "text-red-600"
                  : econScore > 0
                  ? "text-green-600"
                  : "text-gray-600";
                const econIcon = isNegativeEcon
                  ? "trending_down"
                  : econScore > 0
                  ? "trending_up"
                  : "trending_flat";

                // 3. AI Recommendation Logic
                const aiStatus =
                  citizen.ai_status ||
                  (citizen.ai_cases ? "Anomaly Detected" : "Clear");
                const isAiWarning =
                  aiStatus.toLowerCase().includes("anomaly") ||
                  aiStatus.toLowerCase().includes("review") ||
                  aiStatus.toLowerCase().includes("warning") ||
                  aiStatus.toLowerCase().includes("pending");

                const aiBg = isAiWarning ? "bg-orange-50" : "bg-green-50";
                const aiColor = isAiWarning
                  ? "text-orange-700"
                  : "text-green-700";
                const aiIcon = isAiWarning ? "warning" : "check_circle";

                // 4. Verification Status Logic
                const verStatus =
                  citizen.verification_status?.toLowerCase() || "pending";
                let verBg = "bg-amber-50";
                let verColor = "text-amber-700";
                
                if (verStatus === "verified" || verStatus === "approved") {
                  verBg = "bg-green-50";
                  verColor = "text-green-700";
                } else if (verStatus === "rejected") {
                  verBg = "bg-red-50";
                  verColor = "text-red-700";
                }

                return (
                  <tr
                    key={citizen.nik}
                    onClick={() => onSelectCitizen(citizen)}
                    className="transition-colors cursor-pointer group hover:bg-gray-50"
                  >
                    {/* NAME & ID */}
                    <td className="px-6 py-4 relative">
                      <div className="flex items-center gap-3 pl-2">
                        {citizen.avatar ? (
                          <img
                            src={citizen.avatar}
                            alt={citizen.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-[#e8f0fe] flex items-center justify-center font-bold text-xs text-[#002b73]">
                            {initials}
                          </div>
                        )}

                        <div>
                          <p className="font-semibold text-gray-900 group-hover:text-[#002b73] transition-colors">
                            {citizen.name}
                          </p>
                          <p className="text-xs text-gray-500 font-mono">
                            ID: {citizen.nik}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* REGION */}
                    <td className="px-6 py-4 text-gray-700">
                      {citizen.region}
                    </td>

                    {/* DESIL */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold shadow-sm ${
                          citizen.desil <= 4
                            ? "bg-red-100 text-red-700 border border-red-200"
                            : "bg-gray-100 text-gray-700 border border-gray-200"
                        }`}
                      >
                        Desil {citizen.desil ?? "-"}
                      </span>
                    </td>

                    {/* ECONOMIC SCORE */}
                    <td className="px-6 py-4">
                      <span
                        className={`font-semibold flex items-center gap-1.5 ${econColor}`}
                      >
                        {econScore > 0 ? `+${econScore}` : econScore}%
                        <span className="material-symbols-outlined text-[18px]">
                          {econIcon}
                        </span>
                      </span>
                    </td>

                    {/* AI RECOMMENDATION */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold ${aiBg} ${aiColor} border border-current/10`}
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          {aiIcon}
                        </span>
                        <span className="capitalize">{aiStatus}</span>
                      </span>
                    </td>

                    {/* VERIFICATION STATUS */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-bold capitalize ${verBg} ${verColor} border border-current/10`}
                      >
                        {citizen.verification_status || "Pending"}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500 bg-white">
        <span>Showing {data.length} results</span>

        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-gray-700 transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="text-gray-700 hover:text-[#002b73] transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}