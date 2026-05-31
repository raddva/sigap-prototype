import { statsData } from '../data';

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-space-6">
      {statsData.map((stat) => {
        if (stat.isPrimary) {
          return (
            <div key={stat.id} className="bg-primary rounded-xl p-space-6 flex flex-col justify-between shadow-lg relative overflow-hidden text-on-primary">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-container rounded-full opacity-50 blur-xl"></div>
              <span className="text-label-sm font-label-sm text-primary-fixed mb-4 relative z-10">{stat.label}</span>
              <span className="text-headline-lg font-headline-lg relative z-10">{stat.value}</span>
            </div>
          );
        }

        if (stat.isError) {
          return (
            <div key={stat.id} className="bg-surface-container-lowest rounded-xl p-space-6 flex flex-col justify-between shadow-[0_4px_12px_-4px_rgba(25,28,29,0.03)] border border-error/20 bg-error-container/10">
              <span className="text-label-sm font-label-sm text-error mb-4">{stat.label}</span>
              <span className="text-headline-md font-headline-md text-error">{stat.value}</span>
            </div>
          );
        }

        return (
          <div key={stat.id} className="bg-surface-container-lowest rounded-xl p-space-6 flex flex-col justify-between shadow-[0_4px_12px_-4px_rgba(25,28,29,0.03)] border border-outline-variant/10">
            <span className="text-label-sm font-label-sm text-on-surface-variant mb-4">{stat.label}</span>
            <div className="flex items-baseline gap-2">
              <span className={stat.highlight ? "text-headline-lg font-headline-lg text-on-surface" : "text-headline-md font-headline-md text-on-surface"}>
                {stat.value}
              </span>
              {stat.highlight && (
                <span className={`text-label-sm font-label-sm ${stat.highlightColor} flex items-center`}>
                  <span className="material-symbols-outlined text-[14px]">{stat.highlightIcon}</span> {stat.highlight}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}