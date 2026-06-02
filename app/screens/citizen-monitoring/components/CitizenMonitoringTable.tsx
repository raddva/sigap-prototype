// app/screens/citizen-monitoring/components/CitizenMonitoringTable.tsx
import React from "react";

type Props = {
  data: any[];
  onSelectCitizen: (citizen: any) => void;
};

export default function CitizenMonitoringTable({
  data,
  onSelectCitizen,
}: Props) {
    const triggerDemoAnomaly = async () => {
    const myPhoneNumber = process.env.NEXT_PUBLIC_MY_PHONE; 
    alert('Simulasi Anomali Dimulai! Cek HP kamu.');    
    await fetch('/api/trigger-anomaly', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: myPhoneNumber }) 
    });
  };

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

          <div className="flex gap-3 mt-3 md:mt-0">
            <button
              onClick={triggerDemoAnomaly}
              className="flex items-center gap-2 px-4 py-2 bg-[#ba1a1a] text-white rounded-lg text-sm font-bold hover:bg-red-800 transition-colors animate-pulse"
            >
              <span className="material-symbols-outlined text-[18px]">
                warning
              </span>
              Trigger Demo Anomaly
            </button>
          </div>
        </header>

        {/* TABLE */}
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 text-xs font-semibold">
            <tr>
              <th className="px-6 py-4">Citizen Name</th>
              <th className="px-6 py-4">Region</th>
              <th className="px-6 py-4">Economic Change Score</th>
              <th className="px-6 py-4">AI Recommendation</th>
              <th className="px-6 py-4">Verification Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 text-sm">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-10 text-gray-400 text-sm"
                >
                  No citizens found
                </td>
              </tr>
            ) : (
              data.map((citizen) => (
                <tr
                  key={citizen.id}
                  onClick={() => onSelectCitizen(citizen)}
                  className={`transition-colors cursor-pointer group hover:bg-gray-50 ${
                    citizen.isActive ? "bg-blue-50/30" : ""
                  }`}
                >
                  {/* NAME */}
                  <td className="px-6 py-4 relative">
                    {citizen.isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#002b73]" />
                    )}

                    <div className="flex items-center gap-3 pl-2">
                      {citizen.img ? (
                        <img
                          src={citizen.img}
                          alt={citizen.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs text-gray-600">
                          {citizen.initials}
                        </div>
                      )}

                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-[#002b73]">
                          {citizen.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          ID: {citizen.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* REGION */}
                  <td className="px-6 py-4 text-gray-700">
                    {citizen.region}
                  </td>

                  {/* ECON SCORE */}
                  <td className="px-6 py-4">
                    <span
                      className={`font-semibold flex items-center gap-1 ${citizen.econTrendColor}`}
                    >
                      {citizen.econScore}
                      <span className="material-symbols-outlined text-[16px]">
                        {citizen.econTrendIcon}
                      </span>
                    </span>
                  </td>

                  {/* AI RECOMMENDATION */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold ${citizen.aiRecBg} ${citizen.aiRecColor}`}
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        {citizen.aiRecIcon}
                      </span>
                      {citizen.aiRecommendation}
                    </span>
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-md text-xs font-semibold ${citizen.verStatBg} ${citizen.verStatColor}`}
                    >
                      {citizen.verificationStatus}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500 bg-white">
        <span>
          Showing {data.length} results
        </span>

        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-gray-700">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="text-gray-700 hover:text-[#002b73]">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}