// app/screens/reports-center/components/ReportCards.tsx

import { reportCardsData } from '../data';

interface ReportCardsProps {
  onOpenModal: () => void;
}

export default function ReportCards({ onOpenModal }: ReportCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-6">
      {reportCardsData.map((card) => (
        <div 
          key={card.id} 
          className="bg-surface-container-lowest rounded-xl p-space-6 shadow-[0_12px_32px_-4px_rgba(25,28,29,0.06)] border border-outline-variant/20 flex flex-col group hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined text-[28px]">{card.icon}</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface px-2 py-1 rounded-md">
              Last: {card.lastUpdated}
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{card.title}</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-space-6 flex-1">
            {card.description}
          </p>
          <div className="flex gap-2 mt-auto">
            <button 
              onClick={onOpenModal}
              className="flex-1 bg-surface-container-low hover:bg-surface-container-high text-primary font-label-lg text-label-lg py-2 rounded-lg transition-colors flex justify-center items-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span> PDF
            </button>
            <button className="flex-1 bg-surface-container-low hover:bg-surface-container-high text-primary font-label-lg text-label-lg py-2 rounded-lg transition-colors flex justify-center items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">table</span> Excel
            </button>
            <button className="flex-1 bg-surface-container-low hover:bg-surface-container-high text-primary font-label-lg text-label-lg py-2 rounded-lg transition-colors flex justify-center items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">csv</span> CSV
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}