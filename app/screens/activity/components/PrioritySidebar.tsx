// src/app/screens/activity-feed/components/PrioritySidebar.tsx
import React from 'react';
import { priorityEventsData } from '../data';

export default function PrioritySidebar() {
  return (
    <div className="bg-[#f8f9fa] rounded-xl p-6 border border-gray-100">
      <h2 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "Public Sans, sans-serif" }}>
        Priority Events
      </h2>
      
      <div className="flex flex-col gap-4">
        {priorityEventsData.map((event) => (
          <div 
            key={event.id} 
            className={`bg-white rounded-xl p-4 shadow-sm border border-gray-100 border-l-4 ${event.borderStyle}`}
          >
            <div className="flex justify-between items-start mb-3">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${event.badgeStyle}`}>
                {event.badge}
              </span>
              <button className="text-gray-400 hover:text-gray-800">
                <span className="material-symbols-outlined text-[20px]">more_vert</span>
              </button>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">{event.title}</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: event.desc.replace(/Surabaya|West Java/g, '<span class="font-bold text-gray-900">$&</span>') }}></p>
            
            <button className={`text-xs font-bold ${event.linkColor} flex items-center gap-1 hover:underline`}>
              {event.linkText} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}