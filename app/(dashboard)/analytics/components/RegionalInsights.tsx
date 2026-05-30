export default function RegionalInsights() {
  return (
    <div className="bg-white rounded-2xl p-6 border shadow-sm">
      <h3 className="font-semibold mb-2">
        Regional Assistance
      </h3>

      <p className="text-sm text-slate-500 mb-6">
        Heatmap distribution across Indonesia
      </p>

      <div className="h-52 bg-slate-100 rounded-xl flex items-center justify-center">
        <span className="material-symbols-outlined text-5xl text-slate-400">
          map
        </span>
      </div>
    </div>
  );
}