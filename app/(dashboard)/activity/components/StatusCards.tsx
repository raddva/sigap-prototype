import { statusCards } from '../data';

export default function StatusCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-6 mb-space-12">
      {statusCards.map((card) => (
        <div key={card.id} className={`bg-surface-container-lowest p-space-6 rounded-xl border border-outline-variant/20 shadow-[0_12px_32px_-4px_rgba(25,28,29,0.06)] relative overflow-hidden group hover:border-${card.type}/20 transition-colors`}>
          <div className={`absolute right-0 top-0 w-24 h-24 bg-${card.type}/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110`}></div>
          <div className="flex justify-between items-start mb-space-4 relative z-10">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{card.title}</span>
            <span className={`material-symbols-outlined text-${card.type}/50`}>{card.icon}</span>
          </div>
          <div className="flex items-baseline gap-space-2 relative z-10">
            <span className="font-headline-lg text-headline-lg text-on-surface">{card.value}</span>
            {card.isOptimal ? (
              <span className={`font-label-sm text-label-sm text-${card.type} bg-${card.type}-container px-2 py-0.5 rounded-full`}>{card.subtext}</span>
            ) : (
              <span className={`font-label-sm text-label-sm text-${card.type === 'primary' ? 'secondary' : 'on-surface-variant'} flex items-center`}>
                {card.subtextIcon && <span className="material-symbols-outlined text-[14px]">{card.subtextIcon}</span>}
                {card.subtext}
              </span>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}