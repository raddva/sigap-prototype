export default function AnalyticsChart() {
  return (
    <div className="bg-white rounded-2xl p-6 border shadow-sm h-87.5">
      <h3 className="font-semibold mb-6">
        AI Detection Trends
      </h3>

      <div className="h-full flex items-end gap-3">
        {[40, 60, 55, 80, 95, 70].map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-blue-200 rounded-t"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}