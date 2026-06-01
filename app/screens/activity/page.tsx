// src/app/screens/activity-feed/page.tsx
'use client';

import React from 'react';
import Topbar from "@/app/screens/components/Topbar";
import StatusCards from './components/StatusCards';
import FeedTabs from './components/FeedTabs';
import TimelineFeed from './components/TimelineFeed';
import PrioritySidebar from './components/PrioritySidebar';

export default function ActivityFeedPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      {/* Topbar Global dari Dashboard */}
      <Topbar />

      <main className="flex-1 p-6 lg:p-8 max-w-[1600px] mx-auto w-full">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "Public Sans, sans-serif" }}>
                Activity Feed
              </h1>
              <span className="bg-[#e6f4ea] text-[#1b6d24] px-2 py-0.5 rounded-full text-xs font-bold flex items-center gap-1 border border-[#1b6d24]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1b6d24] animate-pulse"></span>
                Live
              </span>
            </div>
            <p className="text-[15px] text-gray-600">
              Real-time monitoring of verification and AI system activities.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
              <span className="text-xs font-bold text-gray-700">Auto-refresh</span>
              {/* Toggle Switch */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-8 h-4 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#0056D2]"></div>
              </label>
            </div>
            <button className="flex items-center gap-2 text-[#0056D2] font-bold text-sm hover:bg-[#e8f0fe] px-3 py-2 rounded-lg transition-colors">
              <span className="material-symbols-outlined text-[20px]">filter_list</span> Filter
            </button>
          </div>
        </div>

        {/* 4 Status Cards */}
        <StatusCards />

        {/* Main Content Split Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Feed (8 cols) */}
          <div className="xl:col-span-8 flex flex-col">
            <FeedTabs />
            <TimelineFeed />
          </div>

          {/* Right Column: Priority Sidebar (4 cols) */}
          <div className="xl:col-span-4 sticky top-24">
            <PrioritySidebar />
          </div>

        </div>
      </main>
    </div>
  );
}