// src/app/screens/citizen-monitoring/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import CitizenFilter from "./components/CitizenFilter";
import CitizenMonitoringTable from "./components/CitizenMonitoringTable";
import CitizenDetailPanel from "./components/CitizenDetailPanel";
import Topbar from "../components/Topbar";

export default function CitizenMonitoringPage() {
  // 1. DATA STATE
  const [citizensData, setCitizensData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. FILTER STATE (BRAIN)
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [status, setStatus] = useState("");
  const [aiRec, setAiRec] = useState("");

  // selected row (for detail panel)
  const [selectedCitizen, setSelectedCitizen] = useState<any>(null);

  // 3. FETCH DATA FROM API
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/dashboard/citizens");
        const data = await res.json();
        setCitizensData(data || []);
      } catch (error) {
        console.error("Failed to fetch citizens:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // 4. FILTER LOGIC
  const filteredData = useMemo(() => {
    return citizensData.filter((c) => {
      // Disesuaikan dengan properti dari API (nik)
      const matchSearch =
        c.name?.toLowerCase().includes(search.toLowerCase()) ||
        c.nik?.includes(search);

      const matchRegion = region ? c.region === region : true;
      // Disesuaikan dengan properti dari API (verification_status)
      const matchStatus = status ? c.verification_status === status : true;
      // Disesuaikan dengan properti dari API (ai_status atau status di dalam ai_cases)
      const matchAI = aiRec ? c.ai_status === aiRec : true;

      return matchSearch && matchRegion && matchStatus && matchAI;
    });
  }, [citizensData, search, region, status, aiRec]);

  return (
    <div className="flex flex-col min-h-screen w-full bg-white p-6 lg:p-8">
      {/* TOPBAR */}
      <Topbar />

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#002b73] mb-1">
            Citizen Monitoring
          </h1>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1b6d24]"></span>
            Monitor AI-detected socioeconomic changes in real time
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export
          </button>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col xl:flex-row gap-6 items-start">
        {/* LEFT */}
        <div className="flex-1 w-full min-w-0 flex flex-col">
          <CitizenFilter
            search={search}
            setSearch={setSearch}
            region={region}
            setRegion={setRegion}
            status={status}
            setStatus={setStatus}
            aiRec={aiRec}
            setAiRec={setAiRec}
          />

          {/* Menambahkan indikator loading */}
          {loading ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex items-center justify-center min-h-[300px]">
              <div className="flex items-center gap-2 text-gray-500">
                <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                <span className="font-medium">Loading monitoring data...</span>
              </div>
            </div>
          ) : (
            <CitizenMonitoringTable
              data={filteredData}
              onSelectCitizen={setSelectedCitizen}
            />
          )}
        </div>

        {/* RIGHT */}
        <div className="w-full xl:w-[360px] shrink-0">
          <CitizenDetailPanel 
            citizen={selectedCitizen} 
            onClose={() => setSelectedCitizen(null)} 
          />
        </div>
      </div>
    </div>
  );
}