// app/screens/dashboard/page.tsx
"use client";

import React from "react";
import StatsCard from "./components/StatsCard";
import CitizenTable from "./components/CitizenTable";
import AIRecommendationPanel from "./components/AIRecommendationPanel";
import { statsData } from "./data";
import Topbar from "../components/Topbar";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white p-6 lg:p-8">
      
      {/* 1. TOP NAVIGATION */}
      <Topbar />

      {/* 2. HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#002b73] mb-1" style={{ fontFamily: "Public Sans, sans-serif" }}>Overview</h1>
        <p className="text-gray-500 text-sm">Real-time monitoring and AI insights for social assistance distribution.</p>
      </div>

      {/* 3. MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* --- LEFT COLUMN --- */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Stats Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {statsData.map((stat) => (
              <StatsCard key={stat.id} {...stat} />
            ))}
          </div>

          {/* Citizen Table */}
          <CitizenTable />

        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="lg:col-span-4">
          <AIRecommendationPanel />
        </div>

      </div>
    </div>
  );
}