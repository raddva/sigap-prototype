// src/app/screens/verification-requests/components/AutomationControls.tsx
import React from 'react';

export default function AutomationControls() {
  return (
    <div className="bg-white rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-2 text-[#002b73] font-bold">
        <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
        <span className="text-sm">Automation Settings</span>
      </div>
      
      <div className="flex flex-wrap gap-4 items-center">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-[#0056D2] border-gray-300 focus:ring-[#0056D2]" />
          <span className="text-xs font-bold text-gray-700">Auto-reminder (24h)</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-[#0056D2] border-gray-300 focus:ring-[#0056D2]" />
          <span className="text-xs font-bold text-gray-700">Retry Logic Active</span>
        </label>
        
        <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
          <span className="text-xs text-gray-500 font-medium">Expires in:</span>
          <select className="text-xs font-bold text-gray-700 bg-transparent border-none py-0 pl-0 pr-6 focus:ring-0 cursor-pointer">
            <option>7 Days</option>
            <option>14 Days</option>
            <option>30 Days</option>
          </select>
        </div>
      </div>
    </div>
  );
}