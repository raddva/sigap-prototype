import { economicScores } from '../data';

export default function EconomicChangeSummary() {
  return (
    <section>
      <h2 className="font-headline-md text-headline-md text-on-surface mb-space-6">Economic Change Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-6">
        {economicScores.map((score, index) => (
          <div key={index} className="bg-surface-container-lowest rounded-xl p-space-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-label-lg text-label-lg text-on-surface-variant">{score.title}</span>
              <span className={`font-headline-md text-headline-md text-${score.color}`}>{score.value}</span>
            </div>
            <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
              <div className={`bg-${score.color} h-full rounded-full`} style={{ width: `${score.percentage}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}