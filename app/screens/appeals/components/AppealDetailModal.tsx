'use client';

import React, { useEffect, useState } from 'react';

interface AppealDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  appealId: string | null;
}

export default function AppealDetailModal({
  isOpen,
  onClose,
  appealId,
}: AppealDetailModalProps) {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsRendered(false);
    setTimeout(onClose, 250);
  };

  if (!isOpen && !isRendered) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isRendered ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* MODAL */}
      <div
        className={`relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl flex flex-col transform transition-all duration-300 ease-out ${
          isRendered ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >

        {/* HEADER */}
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-start bg-white rounded-t-2xl">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#fef7e0] text-[#b06000] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide">
                New Appeal
              </span>

              <span className="text-[#ba1a1a] font-bold text-[10px] uppercase tracking-wide flex items-center">
                <span className="material-symbols-outlined text-[12px] mr-0.5">
                  priority_high
                </span>
                High Priority
              </span>
            </div>

            <h2 className="text-xl font-bold text-gray-900">
              Appeal Detail: {appealId || 'APP-8924'}
            </h2>
          </div>

          <button
            className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 transition"
            onClick={handleClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-grow overflow-y-auto p-6 bg-gray-50 space-y-6">

          {/* PROFILE CARD */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-lg">
              SR
            </div>

            <div>
              <h3 className="text-base font-bold text-gray-900">
                Siti Rahmawati
              </h3>

              <p className="text-sm text-gray-500 mb-2">
                NIK: 3201123456789012 • ID: CZN-4492
              </p>

              <div className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-semibold">
                <span className="material-symbols-outlined text-[14px]">
                  verified_user
                </span>
                Verified Identity
              </div>
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <div className="px-6 py-4 border-t border-gray-200 bg-white flex justify-end gap-3 rounded-b-2xl">

          <button className="px-4 py-2 rounded-lg text-gray-600 font-bold text-sm hover:bg-gray-100 transition">
            Request Evidence
          </button>

          <button className="px-4 py-2 rounded-lg text-[#ba1a1a] font-bold text-sm hover:bg-[#fce8e8] transition">
            Reject Appeal
          </button>

          <button
            className="px-5 py-2 bg-[#0056D2] hover:bg-[#0040a1] text-white rounded-lg text-sm font-bold shadow-sm transition"
            onClick={handleClose}
          >
            Accept Appeal
          </button>

        </div>

      </div>
    </div>
  );
}