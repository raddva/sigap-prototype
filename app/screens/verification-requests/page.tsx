// src/app/screens/verification-requests/page.tsx
'use client';

import React from 'react';
import Topbar from "@/app/screens/components/Topbar";
import PageHeader from './components/PageHeader';
import StatsCards from './components/StatsCards';
import AutomationControls from './components/AutomationControls';
import VerificationTable from './components/VerificationTable';
import WhatsAppPreview from './components/WhatsAppPreview';

export default function VerificationRequestsPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white p-6 lg:p-8">
      {/* Topbar Global dari Dashboard */}
      <Topbar />

      <main className="flex-1 p-6 lg:p-8 max-w-[1600px] mx-auto w-full">
        <PageHeader />
        <StatsCards />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Controls & Table (8 cols) */}
          <div className="xl:col-span-8 flex flex-col gap-6">
            <AutomationControls />
            <VerificationTable />
          </div>

          {/* Right Column: WhatsApp Preview (4 cols) */}
          <div className="xl:col-span-4 flex justify-center xl:justify-end">
            <WhatsAppPreview />
          </div>
          
        </div>
      </main>
    </div>
  );
}