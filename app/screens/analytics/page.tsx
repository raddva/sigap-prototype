// src/app/screens/analytics/page.tsx
"use client";

import React from "react";
import Topbar from "@/app/screens/components/Topbar";
import OverviewCard from "./components/OverviewCard";
import AnalyticsChart from "./components/AnalyticsChart";
import ApprovalChart from "./components/ApprovalChart";
import RegionalInsights from "./components/RegionalInsights";
import AIPerformance from "./components/AIPerformance";
import ReportPanel from "./components/ReportPanel";
import { overviewData } from "./data";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white p-6 lg:p-8">
      {/* Topbar Global */}
      <Topbar />

      <main className="flex-1 p-0 max-w-[1600px] mx-auto w-full">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#002b73] mb-1" style={{ fontFamily: "Public Sans, sans-serif" }}>
              Analytics & Reporting
            </h1>
            <p className="text-sm text-[#0056D2]">AI-powered monitoring and social assistance insights</p>
          </div>
          
          {/* Filters & Export */}
          <div className="flex flex-wrap items-center gap-3">
            <select className="bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0056D2] cursor-pointer">
              <option>Last 30 Days</option>
              <option>This Year</option>
            </select>
            <select className="bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0056D2] cursor-pointer">
              <option>All Regions</option>
              <option>Java</option>
              <option>Sumatra</option>
            </select>
            <button className="bg-[#002b73] hover:bg-[#001f54] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-sm">
              Export Report
            </button>
          </div>
        </div>

        {/* Top Row: 4 Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
          {overviewData.map((data) => (
            <OverviewCard key={data.id} {...data} />
          ))}
        </div>

        {/* Middle Row: Bar Chart & Donut Chart */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-6">
          <div className="xl:col-span-8">
            <AnalyticsChart />
          </div>
          <div className="xl:col-span-4">
            <ApprovalChart />
          </div>
        </div>

        {/* Bottom Row: Map Placeholder & Metrics Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-8">
            <RegionalInsights />
          </div>
          <div className="xl:col-span-4">
            <AIPerformance />
          </div>
        </div>

        {/* Footer: Report Generation Panel */}
        <ReportPanel />
        
      </main>
    </div>
  );
}