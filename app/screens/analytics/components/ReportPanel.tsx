// src/app/screens/analytics/components/ReportPanel.tsx
import React from "react";

export default function ReportPanel() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-1">Automated Analysis Ready</h3>
        <p className="text-xs text-gray-500">Generate comprehensive PDF reports for stakeholders.</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button className="px-4 py-2.5 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Monthly Summaries
        </button>
        <button className="px-4 py-2.5 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Officer Activity
        </button>
        <button className="px-6 py-2.5 text-sm font-bold text-white bg-[#0056D2] rounded-lg hover:bg-[#0040a1] transition-colors shadow-sm">
          Generate PDF Report
        </button>
      </div>
    </div>
  );
}