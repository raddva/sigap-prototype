import { aiRecommendations } from '../data';

export default function AIRecommendations() {
  return (
    <section className="bg-surface-container-low p-space-8 rounded-xl">
      <div className="flex items-center gap-space-2 mb-space-6">
        <span className="material-symbols-outlined text-primary">psychology</span>
        <h2 className="font-headline-md text-headline-md text-on-surface">Why AI Recommended This</h2>
      </div>
      
      <div className="flex flex-col gap-space-4">
        {aiRecommendations.map((item) => (
          <div key={item.id} className="bg-surface-container-lowest p-space-4 rounded-lg flex justify-between items-center group hover:bg-surface-container-highest transition-colors">
            <div className="flex items-center gap-space-4">
              <div className={`w-8 h-8 rounded-full bg-${item.iconBg} text-${item.iconColor} flex items-center justify-center`}>
                <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
              </div>
              <span className="font-body-lg text-body-lg text-on-surface">{item.reason}</span>
            </div>
            <span className={`font-label-lg text-label-lg text-${item.impactType}`}>{item.impact} impact</span>
          </div>
        ))}
      </div>
    </section>
  );
}