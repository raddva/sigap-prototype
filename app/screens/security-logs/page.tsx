// src/app/screens/security-logs/page.tsx
'use client';

import React from 'react';
import Topbar from "@/app/screens/components/Topbar";
import PageHeader from './components/PageHeader';
import LogControls from './components/LogControls';
import LogList from './components/LogList';

export default function SecurityLogsPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white p-6 lg:p-8">
      {/* Topbar Global dari Dashboard */}
      <Topbar />

      <main className="flex-1 p-6 lg:p-8 max-w-[1200px] mx-auto w-full">
        <PageHeader />
        <LogControls />
        <LogList />
      </main>
    </div>
  );
}