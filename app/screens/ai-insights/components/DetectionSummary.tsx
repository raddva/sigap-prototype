import { summaryStats } from '../data';

export default function DetectionSummary() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-space-6">
      {summaryStats.map((stat) => (
        <div 
          key={stat.id} 
          className="bg-surface-container-lowest rounded-xl p-space-6 shadow-[0_12px_32px_-4px_rgba(25,28,29,0.06)] border border-outline-variant/20 flex flex-col gap-space-2"
        >
          <span className={`material-symbols-outlined text-${stat.color} mb-space-2`}>
            {stat.icon}
          </span>
          <span className="font-headline-md text-headline-md text-on-surface">{stat.value}</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">{stat.title}</span>
        </div>
      ))}
    </div>
  );
}