// src/app/screens/reports-center/page.tsx
'use client';

import React, { useState } from 'react';
import Topbar from "@/app/screens/components/Topbar";
import PageHeader from './components/PageHeader';
import ReportCards from './components/ReportCards';
import DownloadCenter from './components/DownloadCenter';
import ReportModal from './components/ReportModal';

export default function ReportsCenterPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen w-full bg-white p-6 lg:p-8">
      {/* Topbar Global dari Dashboard */}
      <Topbar />

      <main className="flex-1 p-6 lg:p-10 max-w-[1600px] mx-auto w-full">
        <PageHeader />

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Kiri: Grid Laporan (Flex-1) */}
          <div className="flex-1 min-w-0">
            <ReportCards onOpenModal={() => setIsModalOpen(true)} />
          </div>

          {/* Kanan: Download Center Sidebar */}
          <div className="w-full lg:w-[320px] xl:w-[380px] shrink-0">
            <DownloadCenter />
          </div>
          
        </div>

        {/* Modal Generate Report */}
        <ReportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        
      </main>
    </div>
  );
}