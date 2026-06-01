// src/app/screens/reports-center/components/ReportCards.tsx
import React from 'react';
import { reportCardsData } from '../data';

interface ReportCardsProps {
  onOpenModal: () => void;
}

export default function ReportCards({ onOpenModal }: ReportCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {reportCardsData.map((card) => (
        <div 
          key={card.id} 
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start mb-5">
            <div className={`w-12 h-12 rounded-xl ${card.iconBg} ${card.iconColor} flex items-center justify-center`}>
              <span className="material-symbols-outlined text-[24px]">{card.icon}</span>
            </div>
            <span className="text-[11px] font-semibold text-gray-500 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
              Last: {card.lastUpdated}
            </span>
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "Public Sans, sans-serif" }}>
            {card.title}
          </h3>
          <p className="text-sm text-gray-600 mb-8 flex-1 leading-relaxed">
            {card.description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-2 mt-auto">
            <button 
              onClick={onOpenModal}
              className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-[#0056D2] text-xs font-bold py-2.5 rounded-lg transition-colors flex justify-center items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span> PDF
            </button>
            <button className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-[#0056D2] text-xs font-bold py-2.5 rounded-lg transition-colors flex justify-center items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">table</span> Excel
            </button>
            <button className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-[#0056D2] text-xs font-bold py-2.5 rounded-lg transition-colors flex justify-center items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">csv</span> CSV
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}