"use client";

import React, { useState } from "react";

import StatsCard from "./components/StatsCard";
import CitizenTable from "./components/CitizenTable";
import AIRecommendationPanel from "./components/AIRecommendationPanel";
import { statsData } from "./data";
import Topbar from "../components/Topbar";

export default function DashboardPage() {
  const [selectedCitizen, setSelectedCitizen] = useState<any | null>(null);

  return (
    <div className="flex flex-col min-h-screen w-full bg-white p-6 lg:p-8">

      {/* TOPBAR */}
      <Topbar />

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#002b73] mb-1">
          Overview
        </h1>
        <p className="text-gray-500 text-sm">
          Real-time monitoring and AI insights for social assistance distribution.
        </p>
      </div>

      {/* STATS (FULL WIDTH - GA DIGANGGU) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {statsData.map((stat) => (
          <StatsCard key={stat.id} {...stat} />
        ))}
      </div>

      {/* MAIN CONTENT: TABLE + AI PANEL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* LEFT - TABLE */}
        <div className="lg:col-span-8">
          <CitizenTable onSelectCitizen={setSelectedCitizen} />
        </div>

        {/* RIGHT - AI PANEL */}
        <div className="lg:col-span-4">
          <AIRecommendationPanel citizen={selectedCitizen} />
        </div>

      </div>

    </div>
  );
}