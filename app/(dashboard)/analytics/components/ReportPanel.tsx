export default function ReportPanel() {
  return (
    <div className="bg-white rounded-2xl border p-6 shadow-sm flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div>
        <h3 className="font-semibold">
          Automated Analysis Ready
        </h3>

        <p className="text-sm text-slate-500 mt-1">
          Generate comprehensive PDF reports for stakeholders.
        </p>
      </div>

      <div className="flex gap-3 flex-wrap">
        <button className="px-4 py-2 border rounded-xl">
          Monthly Summaries
        </button>

        <button className="px-4 py-2 border rounded-xl">
          Officer Activity
        </button>

        <button className="px-5 py-2 bg-blue-700 text-white rounded-xl">
          Generate PDF Report
        </button>
      </div>
    </div>
  );
}