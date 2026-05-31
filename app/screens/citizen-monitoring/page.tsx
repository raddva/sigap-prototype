// src/app/screens/citizen-monitoring/page.tsx
"use client";

import React from "react";
import CitizenFilter from "./components/CitizenFilter";
import CitizenMonitoringTable from "./components/CitizenMonitoringTable";
import CitizenDetailPanel from "./components/CitizenDetailPanel";

export default function CitizenMonitoringPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white p-6 lg:p-8">
      
      {/* 1. TOP NAVIGATION (Sama seperti Dashboard) */}
      <header className="flex flex-col md:flex-row justify-between items-center w-full mb-8 gap-4">
        {/* Sisi Kiri Dikosongkan karena Search Bar sudah ada di komponen CitizenFilter di bawah */}
        <div className="hidden md:block flex-1"></div>
        
        {/* Right Actions: Badge, Notification, Profile */}
        <div className="flex items-center gap-6 self-end md:self-auto">
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