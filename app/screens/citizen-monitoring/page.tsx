// src/app/screens/citizen-monitoring/page.tsx
"use client";

import React from "react";
import CitizenFilter from "./components/CitizenFilter";
import CitizenMonitoringTable from "./components/CitizenMonitoringTable";
import CitizenDetailPanel from "./components/CitizenDetailPanel";
import Topbar from "../components/Topbar";

export default function CitizenMonitoringPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white p-6 lg:p-8">
      
      {/* 1. TOP NAVIGATION (Sama seperti Dashboard) */}
      <Topbar />

      {/* 2. Page Header (Judul Halaman & Tombol Filter/Export) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: "Public Sans, sans-serif" }}>
            Citizen Monitoring
          </h1>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1b6d24]"></span>
            Monitor AI-detected socioeconomic changes in real time
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            <span className="material-symbols-outlined text-[18px]">filter_list</span> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            <span className="material-symbols-outlined text-[18px]">download</span> Export
          </button>
        </div>
      </div>

      {/* 3. Main Layout (Left Content + Right Sidebar) */}
      <div className="flex flex-col xl:flex-row gap-6 items-start">
        
        {/* Kiri: Filter & Table */}
        <div className="flex-1 w-full min-w-0 flex flex-col">
          <CitizenFilter />
          <CitizenMonitoringTable />
        </div>

        {/* Kanan: Detail Panel */}
        <div className="w-full xl:w-[360px] shrink-0">
          <CitizenDetailPanel />
        </div>

      </div>
    </div>
  );
}