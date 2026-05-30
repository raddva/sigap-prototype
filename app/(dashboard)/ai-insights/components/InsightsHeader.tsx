export default function InsightsHeader() {
  return (
    <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-space-4">
      <div className="flex flex-col gap-space-2">
        <div className="flex items-center gap-space-4 mb-space-2">
          <div className="px-space-2 py-space-1 rounded-full bg-secondary-container text-on-secondary-container flex items-center gap-space-1 w-max">
            <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span className="font-label-sm text-label-sm">System Active</span>
          </div>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface">AI Insights</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">Transparent AI recommendation and socioeconomic analysis</p>
      </div>
      <button className="flex items-center gap-space-2 text-primary font-label-lg text-label-lg px-space-4 py-space-2 rounded-xl hover:bg-surface-container-low transition-colors">
        <span className="material-symbols-outlined">refresh</span>
        Refresh Analysis
      </button>
    </header>
  );
}