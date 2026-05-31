// app/screens/appeals/page.tsx
'use client';

import { useState } from 'react';
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
    setTimeout(() => setSelectedAppealId(null), 300); // clear after animation
  };

  return (
    <main className="grow p-space-8 max-w-400 mx-auto w-full">
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
  );
}