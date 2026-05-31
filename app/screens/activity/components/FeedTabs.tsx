'use client';

import { useState } from 'react';

export default function FeedTabs() {
  const tabs = [
    'All Events',
    'AI Events',
    'Citizen Activity',
    'Officer Actions',
    'Verification Events',
    'System Updates',
  ];
  
  const [activeTab, setActiveTab] = useState('All Events');

  return (
    <div className="flex overflow-x-auto pb-2 border-b border-outline-variant/20 gap-space-6 scrollbar-hide">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`font-label-lg text-label-lg whitespace-nowrap transition-colors pb-2 ${
            activeTab === tab
              ? 'text-primary border-b-2 border-primary font-semibold'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}