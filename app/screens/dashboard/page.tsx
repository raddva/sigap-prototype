// app/screens/dashboard/page.tsx
"use client";

import React from "react";
import StatsCard from "./components/StatsCard";
import CitizenTable from "./components/CitizenTable";
import AIRecommendationPanel from "./components/AIRecommendationPanel";
import { statsData } from "./data";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#f8f9fa] p-6 lg:p-8">
      
      {/* 1. TOP NAVIGATION */}
      <header className="flex flex-col md:flex-row justify-between items-center w-full mb-8 gap-4">
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
          <input
            type="text"
            placeholder="Search citizens, IDs..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0056D2] text-sm"
          />
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 bg-[#e6f4ea] text-[#1b6d24] px-3 py-1.5 rounded-full text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#1b6d24] animate-pulse"></span>
            System Active
          </div>
          <button className="relative text-gray-500 hover:text-gray-700">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-3 border-l pl-6 border-gray-200">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
              <img src="https://ui-avatars.com/api/?name=Officer+A+Rahman&background=0D8ABC&color=fff" alt="Profile" />
            </div>
            <div className="hidden md:block text-sm">
              <p className="font-bold text-gray-900 leading-none">Officer A. Rahman</p>
              <p className="text-gray-500 text-xs">Senior Analyst</p>
            </div>
          </div>
        </div>
      </header>

      {/* 2. HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: "Public Sans, sans-serif" }}>Overview</h1>
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