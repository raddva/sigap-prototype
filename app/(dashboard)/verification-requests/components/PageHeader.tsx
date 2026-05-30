export default function PageHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-6">
      <div>
        <h2 className="text-headline-lg font-headline-lg text-on-surface mb-2">Verification Requests</h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">Monitor and manage automated WhatsApp verification requests.</p>
      </div>
      <div className="flex flex-wrap gap-space-4">
        <div className="flex items-center gap-2 bg-secondary-container/30 px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span className="text-label-sm font-label-sm text-on-surface">WhatsApp System Active</span>
        </div>
        <div className="flex items-center gap-2 bg-surface-container-high px-3 py-1.5 rounded-full">
          <span className="material-symbols-outlined text-[16px] text-primary">cable</span>
          <span className="text-label-sm font-label-sm text-on-surface">Baileys Integration: Connected</span>
        </div>
        <div className="flex items-center gap-2 bg-primary-fixed/50 px-3 py-1.5 rounded-full">
          <span className="material-symbols-outlined text-[16px] text-primary">sync</span>
          <span className="text-label-sm font-label-sm text-on-surface">Real-time sync</span>
        </div>
      </div>
    </div>
  );
}