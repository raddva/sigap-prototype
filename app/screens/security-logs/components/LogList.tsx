// src/app/screens/security-logs/components/LogList.tsx
import React from 'react';
import { auditLogsData } from '../data';

export default function LogList() {
  return (
    <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-gray-100 flex flex-col gap-6">
      
      {/* Log Entries Mapping */}
      {auditLogsData.map((log) => (
        <div 
          key={log.id} 
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-2">
            <div className="flex items-center gap-3">
              <span 
                className={`material-symbols-outlined text-[24px] ${log.iconColor}`} 
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {log.icon}
              </span>
              <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "Public Sans, sans-serif" }}>
                {log.title}
              </h3>
            </div>
            <span className="text-sm font-medium text-gray-500">
              {log.timestamp}
            </span>
          </div>
          
          <p className="text-base text-gray-600 mb-5 max-w-4xl">
            {log.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {log.tags.map((tag, index) => (
              <span 
                key={index} 
                className={`px-3 py-1 rounded-full text-xs font-semibold ${tag.styleClass}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Load More Button */}
      <div className="mt-4 flex justify-center">
        <button className="px-6 py-2.5 rounded-xl text-[#002b73] font-bold text-sm hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-sm transition-all">
          Load More Activity
        </button>
      </div>
      
    </div>
  );
}