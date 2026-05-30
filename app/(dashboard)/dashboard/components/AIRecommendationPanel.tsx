export default function AIRecommendationPanel() {
  return (
    <div className="rounded-xl border bg-white shadow-sm">
      <div className="rounded-t-xl bg-primary p-6 text-white">
        <h3 className="text-xl font-bold">
          Focus Case
        </h3>

        <p>Siti Wahyuni</p>

        <p className="text-sm opacity-80">
          ID: 3301XXXXXXXX0002
        </p>
      </div>

      <div className="space-y-6 p-6">
        <div className="rounded-lg bg-yellow-50 p-4">
          <h4 className="font-semibold text-yellow-800">
            Anomaly Detected
          </h4>

          <p className="mt-2 text-sm text-gray-600">
            Economic status indicates a 45% improvement
            in utility usage over 3 months.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">
            Confidence Scores
          </h4>

          <div className="space-y-4">
            <div>
              <div className="mb-1 flex justify-between">
                <span>Identity Match</span>
                <span>99%</span>
              </div>

              <div className="h-2 rounded bg-gray-200">
                <div className="h-2 w-[99%] rounded bg-green-500" />
              </div>
            </div>

            <div>
              <div className="mb-1 flex justify-between">
                <span>Income Veracity</span>
                <span>42%</span>
              </div>

              <div className="h-2 rounded bg-gray-200">
                <div className="h-2 w-[42%] rounded bg-red-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full rounded-lg border py-3">
            Request Info
          </button>

          <button className="w-full rounded-lg border border-red-500 py-3 text-red-500">
            Reject
          </button>

          <button className="w-full rounded-lg bg-primary py-3 text-white">
            Approve with Override
          </button>
        </div>
      </div>
    </div>
  );
}