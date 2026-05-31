export default function AutomationControls() {
  return (
    <div className="bg-surface-container-low rounded-xl p-space-6 flex flex-col md:flex-row items-center justify-between gap-space-6">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary">smart_toy</span>
        <span className="text-label-lg font-label-lg text-on-surface">Automation Settings</span>
      </div>
      <div className="flex gap-space-4 flex-wrap">
        <label className="flex items-center gap-2 cursor-pointer bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20 hover:border-primary/50 transition-colors">
          <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary border-outline-variant" />
          <span className="text-label-sm font-label-sm text-on-surface">Auto-reminder (24h)</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20 hover:border-primary/50 transition-colors">
          <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary border-outline-variant" />
          <span className="text-label-sm font-label-sm text-on-surface">Retry Logic Active</span>
        </label>
        <div className="flex items-center gap-2 bg-surface-container-lowest px-4 py-2 rounded-lg border border-outline-variant/20">
          <span className="text-label-sm font-label-sm text-on-surface-variant">Expires in:</span>
          <select className="text-label-sm font-label-sm text-on-surface bg-transparent border-none py-0 pl-0 pr-6 focus:ring-0 cursor-pointer">
            <option>7 Days</option>
            <option>14 Days</option>
            <option>30 Days</option>
          </select>
        </div>
      </div>
    </div>
  );
}