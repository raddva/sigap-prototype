export default function AIPerformance() {
  return (
    <div className="bg-white rounded-2xl p-6 border shadow-sm">
      <h3 className="font-semibold mb-6">
        AI Performance Metrics
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <Metric
          title="Recommendation Accuracy"
          value="96.4%"
        />

        <Metric
          title="False Positive Rate"
          value="1.8%"
        />

        <Metric
          title="Verification Success"
          value="99.1%"
        />

        <Metric
          title="Model Confidence Avg"
          value="0.92"
        />
      </div>
    </div>
  );
}

function Metric({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border rounded-xl p-4">
      <p className="text-sm text-slate-500">{title}</p>

      <h4 className="text-2xl font-bold mt-2">
        {value}
      </h4>
    </div>
  );
}