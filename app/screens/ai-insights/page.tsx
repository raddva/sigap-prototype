// src/app/screens/ai-insights/page.tsx
"use client";

import React from "react";
import Topbar from "@/app/screens/components/Topbar";
import InsightsHeader from "./components/InsightsHeader";
import DetectionSummary from "./components/DetectionSummary";
import RecommendationFeed from "./components/RecommendationFeed";
import ExplainabilityPanel from "./components/ExplainabilityPanel";
import HumanOversightFooter from "./components/HumanOversightFooter";

export default function AIInsightsPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white p-6 lg:p-8">
      {/* Topbar Global dari Dashboard */}
      <Topbar />

      <main className="flex-1 p-6 lg:p-8 max-w-[1600px] mx-auto w-full">
        
        {/* Header & Stats */}
        <InsightsHeader />
        <DetectionSummary />

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          
          {/* Kiri: Rekomendasi (8 Kolom) */}
          <div className="xl:col-span-8 flex flex-col">
            <RecommendationFeed />
          </div>

          {/* Kanan: Panel Penjelasan AI (4 Kolom) */}
          <div className="xl:col-span-4">
            <ExplainabilityPanel />
          </div>

        </div>

        {/* Footer Warning */}
        <HumanOversightFooter />

      </main>
    </div>
  );
}