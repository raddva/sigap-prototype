// src/app/screens/activity-feed/components/FeedTabs.tsx
'use client';
import React, { useState } from 'react';

export default function FeedTabs() {
  const tabs = ['All Events', 'AI Events', 'Citizen Activity', 'Officer Actions', 'Verification Events', 'System Updates'];
  const [activeTab, setActiveTab] = useState('All Events');

  return (
    <div className="flex overflow-x-auto gap-6 border-b border-gray-200 mb-6 scrollbar-hide">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-3 text-sm font-semibold whitespace-nowrap transition-colors ${
            activeTab === tab
              ? 'text-[#0056D2] border-b-2 border-[#0056D2]'
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}