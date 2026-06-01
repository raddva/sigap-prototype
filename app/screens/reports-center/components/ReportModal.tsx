// src/app/screens/reports-center/components/ReportModal.tsx
'use client';

import React, { useEffect, useState } from 'react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReportModal({ isOpen, onClose }: ReportModalProps) {
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState('Compiling data...');
  const [isRendered, setIsRendered] = useState(false);

  // Animasi masuk/keluar
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Logika simulasi progress bar
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isOpen) {
      setProgress(0);
      setProgressText('Compiling data...');

      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + Math.random() * 15;
          if (next >= 100) {
            clearInterval(interval);
            setProgressText('Report ready.');
            return 100;
          } else if (next > 60) {
            setProgressText('Formatting document...');
          } else if (next > 30) {
            setProgressText('Generating charts...');
          }
          return next;
        });
      }, 500);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsRendered(false);
    setTimeout(onClose, 300);
  };

  if (!isOpen && !isRendered) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isRendered ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer" onClick={handleClose}></div>
      
      {/* Modal Content */}
      <div className={`relative bg-white w-full max-w-lg rounded-2xl shadow-2xl p-8 m-4 flex flex-col gap-6 transform transition-transform duration-300 ${isRendered ? 'scale-100' : 'scale-95'}`}>
        
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "Public Sans, sans-serif" }}>Generating Report</h3>
            <p className="text-sm text-gray-500 mt-1">Monthly Assistance Report - October 2023</p>
          </div>
          <button className="text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 p-1.5 rounded-full transition-colors" onClick={handleClose}>
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Data Preview */}
        <div className="bg-gray-50 rounded-xl p-5 flex flex-col gap-4 border border-gray-100">
          <div className="flex justify-between items-center border-b border-gray-200 pb-3">
            <span className="text-sm text-gray-600">Total Beneficiaries</span>
            <span className="text-sm font-bold text-gray-900">142,500</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-200 pb-3">
            <span className="text-sm text-gray-600">Funds Disbursed</span>
            <span className="text-sm font-bold text-gray-900">$12.4M</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Pages</span>
            <span className="text-sm font-bold text-gray-900">14</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-sm font-medium">
            <span className="text-gray-600">{progressText}</span>
            <span className="text-[#0056D2]">{Math.floor(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#0056D2] transition-all duration-300 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button 
            className="text-sm font-bold text-gray-600 hover:bg-gray-100 px-5 py-2.5 rounded-lg transition-colors" 
            onClick={handleClose}
          >
            Cancel
          </button>
          <button 
            className={`text-sm font-bold text-white bg-[#0056D2] hover:bg-[#0040a1] px-5 py-2.5 rounded-lg transition-all ${progress < 100 ? 'opacity-50 cursor-not-allowed hover:bg-[#0056D2]' : 'shadow-sm'}`}
            disabled={progress < 100}
            onClick={() => {
               alert("PDF successfully downloaded!"); 
               handleClose();
            }}
          >
            {progress < 100 ? 'Generating PDF...' : 'Download PDF'}
          </button>
        </div>
      </div>
    </div>
  );
}