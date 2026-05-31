// app/screens/appeals/components/ActionBar.tsx

export default function ActionBar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-space-6 mb-space-8 bg-surface-container-low p-space-4 rounded-xl">
      <div className="flex flex-wrap gap-space-2">
        <button className="px-space-4 py-space-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm border border-outline-variant hover:border-primary transition-colors flex items-center gap-space-2">
          <span className="material-symbols-outlined text-[18px]">filter_list</span> All Statuses
        </button>
        <button className="px-space-4 py-space-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm border border-outline-variant hover:border-primary transition-colors flex items-center gap-space-2">
          <span className="material-symbols-outlined text-[18px]">calendar_today</span> This Month
        </button>
        <button className="px-space-4 py-space-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm border border-outline-variant hover:border-primary transition-colors flex items-center gap-space-2">
          <span className="material-symbols-outlined text-[18px]">sort</span> Priority
        </button>
      </div>
      <div className="flex gap-space-4 w-full md:w-auto">
        <button className="flex-1 md:flex-none px-space-6 py-space-2 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-space-2">
          <span className="material-symbols-outlined text-[20px]">add</span> New Case
        </button>
      </div>
    </div>
  );
}