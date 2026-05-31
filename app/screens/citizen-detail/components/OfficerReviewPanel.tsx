// src/app/screens/citizen-detail/components/OfficerReviewPanel.tsx
'use client';
import React from 'react';

export default function OfficerReviewPanel() {
  return (
    <aside className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col gap-6 sticky top-24">
      <div className="border-b border-gray-100 pb-4">
        <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "Public Sans, sans-serif" }}>Final Validation</h3>
        <p className="text-sm text-gray-500 mt-1">Review the case details and make a decision.</p>
      </div>
      
      <div className="flex flex-col gap-3">
        <h4 className="text-sm font-bold text-gray-900">Verification Checklist</h4>
        {['Identity Verified', 'Income Verified', 'Dependency Confirmed'].map((item, idx) => (
          <label key={idx} className="flex items-center gap-3 cursor-pointer group">
            <input 
              type="checkbox"
              className="w-4 h-4 text-[#0056D2] border-gray-300 rounded focus:ring-[#0056D2]" 
            />
            <span className="text-sm text-gray-700 group-hover:text-[#0056D2] transition-colors">{item}</span>
          </label>
        ))}
      </div>
      
      <div className="flex flex-col gap-2 mt-2">
        <label className="text-sm font-bold text-gray-900" htmlFor="officer-notes">Officer Notes</label>
        <textarea 
          id="officer-notes" 
          className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm text-gray-900 focus:ring-2 focus:ring-[#0056D2] focus:border-[#0056D2] transition-all resize-none placeholder-gray-400" 
          placeholder="Add contextual notes for the decision..." 
          rows={4}
        ></textarea>
      </div>
      
      <div className="flex flex-col gap-3 mt-2">
        <button className="w-full bg-[#002b73] hover:bg-[#001848] text-white py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-sm">
          <span className="material-symbols-outlined text-[18px]">thumb_up</span>
          Approve Assistance
        </button>
        <button className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <span className="material-symbols-outlined text-[18px]">thumb_down</span>
          Reject Assistance
        </button>
        
        <div className="flex gap-3">
          <button className="flex-1 bg-gray-50 text-gray-600 py-2 px-2 rounded-lg text-xs font-bold hover:bg-gray-100 border border-gray-200 transition-colors">
            Request Review
          </button>
          <button className="flex-1 bg-gray-50 text-gray-600 py-2 px-2 rounded-lg text-xs font-bold hover:bg-gray-100 border border-gray-200 transition-colors">
            Escalate
          </button>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-xl flex items-start gap-3 mt-2 border border-gray-100">
        <span className="material-symbols-outlined text-gray-400 text-[18px] mt-0.5">info</span>
        <p className="text-xs text-gray-500 leading-relaxed">
          AI assists decisions, officer performs final validation. Your decision is recorded immutably.
        </p>
      </div>
    </aside>
  );
}