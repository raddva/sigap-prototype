// src/app/screens/settings/page.tsx
'use client';

import React, { useState } from 'react';
import Topbar from "@/app/screens/components/Topbar";
import SettingsHeader from './components/SettingsHeader';
import SettingsNav from './components/SettingsNav';
import AiConfigPanel from './components/AiConfigPanel';
import WhatsAppPanel from './components/WhatsAppPanel';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('ai');

  return (
    <div className="flex flex-col min-h-screen w-full bg-white p-6 lg:p-8">
      {/* Topbar Global dari Dashboard */}
      <Topbar />

      <main className="flex-1 max-w-[1200px] mx-auto w-full">
        <SettingsHeader />

        <div className="flex flex-col lg:flex-row gap-8">
          <SettingsNav activeTab={activeTab} onTabChange={setActiveTab} />
          
          <div className="flex-1 min-w-0">
            {activeTab === 'ai' && <AiConfigPanel />}
            {activeTab === 'whatsapp' && <WhatsAppPanel />}
            {(activeTab === 'access' || activeTab === 'security') && (
              <div className="p-12 text-center text-gray-500 bg-white rounded-2xl shadow-sm border border-gray-100">
                <span className="material-symbols-outlined text-4xl text-gray-300 mb-2">construction</span>
                <p className="text-sm font-medium">Configuration panel for {activeTab} is under construction.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}