// src/app/screens/citizen-monitoring/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import CitizenFilter from "./components/CitizenFilter";
import CitizenMonitoringTable from "./components/CitizenMonitoringTable";
import CitizenDetailPanel from "./components/CitizenDetailPanel";
import Topbar from "../components/Topbar";
import { citizensData } from "./data";

export default function CitizenMonitoringPage() {
  // =========================
  // 1. FILTER STATE (BRAIN)
  // =========================
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [status, setStatus] = useState("");
  const [aiRec, setAiRec] = useState("");

  // selected row (for detail panel)
  const [selectedCitizen, setSelectedCitizen] = useState<any>(null);

  // =========================
  // 2. FILTER LOGIC
  // =========================
  const filteredData = useMemo(() => {
    return citizensData.filter((c) => {
      const matchSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.id.includes(search);

      const matchRegion = region ? c.region === region : true;
      const matchStatus = status ? c.verificationStatus === status : true;
      const matchAI = aiRec ? c.aiRecommendation === aiRec : true;

      return matchSearch && matchRegion && matchStatus && matchAI;
    });
  }, [search, region, status, aiRec]);

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

          <CitizenMonitoringTable
            data={filteredData}
            onSelectCitizen={setSelectedCitizen}
          />

        </div>

        {/* RIGHT */}
        <div className="w-full xl:w-[360px] shrink-0">
          <CitizenDetailPanel citizen={selectedCitizen} />
        </div>

      </div>
    </div>
  );
}