// app/screens/citizen-monitoring/components/CitizenFilter.tsx
import { CheckCircle, ChevronDown, MapPin, Search, Sparkles } from "lucide-react";
import React from "react";

type Props = {
  search: string;
  setSearch: (v: string) => void;
  region: string;
  setRegion: (v: string) => void;
  status: string;
  setStatus: (v: string) => void;
  aiRec: string;
  setAiRec: (v: string) => void;
};

export default function CitizenFilter({
  search,
  setSearch,
  region,
  setRegion,
  status,
  setStatus,
  aiRec,
  setAiRec,
}: Props) {
 const selectBase =
  "appearance-none w-full bg-white/80 backdrop-blur border border-gray-200 text-gray-700 text-sm rounded-xl pl-10 pr-10 py-2.5 shadow-sm " +
  "focus:outline-none focus:ring-2 focus:ring-[#002b73] focus:border-transparent transition";

  return (
    <div className="bg-white rounded-xl border-none border-gray-100 p-1 mb-6">
      <div className="flex flex-col lg:flex-row gap-3 lg:items-center">
        {/* Search */}
       <div className="relative w-full lg:flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white/80 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#002b73] transition"
        />
      </div>

        {/* Region */}
        <div className="relative w-full lg:w-[200px] group">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#002b73] transition" />

          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className={selectBase}
          >
            <option value="">All Region</option>
            <option>Jakarta Pusat</option>
            <option>Surabaya</option>
          </select>

          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-focus-within:rotate-180 transition-transform duration-200" />

          {/* glow effect */}
          <div className="absolute inset-0 rounded-xl pointer-events-none group-focus-within:ring-2 group-focus-within:ring-[#002b73]/20" />
        </div>

        {/* Status */}
        <div className="relative w-full lg:w-[200px] group">
          <CheckCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#002b73] transition" />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={selectBase}
          >
            <option value="">All Status</option>
            <option>Under Review</option>
            <option>Pending</option>
            <option>Verified</option>
          </select>

          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-focus-within:rotate-180 transition-transform duration-200" />

          <div className="absolute inset-0 rounded-xl pointer-events-none group-focus-within:ring-2 group-focus-within:ring-[#002b73]/20" />
        </div>

        {/* AI Rec */}
        <div className="relative w-full lg:w-[220px] group">
          <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#002b73] transition" />

          <select
            value={aiRec}
            onChange={(e) => setAiRec(e.target.value)}
            className={selectBase}
          >
            <option value="">AI Recommendation</option>
            <option>AI Recommended</option>
            <option>Needs Review</option>
          </select>

          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-focus-within:rotate-180 transition-transform duration-200" />

          <div className="absolute inset-0 rounded-xl pointer-events-none group-focus-within:ring-2 group-focus-within:ring-[#002b73]/20" />
        </div>
      </div>
    </div>
  );
}