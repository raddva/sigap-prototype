// src/app/screens/citizen-detail/page.tsx
import React from 'react';
import Topbar from "@/app/screens/components/Topbar";
import CitizenProfileHeader from './components/CitizenProfileHeader';
import EconomicChangeSummary from './components/EconomicChangeSummary';
import AIRecommendations from './components/AIRecommendations';
import UploadedEvidence from './components/UploadedEvidence';
import VerificationHistory from './components/VerificationHistory';
import OfficerReviewPanel from './components/OfficerReviewPanel';

export default function CitizenDetailPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white p-6 lg:p-8">
      <Topbar />
      
      <main className="flex-1 p-6 lg:p-8 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          
          {/* Kiri: Main Detail Canvas (8 Kolom) */}
          <div className="xl:col-span-8 flex flex-col gap-8">
            <CitizenProfileHeader />
            <EconomicChangeSummary />
            <AIRecommendations />
            <UploadedEvidence />
            <VerificationHistory />
          </div>

          {/* Kanan: Officer Review Panel (4 Kolom - Sticky) */}
          <div className="xl:col-span-4 relative">
            <OfficerReviewPanel />
          </div>
          
        </div>
      </main>
    </div>
  );
}