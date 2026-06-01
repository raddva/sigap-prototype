// src/app/screens/appeals/page.tsx
'use client';

import React, { useState } from 'react';
import Topbar from "@/app/screens/components/Topbar";
import PageHeader from './components/PageHeader';
import ActionBar from './components/ActionBar';
import AppealsTable from './components/AppealsTable';
import AppealDetailModal from './components/AppealDetailModal';

export default function AppealsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppealId, setSelectedAppealId] = useState<string | null>(null);

  const handleOpenModal = (id: string) => {
    setSelectedAppealId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedAppealId(null), 300);
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      {/* Topbar Global dari Dashboard */}
      <Topbar />

      <main className="flex-grow p-6 lg:p-10 max-w-[1600px] mx-auto w-full">
        <PageHeader />
        <ActionBar />
        <AppealsTable onRowClick={handleOpenModal} />
        
        {/* Sliding Panel Modal */}
        <AppealDetailModal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          appealId={selectedAppealId} 
        />
      </main>
    </div>
  );
}