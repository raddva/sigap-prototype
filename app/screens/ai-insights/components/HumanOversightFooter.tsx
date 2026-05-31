export default function HumanOversightFooter() {
  return (
    <div className="mt-auto pt-space-12 pb-space-8">
      <div className="bg-surface-container-lowest rounded-xl p-space-6 shadow-[0_12px_32px_-4px_rgba(25,28,29,0.06)] border border-outline-variant/20 border-l-4 border-l-primary flex flex-col md:flex-row items-start md:items-center justify-between gap-space-6">
        <div className="flex items-start md:items-center gap-space-4">
          <div className="w-12 h-12 shrink-0 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined">admin_panel_settings</span>
          </div>
          <div>
            <h4 className="font-label-lg text-label-lg text-on-surface">Officer Decision Required</h4>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">
              SIGAP AI acts solely as a recommendation engine to surface critical cases rapidly. All assistance approvals remain exclusively under human jurisdiction. Final verification is mandated.
            </p>
          </div>
        </div>
        
        <div className="shrink-0 bg-surface-container-low px-space-4 py-space-2 rounded-lg flex items-center gap-space-2 text-on-surface-variant font-label-lg text-label-lg">
          <span className="material-symbols-outlined text-secondary">verified_user</span>
          Human Verified Pipeline
        </div>
      </div>
    </div>
  );
}