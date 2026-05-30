// app/screens/reports-center/page.tsx
'use client';

import { useState } from 'react';
import PageHeader from './components/PageHeader';
import ReportCards from './components/ReportCards';
import DownloadCenter from './components/DownloadCenter';
import ReportModal from './components/ReportModal';

export default function ReportsCenterPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex-1 p-space-6 md:p-space-8 max-w-7xl mx-auto w-full">
      <PageHeader />

      <div className="flex flex-col lg:flex-row gap-space-8">
        {/* Reports Grid */}
        <div className="flex-1">
          <ReportCards onOpenModal={() => setIsModalOpen(true)} />
        </div>

        {/* Sidebar: Download Center */}
        <div className="w-full lg:w-80">
          <DownloadCenter />
        </div>
      </div>

      {/* Report Preview Modal */}
      <ReportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}