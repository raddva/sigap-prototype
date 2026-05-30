// app/screens/reports-center/components/ReportModal.tsx
'use client';

import { useEffect, useState } from 'react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReportModal({ isOpen, onClose }: ReportModalProps) {
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState('Compiling data...');
  const [isRendered, setIsRendered] = useState(false);

  // Delay mount for transition effect
  useEffect(() => {
    if (isOpen) setIsRendered(true);
  }, [isOpen]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isOpen) {
      // Reset state every time modal opens
      setProgress(0);
      setProgressText('Compiling data...');

      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + Math.random() * 15; // Random increments
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
    setTimeout(onClose, 300); // Allow animation to finish before unmounting
  };

  if (!isOpen && !isRendered) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isRendered ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-on-background/40 backdrop-blur-sm" onClick={handleClose}></div>
      
      {/* Modal Content */}
      <div className={`relative bg-surface-container-lowest w-full max-w-lg rounded-xl shadow-[0_12px_32px_-4px_rgba(25,28,29,0.12)] p-space-8 m-4 flex flex-col gap-space-6 transform transition-transform duration-300 ${isRendered ? 'scale-100' : 'scale-95'}`}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Generating Report</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Monthly Assistance Report - October 2023</p>
          </div>
          <button className="text-on-surface-variant hover:text-on-surface" onClick={handleClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Report Summary Data (Simulated Preview) */}
        <div className="bg-surface-container-low rounded-lg p-space-6 flex flex-col gap-4 border border-outline-variant/20">
          <div className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
            <span className="font-body-md text-body-md text-on-surface-variant">Total Beneficiaries</span>
            <span className="font-label-lg text-label-lg text-on-surface">142,500</span>
          </div>
          <div className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
            <span className="font-body-md text-body-md text-on-surface-variant">Funds Disbursed</span>
            <span className="font-label-lg text-label-lg text-on-surface">$12.4M</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-body-md text-body-md text-on-surface-variant">Pages</span>
            <span className="font-label-lg text-label-lg text-on-surface">14</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="font-label-sm text-label-sm text-on-surface-variant">{progressText}</span>
            <span className="font-label-sm text-label-sm text-primary">{Math.floor(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary-container transition-all duration-300 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-2">
          <button 
            className="font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-low px-4 py-2 rounded-lg transition-colors" 
            onClick={handleClose}
          >
            Cancel
          </button>
          <button 
            className={`font-label-lg text-label-lg bg-gradient-to-r from-primary to-primary-container text-on-primary px-4 py-2 rounded-lg transition-opacity ${progress < 100 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={progress < 100}
            onClick={() => {
               alert("File Downloaded"); 
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