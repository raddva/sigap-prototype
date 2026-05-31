// app/screens/appeals/components/AppealDetailModal.tsx
'use client';

import { useEffect, useState } from 'react';

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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsRendered(false);
    setTimeout(onClose, 300); // timeout matches the tailwind transition duration
  };

  if (!isOpen && !isRendered) return null;

  return (
    <div className={`fixed inset-0 z-50 flex flex-row justify-end transition-opacity duration-300 ${isRendered ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-on-surface/20 backdrop-blur-sm cursor-pointer" 
        onClick={handleClose}
      ></div>
      
      {/* Sliding Panel */}
      <div 
        className={`relative bg-surface-container-lowest w-full md:w-150 h-full shadow-[-12px_0_32px_-4px_rgba(25,28,29,0.06)] flex flex-col transform transition-transform duration-300 ease-in-out ${isRendered ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Modal Header */}
        <div className="px-space-8 py-space-6 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-space-2 mb-1">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[10px] uppercase tracking-wide">
                New Appeal
              </span>
              <span className="text-error font-label-sm text-[10px] uppercase tracking-wide flex items-center">
                <span className="material-symbols-outlined text-[12px] mr-0.5">priority_high</span> High Priority
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface">Appeal Detail: {appealId || 'APP-8924'}</h2>
          </div>
          <button 
            className="w-10 h-10 rounded-full hover:bg-surface-container-low flex items-center justify-center text-on-surface-variant transition-colors" 
            onClick={handleClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="grow overflow-y-auto p-space-8 space-y-space-12 bg-background">
          
          {/* Citizen Info Context */}
          <div className="bg-surface-container-lowest p-space-6 rounded-xl ring-1 ring-outline-variant flex items-start gap-space-6">
            <div className="w-12 h-12 rounded-full bg-surface-dim flex items-center justify-center text-on-surface font-headline-md shrink-0">SR</div>
            <div>
              <h3 className="font-label-lg text-label-lg text-on-surface">Siti Rahmawati</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-2">NIK: 3201123456789012 • ID: CZN-4492</p>
              <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-[11px]">
                <span className="material-symbols-outlined text-[14px]">verified_user</span> Verified Identity
              </div>
            </div>
          </div>

          {/* Explanation Text */}
          <section>
            <h4 className="font-label-lg text-label-lg text-on-surface mb-space-4 flex items-center gap-space-2">
              <span className="material-symbols-outlined text-primary text-[20px]">subject</span> Citizen's Statement
            </h4>
            <div className="bg-surface-container-low p-space-6 rounded-xl rounded-tl-none font-body-md text-body-md text-on-surface leading-relaxed relative">
              "I received a notification that I am no longer eligible for the PKH assistance program because my registered income is above the threshold. This data is incorrect. I lost my job last month and my current income is zero. I have attached my termination letter as proof."
              <div className="absolute -left-2 top-0 w-4 h-4 bg-surface-container-low transform rotate-45 -z-10"></div>
            </div>
          </section>

          {/* Evidence Preview */}
          <section>
            <h4 className="font-label-lg text-label-lg text-on-surface mb-space-4 flex items-center gap-space-2">
              <span className="material-symbols-outlined text-primary text-[20px]">attachment</span> Evidence Attached
            </h4>
            <div className="grid grid-cols-2 gap-space-4">
              <div className="bg-surface-container-lowest p-space-4 rounded-xl ring-1 ring-outline-variant hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center justify-center gap-space-2 h-32">
                <span className="material-symbols-outlined text-on-surface-variant text-3xl">description</span>
                <span className="font-label-sm text-label-sm text-on-surface text-center">Termination_Letter.pdf</span>
                <span className="text-[10px] text-on-surface-variant">1.2 MB</span>
              </div>
              <div className="bg-surface-container-lowest p-space-4 rounded-xl ring-1 ring-outline-variant hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center justify-center gap-space-2 h-32 relative overflow-hidden group">
                <div className="absolute inset-0 bg-surface-dim flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface-variant opacity-20 text-6xl">image</span>
                </div>
                <div className="absolute inset-0 bg-surface-container-lowest/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">visibility</span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface text-center z-10 mt-auto bg-surface-container-lowest/90 px-2 py-1 rounded w-full truncate">KTP_Scan.jpg</span>
              </div>
            </div>
          </section>

          {/* Officer Notes (Form State) */}
          <section>
            <h4 className="font-label-lg text-label-lg text-on-surface mb-space-4 flex items-center gap-space-2">
              <span className="material-symbols-outlined text-primary text-[20px]">edit_note</span> Reviewer Notes
            </h4>
            <div className="bg-surface-container-lowest rounded-xl">
              <textarea 
                className="w-full bg-surface-container-lowest border-none rounded-xl p-space-4 font-body-md text-body-md text-on-surface placeholder-on-surface-variant focus:ring-0 focus:border-l-4 focus:border-primary resize-none min-h-30 transition-all ring-1 ring-outline-variant outline-none" 
                placeholder="Add your assessment here before taking action..."
              ></textarea>
            </div>
          </section>

          {/* Timeline */}
          <section>
            <h4 className="font-label-lg text-label-lg text-on-surface mb-space-4">Review Timeline</h4>
            <div className="relative border-l border-outline-variant ml-space-4 space-y-space-6 pb-space-4">
              <div className="relative pl-space-6">
                <div className="absolute -left-1.25 top-1 w-2.5 h-2.5 rounded-full bg-primary-container ring-4 ring-surface-container-lowest"></div>
                <p className="font-label-sm text-label-sm text-on-surface font-semibold">Appeal Submitted</p>
                <p className="font-body-sm text-[12px] text-on-surface-variant">Oct 12, 2023 - 09:41 AM via Mobile App</p>
              </div>
              <div className="relative pl-space-6">
                <div className="absolute -left-1.25 top-1 w-2.5 h-2.5 rounded-full bg-surface-dim ring-4 ring-surface-container-lowest"></div>
                <p className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Automated Pre-check</p>
                <p className="font-body-sm text-[12px] text-on-surface-variant">Pending...</p>
              </div>
            </div>
          </section>

        </div>

        {/* Action Footer */}
        <div className="px-space-8 py-space-4 border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-space-4 sticky bottom-0 z-10">
          <button className="px-space-4 py-space-2 rounded-lg text-on-surface-variant font-label-lg text-label-lg hover:bg-surface-container-low transition-colors">
            Request Evidence
          </button>
          <button className="px-space-4 py-space-2 rounded-lg text-error font-label-lg text-label-lg hover:bg-error-container/50 transition-colors border border-transparent hover:border-error/20">
            Reject Appeal
          </button>
          <button 
            className="px-space-6 py-space-2 bg-linear-to-r from-primary to-primary-container text-white rounded-xl font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all"
            onClick={handleClose}
          >
            Accept Appeal
          </button>
        </div>
      </div>
    </div>
  );
}