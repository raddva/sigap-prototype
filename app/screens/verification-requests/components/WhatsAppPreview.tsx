// src/app/screens/verification-requests/components/WhatsAppPreview.tsx
import React from 'react';

export default function WhatsAppPreview() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full max-w-[340px] flex flex-col items-center sticky top-24">
      
      <div className="w-full flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "Public Sans, sans-serif" }}>Message Preview</h3>
        <div className="bg-gray-100 px-2 py-0.5 rounded text-[10px] font-bold text-gray-500 tracking-wider">LIVE VIEW</div>
      </div>
      
      {/* Mobile Phone Mockup */}
      <div className="w-[280px] h-[550px] border-[8px] border-gray-100 rounded-[2.5rem] overflow-hidden bg-[#efeae2] relative flex flex-col shadow-inner">
        
        {/* Status Bar */}
        <div className="h-6 bg-[#075e54] flex justify-between items-center px-4 text-white text-[10px] opacity-90">
          <span className="font-medium">09:41</span>
          <div className="flex gap-1">
            <span className="material-symbols-outlined text-[12px]">signal_cellular_4_bar</span>
            <span className="material-symbols-outlined text-[12px]">wifi</span>
            <span className="material-symbols-outlined text-[12px]">battery_full</span>
          </div>
        </div>
        
        {/* WA Header */}
        <div className="bg-[#075e54] text-white px-3 py-2 flex items-center gap-2 shadow-md z-10">
          <span className="material-symbols-outlined">arrow_back</span>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0">
            <div className="w-full h-full bg-[#002b73] text-white flex items-center justify-center font-bold text-xs">S</div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="font-bold text-[13px] leading-tight">SIGAP Official</span>
              <span className="material-symbols-outlined text-[#00a884] text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
            <p className="text-[9px] opacity-80 leading-none mt-0.5">Official Business Account</p>
          </div>
        </div>
        
        {/* Chat Area (with standard WA doodle pattern) */}
        <div className="flex-1 p-3 flex flex-col gap-3 overflow-y-auto" style={{ backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)", backgroundSize: "16px 16px" }}>
          <div className="flex justify-center mb-1">
            <span className="bg-white/80 text-gray-600 text-[10px] px-2.5 py-1 rounded-lg shadow-sm font-medium">Today</span>
          </div>
          
          {/* Chat Bubble */}
          <div className="bg-white rounded-lg rounded-tl-none p-2.5 max-w-[95%] shadow-sm relative self-start border border-gray-100/50">
            <p className="text-[13px] text-[#111b21] leading-relaxed mb-1.5">
              Hello <span className="font-bold">Budi Santoso</span>, this is the SIGAP system. Please verify your recent change in household status regarding your economic update request.
            </p>
            <p className="text-[11px] text-gray-500 mb-3">Ref ID: RQ-9982-A</p>
            
            <button className="w-full bg-[#00a884] text-white py-2 rounded-md text-[13px] font-bold shadow-sm hover:bg-[#008f6f] transition-colors">
              Start Verification
            </button>
            <div className="flex justify-end items-center gap-1 mt-1.5">
              <span className="text-[10px] text-gray-400">09:42</span>
            </div>
          </div>
        </div>
        
        {/* WA Input Area */}
        <div className="bg-[#f0f2f5] p-2 flex items-center gap-2">
          <div className="bg-white flex-1 rounded-full px-3 py-2 flex items-center shadow-sm">
            <span className="material-symbols-outlined text-gray-500 text-[20px]">mood</span>
            <span className="text-gray-400 text-[13px] ml-2 flex-1">Type a message</span>
          </div>
          <div className="w-10 h-10 bg-[#00a884] rounded-full flex items-center justify-center text-white shadow-sm shrink-0">
            <span className="material-symbols-outlined text-[20px]">mic</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500 font-medium">This template auto-fills citizen data dynamically.</p>
      </div>
    </div>
  );
}