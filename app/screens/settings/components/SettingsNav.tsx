// src/app/screens/settings/components/SettingsNav.tsx
import React from 'react';
import { settingsTabs } from '../data';

interface SettingsNavProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

export default function SettingsNav({ activeTab, onTabChange }: SettingsNavProps) {
  return (
    <nav className="lg:w-64 flex-shrink-0 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
      {settingsTabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors text-left ${
              isActive 
                ? 'text-[#002b73] bg-[#f0f4f8]' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <span 
              className="material-symbols-outlined text-[20px]" 
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {tab.icon}
            </span>
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}