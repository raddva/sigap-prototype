// src/app/screens/appeals/components/AppealDetailModal.tsx
'use client';
import React, { useEffect, useState } from 'react';

interface AppealDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  appealId: string | null;
}

export default function AppealDetailModal({ isOpen, onClose, appealId }: AppealDetailModalProps) {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      document.body.style.overflow = 'hidden'; // Kunci scroll background
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsRendered(false);
    setTimeout(onClose, 300); // Sesuaikan dengan durasi animasi tailwind
  };

  if (!isOpen && !isRendered) return null;

  return (
    <div className={`fixed inset-0 z-50 flex flex-row justify-end transition-opacity duration-300 ${isRendered ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Gelap Background */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm cursor-pointer" onClick={handleClose}></div>
      
      {/* Panel Kanan (Slider) */}
      <div className={`relative bg-white w-full md:w-[600px] h-full shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isRendered ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header Modal */}
        <div className="px-8 py-6 border-b border-gray-200 flex justify-between items-center bg-white sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="bg-[#fef7e0] text-[#b06000] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide">
                New Appeal
              </span>
              <span className="text-[#ba1a1a] font-bold text-[10px] uppercase tracking-wide flex items-center">
                <span className="material-symbols-outlined text-[12px] mr-0.5">priority_high</span> High Priority
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "Public Sans, sans-serif" }}>
              Appeal Detail: {appealId || 'APP-8924'}
            </h2>
          </div>
          <button 
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors" 
            onClick={handleClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Konten Modal */}
        <div className="flex-grow overflow-y-auto p-8 space-y-8 bg-[#f8f9fa]">
          {/* Box Profil */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-lg shrink-0">SR</div>
            <div>
              <h3 className="text-base font-bold text-gray-900">Siti Rahmawati</h3>
              <p className="text-sm text-gray-500 mb-2">NIK: 3201123456789012 • ID: CZN-4492</p>
              <div className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-semibold">
                <span className="material-symbols-outlined text-[14px]">verified_user</span> Verified Identity
              </div>
            </div>
          </div>
        </div>

        {/* Footer (Aksi Button) */}
        <div className="px-8 py-5 border-t border-gray-200 bg-white flex justify-end gap-3 sticky bottom-0 z-10">
          <button className="px-4 py-2.5 rounded-lg text-gray-600 font-bold text-sm hover:bg-gray-100 transition-colors">
            Request Evidence
          </button>
          <button className="px-4 py-2.5 rounded-lg text-[#ba1a1a] font-bold text-sm hover:bg-[#fce8e8] transition-colors">
            Reject Appeal
          </button>
          <button 
            className="px-6 py-2.5 bg-[#0056D2] hover:bg-[#0040a1] text-white rounded-lg text-sm font-bold shadow-sm transition-colors"
            onClick={handleClose}
          >
            Accept Appeal
          </button>
        </div>

      </div>
    </div>
  );
}