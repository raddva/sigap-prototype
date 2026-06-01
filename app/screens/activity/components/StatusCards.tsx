// src/app/screens/activity-feed/components/StatusCards.tsx
import React from 'react';
import { statusCardsData } from '../data';

export default function StatusCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
      {statusCardsData.map((card) => (
        <div key={card.id} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[11px] font-bold text-gray-500 tracking-wider">
              {card.title}
            </span>
            <div className={`w-8 h-8 rounded-full ${card.iconBg} flex items-center justify-center`}>
              <span className={`material-symbols-outlined text-[16px] ${card.iconColor}`}>
                {card.icon}
              </span>
            </div>
          </div>
          
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-900">{card.value}</span>
            {card.isBadge ? (
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${card.subColor}`}>
                {card.subText}
              </span>
            ) : (
              <span className={`text-xs font-semibold ${card.subColor} flex items-center`}>
                {card.subIcon && <span className="material-symbols-outlined text-[14px]">{card.subIcon}</span>}
                {card.subText}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}