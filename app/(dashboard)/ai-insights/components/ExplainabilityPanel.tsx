import { explainabilityFactors } from '../data';

export default function ExplainabilityPanel() {
  return (
    <div className="sticky top-25 bg-surface-container-lowest rounded-xl p-space-6 shadow-[0_12px_32px_-4px_rgba(25,28,29,0.06)] border border-outline-variant/20 flex flex-col gap-space-8">
      <div>
        <div className="flex items-center gap-space-2 text-primary mb-space-2">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
          <span className="font-label-sm text-label-sm uppercase tracking-wider">Active Analysis</span>
        </div>
        <h2 className="font-headline-md text-headline-md text-on-surface">Model Explainability</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-2">
          Currently detailing recommendation logic for <strong>Siti Wahyuni</strong>.
        </p>
      </div>

      {/* Factors */}
      <div className="flex flex-col gap-space-4">
        <h3 className="font-label-lg text-label-lg text-on-surface">Contributing Factors</h3>
        <div className="flex flex-col gap-space-4">
          {explainabilityFactors.map((factor) => (
            <div key={factor.id} className="flex flex-col gap-space-1">
              <div className="flex justify-between font-label-sm text-label-sm">
                <span className="text-on-surface-variant">{factor.label}</span>
                <span className={`${factor.isNegative ? 'text-error' : 'text-secondary'} font-bold`}>
                  {factor.impact} {factor.isNegative ? 'Impact' : 'Buffer'}
                </span>
              </div>
              <div className={`w-full bg-surface-container h-2 rounded-full overflow-hidden ${!factor.isNegative ? 'flex justify-end' : ''}`}>
                <div 
                  className={`${factor.isNegative ? 'bg-error' : 'bg-secondary'} h-full rounded-full`} 
                  style={{ width: `${factor.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scores */}
      <div className="flex flex-col gap-space-6 bg-surface-container-low p-space-4 rounded-xl">
        <div className="flex justify-between items-center">
          <span className="font-label-lg text-label-lg text-on-surface">Eligibility Score</span>
          <span className="font-headline-md text-headline-md text-primary">82/100</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-label-lg text-label-lg text-on-surface">Economic Change Severity</span>
          <span className="font-headline-md text-headline-md text-error">High</span>
        </div>
      </div>

      {/* Contextual Warning */}
      <div className="flex items-start gap-space-2 text-on-surface-variant bg-surface-bright p-space-4 rounded-xl border border-outline-variant/20">
        <span className="material-symbols-outlined text-[18px] text-tertiary">info</span>
        <p className="font-label-sm text-label-sm">
          Model behavior is based on Q3 national census data and localized economic indicators. Last trained: 2 days ago.
        </p>
      </div>
    </div>
  );
}