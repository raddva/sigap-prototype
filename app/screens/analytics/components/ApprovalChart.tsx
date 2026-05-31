// src/app/screens/analytics/components/ApprovalChart.tsx
import React from "react";

export default function ApprovalChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm h-full flex flex-col">
      <h3 className="text-sm font-bold text-gray-900 mb-6">Approval vs Rejection</h3>
      
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* CSS Donut Chart */}
        <div 
          className="w-32 h-32 rounded-full relative mb-8 flex items-center justify-center"
          style={{ background: 'conic-gradient(#00C853 0% 89.2%, #F44336 89.2% 100%)' }}
        >
          <div className="w-20 h-20 bg-white rounded-full"></div>
        </div>

        <div className="w-full space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Approved</span>
            <span className="font-bold text-gray-900">89.2%</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Rejected</span>
            <span className="font-bold text-gray-900">10.8%</span>
          </div>
        </div>
      </div>
    </div>
  );
}