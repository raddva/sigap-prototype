// src/app/screens/citizen-detail/components/UploadedEvidence.tsx
import React from 'react';
import { uploadedEvidence } from '../data';

export default function UploadedEvidence() {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "Public Sans, sans-serif" }}>Uploaded Evidence</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {uploadedEvidence.map((evidence) => (
          <div key={evidence.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer">
            <div className="h-32 bg-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 bg-white text-[#0056D2] px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-sm">
                  <span className="material-symbols-outlined text-[14px]">download</span> Download
                </span>
              </div>
              <img alt={evidence.title} className="w-full h-full object-cover" src={evidence.image} />
            </div>
            <div className="p-4 flex justify-between items-center">
              <div>
                <div className="text-sm font-bold text-gray-900">{evidence.title}</div>
                <div className="text-xs text-gray-500 mt-0.5">{evidence.time}</div>
              </div>
              <span className="material-symbols-outlined text-[#1b6d24] text-[18px]">check_circle</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}