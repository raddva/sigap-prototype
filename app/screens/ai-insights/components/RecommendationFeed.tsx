import { recommendations } from '../data';

export default function RecommendationFeed() {
  return (
    <section className="flex flex-col gap-space-6">
      <h2 className="font-headline-md text-headline-md text-on-surface">Priority Recommendations</h2>
      
      <div className="bg-surface-container-low rounded-xl p-space-6 flex flex-col gap-space-6">
        {recommendations.map((rec) => (
          <div 
            key={rec.id} 
            className="bg-surface-container-lowest rounded-xl p-space-6 shadow-[0_12px_32px_-4px_rgba(25,28,29,0.06)] flex flex-col md:flex-row items-start md:items-center justify-between border border-outline-variant/20 hover:border-primary/30 transition-colors group cursor-pointer gap-space-4 md:gap-0"
          >
            <div className="flex gap-space-6">
              <div className={`w-12 h-12 shrink-0 rounded-full ${rec.avatarBg} flex items-center justify-center ${rec.avatarColor} font-headline-md text-headline-md`}>
                {rec.initials}
              </div>
              <div className="flex flex-col gap-space-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-space-2">
                  <h3 className="font-label-lg text-label-lg text-on-surface">{rec.name}</h3>
                  <div className={`${rec.tagStyle} px-space-2 py-0.5 rounded-full font-label-sm text-label-sm flex items-center gap-space-1 w-max`}>
                    <span className="material-symbols-outlined text-[14px]">{rec.tagIcon}</span>
                    {rec.tagText}
                  </div>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  {rec.description}
                </p>
                <div className="flex items-center gap-space-4 mt-space-2">
                  <div className="bg-surface-container-high px-space-2 py-0.5 rounded flex items-center gap-space-1">
                    <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                    <span className="font-label-sm text-label-sm text-on-surface">AI Recommended</span>
                  </div>
                  <div className="font-label-sm text-label-sm text-secondary flex items-center gap-space-1">
                    <span className="material-symbols-outlined text-[14px]">target</span>
                    {rec.confidence} Confidence
                  </div>
                </div>
              </div>
            </div>
            <button className="shrink-0 font-label-lg text-label-lg text-primary hover:bg-surface-container-low px-space-4 py-space-2 rounded-xl transition-colors">
              Review Case
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}