"use client";

import { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import StatsCard from "./components/StatsCard";
import CitizenTable from "./components/CitizenTable";
import AIRecommendationPanel from "./components/AIRecommendationPanel";

interface DashboardStat {
    id: number;
    title: string;
    value: string;
    type: "verified" | "warning" | "pending" | "neutral";
    trend: string;
    trendType: "up" | "down" | "neutral" | "risk";
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStat[]>([]);

  const [selectedCitizen, setSelectedCitizen] =
    useState<any>(null);
    useEffect(() => {
        async function loadStats() {
        const res = await fetch("/api/dashboard/stats");
        const data = await res.json();
        setStats(data);
        }
        loadStats();
    }, []);

    return (
        <div className="flex min-h-screen w-full flex-col bg-white p-6 lg:p-8">
        <Topbar />
        <div className="mb-6">
            <h1 className="mb-1 text-3xl font-bold text-[#002b73]">
            Overview
            </h1>
            <p className="text-sm text-gray-500">
            Real-time monitoring and AI insights for social assistance
            distribution.
            </p>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
            <StatsCard
                key={stat.id}
                {...stat}
            />
            ))}
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
            <CitizenTable
                onSelectCitizen={setSelectedCitizen}
            />
            </div>
            <div className="lg:col-span-4">
                <AIRecommendationPanel
                    citizen={selectedCitizen}
                    onClose={() => setSelectedCitizen(null)} 
                />
            </div>
        </div>
        </div>
    );
}