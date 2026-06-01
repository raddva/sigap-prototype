// src/app/screens/activity-feed/components/TimelineFeed.tsx
import React from 'react';
import { feedEventsData } from '../data';

export default function TimelineFeed() {
  return (
    <div className="bg-[#f8f9fa] rounded-xl p-6 border border-gray-100 flex flex-col gap-6">
      {feedEventsData.map((event, index) => (
        <div key={event.id} className="flex gap-4 group">
          {/* Icon & Connector Line */}
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 ${event.iconBg}`}>
              <span className="material-symbols-outlined text-[20px]">{event.icon}</span>
            </div>
            {index !== feedEventsData.length - 1 && (
              <div className="w-0.5 h-full bg-gray-200 my-2"></div>
            )}
          </div>

          {/* Content Card */}
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex-1 mb-2 hover:border-gray-300 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-base font-bold text-gray-900">{event.title}</h3>
              <span className="text-xs text-gray-500 font-medium whitespace-nowrap">{event.time}</span>
            </div>
            
            {event.citizen && (
              <p className="text-sm text-gray-600 mb-3">
                Citizen: <span className="font-bold text-gray-900">{event.citizen}</span>
              </p>
            )}
            
            {event.detailBox && (
              <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold ${event.detailBg}`}>
                <span className="material-symbols-outlined text-[14px]">{event.detailIcon}</span>
                {event.detailBox}
              </div>
            )}

            {event.desc && (
              <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: event.desc.replace(/A. Rahman|#3201|1,240/g, '<span class="font-bold text-gray-900">$&</span>') }}></p>
            )}
          </div>
        </div>
      ))}
      
      <div className="flex justify-center pt-2">
        <button className="text-[#0056D2] text-sm font-bold hover:underline">
          Load Older Events
        </button>
      </div>
    </div>
  );
}