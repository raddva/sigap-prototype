// app/screens/settings/page.tsx
'use client';

import { useState } from 'react';
import SettingsHeader from './components/SettingsHeader';
import SettingsNav from './components/SettingsNav';
import AiConfigPanel from './components/AiConfigPanel';
import WhatsAppPanel from './components/WhatsAppPanel';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('ai');

  return (
    <main className="flex-1 px-4 md:px-8 py-6 max-w-7xl mx-auto w-full">
      <SettingsHeader />

      <div className="flex flex-col lg:flex-row gap-space-8">
        <SettingsNav activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="flex-1 min-w-0">
          {activeTab === 'ai' && <AiConfigPanel />}
          {activeTab === 'whatsapp' && <WhatsAppPanel />}
          {/* Tambahkan panel lain di sini nanti: access, security */}
          {(activeTab === 'access' || activeTab === 'security') && (
            <div className="p-8 text-center text-on-surface-variant bg-surface-container-low rounded-xl">
              Configuration panel for {activeTab} is under construction.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}