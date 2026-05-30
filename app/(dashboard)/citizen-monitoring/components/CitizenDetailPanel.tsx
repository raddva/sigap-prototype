export default function CitizenDetailPanel() {
  return (
    <aside className="w-full xl:w-96 bg-white border rounded-xl flex flex-col">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold">
          Budi Santoso
        </h2>

        <p className="text-muted-foreground">
          320114567890002
        </p>
      </div>

      <div className="flex-1 p-6 space-y-8">
        {/* AI Summary */}

        <div className="bg-slate-50 rounded-xl p-4">
          <h3 className="font-semibold mb-3">
            AI Explanation Summary
          </h3>

          <p className="text-sm text-muted-foreground">
            System detected a significant drop in
            primary income indicators combined with
            recent medical expense anomalies.
          </p>

          <div className="mt-4 space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Economic Change</span>
                <span>-15%</span>
              </div>

              <div className="h-2 bg-gray-200 rounded">
                <div className="h-2 bg-red-500 rounded w-[15%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>Eligibility Score</span>
                <span>88/100</span>
              </div>

              <div className="h-2 bg-gray-200 rounded">
                <div className="h-2 bg-blue-600 rounded w-[88%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Evidence */}

        <div>
          <h3 className="font-semibold mb-3">
            Uploaded Evidence
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <div className="border rounded-lg p-4 text-center">
              MedicalBill.pdf
            </div>

            <div className="border rounded-lg p-4 text-center">
              Notice.jpg
            </div>
          </div>
        </div>

        {/* Timeline */}

        <div>
          <h3 className="font-semibold mb-4">
            Verification Timeline
          </h3>

          <div className="space-y-4">
            <div>
              <p className="font-medium">
                Officer Review Pending
              </p>

              <p className="text-sm text-muted-foreground">
                Current State
              </p>
            </div>

            <div>
              <p className="font-medium">
                Citizen Uploaded Evidence
              </p>

              <p className="text-sm text-muted-foreground">
                Today 09:15
              </p>
            </div>

            <div>
              <p className="font-medium">
                WhatsApp Verification Sent
              </p>

              <p className="text-sm text-muted-foreground">
                Yesterday 14:30
              </p>
            </div>

            <div>
              <p className="font-medium">
                AI Detection Triggered
              </p>

              <p className="text-sm text-muted-foreground">
                Yesterday 10:05
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t p-6 space-y-3">
        <button className="w-full bg-primary text-white py-3 rounded-xl">
          Approve Assistance
        </button>

        <div className="grid grid-cols-2 gap-3">
          <button className="border rounded-xl py-3">
            Reject
          </button>

          <button className="border rounded-xl py-3">
            Manual Review
          </button>
        </div>
      </div>
    </aside>
  );
}