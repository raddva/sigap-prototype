// src/app/screens/reports-center/components/DownloadCenter.tsx
import React from 'react';
import { recentDownloadsData } from '../data';

export default function DownloadCenter() {
  return (
    <aside className="bg-[#f4f6f8] rounded-2xl p-6 flex flex-col gap-5 border border-gray-100 h-full">
      <h3 className="text-lg font-bold text-gray-900 pb-4 border-b border-gray-200" style={{ fontFamily: "Public Sans, sans-serif" }}>
        Download Center
      </h3>
      
      <div className="flex flex-col gap-4">
        {recentDownloadsData.map((item) => (
          <div 
            key={item.id} 
            className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-[#0056D2]/30 hover:shadow-sm transition-all cursor-pointer"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${item.colorClass}`}>
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate">{item.fileName}</p>
              <p className="text-[11px] text-gray-500 mt-0.5">{item.details}</p>
            </div>
            
            <button className="text-[#0056D2] hover:bg-[#e8f0fe] p-1.5 rounded-md transition-colors">
              <span className="material-symbols-outlined text-[20px]">download</span>
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}