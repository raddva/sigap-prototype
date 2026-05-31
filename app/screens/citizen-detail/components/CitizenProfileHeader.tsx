// src/app/screens/citizen-detail/components/CitizenProfileHeader.tsx
import React from 'react';
import { citizenProfile } from '../data';

export default function CitizenProfileHeader() {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
      <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 bg-gray-100 border border-gray-200">
        <img alt={citizenProfile.name} className="w-full h-full object-cover" src={citizenProfile.avatar} />
      </div>
      
      <div className="flex-1 flex flex-col gap-4 w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: "Public Sans, sans-serif" }}>
              {citizenProfile.name}
            </h1>
            <p className="text-sm text-gray-500 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">badge</span>
              NIK: {citizenProfile.nik}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#0056D2] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">psychology</span> AI Recommended
            </span>
            <span className="bg-[#fef7e0] text-[#b06000] px-3 py-1 rounded-full text-xs font-semibold">
              High Priority
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
              Under Review
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-6 text-sm text-gray-500 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">location_on</span> {citizenProfile.location}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">family_home</span> {citizenProfile.familyMembers} Members
          </div>
          <div className="flex items-center gap-1.5 text-[#1b6d24] font-medium">
            <span className="material-symbols-outlined text-[16px]">verified</span> {citizenProfile.verificationStatus}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">update</span> Last verification: {citizenProfile.lastVerification}
          </div>
        </div>
      </div>
    </section>
  );
}