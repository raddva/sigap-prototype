// app/screens/reports-center/components/PageHeader.tsx

export default function PageHeader() {
  return (
    <div className="mb-space-12 flex flex-col gap-2">
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
          <span className="material-symbols-outlined text-[16px] text-primary">auto_awesome</span>
          Automated Reporting
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
          <span className="material-symbols-outlined text-[16px] text-primary">monitoring</span>
          Real-time Analytics
        </span>
      </div>
      <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Reports Center</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
        Generate operational and government reporting documents
      </p>
    </div>
  );
}