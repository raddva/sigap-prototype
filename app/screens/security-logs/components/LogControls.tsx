// app/screens/security-logs/components/LogControls.tsx

export default function LogControls() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-space-8">
      {/* Search Bar */}
      <div className="relative grow bg-surface-container-lowest rounded-xl flex items-center px-4 py-2 border border-outline-variant/20 focus-within:border-l-4 focus-within:border-l-primary transition-all">
        <span className="material-symbols-outlined text-on-surface-variant mr-3">search</span>
        <input 
          type="text" 
          placeholder="Search events, users, or IPs..." 
          className="w-full bg-transparent border-none focus:ring-0 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant p-0" 
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="flex items-center px-6 py-2 rounded-xl bg-transparent border-none text-primary hover:bg-surface-container-low transition-colors font-label-lg text-label-lg">
          <span className="material-symbols-outlined mr-2">filter_list</span> Filter
        </button>
        <button className="flex items-center px-6 py-2 rounded-xl bg-transparent border-none text-primary hover:bg-surface-container-low transition-colors font-label-lg text-label-lg">
          <span className="material-symbols-outlined mr-2">download</span> Export
        </button>
      </div>
    </div>
  );
}