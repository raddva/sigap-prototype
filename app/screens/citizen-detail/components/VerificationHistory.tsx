// src/app/screens/citizen-detail/components/VerificationHistory.tsx
import React from 'react';
import { verificationHistory } from '../data';

export default function VerificationHistory() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-bold text-gray-900 mb-6" style={{ fontFamily: "Public Sans, sans-serif" }}>Verification History</h2>
      
      <div className="pl-4 border-l-2 border-gray-200 space-y-6 relative ml-2">
        {verificationHistory.map((history) => (
          <div key={history.id} className="relative">
            <span className={`absolute -left-[1.4rem] top-1 w-3 h-3 rounded-full ring-4 ring-white ${history.isPending ? 'bg-[#0056D2]' : 'bg-[#1b6d24]'}`}></span>
            <div className="flex items-center justify-between mb-1 pl-4">
              <span className={`text-sm font-bold ${history.isPending ? 'text-gray-900' : 'text-gray-700'}`}>{history.title}</span>
              {history.isPending ? (
                <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">{history.time}</span>
              ) : (
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">{history.time}</span>
              )}
            </div>
            <p className="text-sm text-gray-500 pl-4">{history.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}