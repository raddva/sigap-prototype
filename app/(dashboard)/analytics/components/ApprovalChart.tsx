export default function ApprovalChart() {
  return (
    <div className="bg-white rounded-2xl p-6 border shadow-sm">
      <h3 className="font-semibold mb-6">
        Approval vs Rejection
      </h3>

      <div className="flex flex-col items-center">
        <div className="w-36 h-36 rounded-full border-16 border-green-500 relative">
          <div className="absolute inset-0 rounded-full border-16 border-transparent border-r-red-500" />
        </div>

        <div className="w-full mt-6 space-y-2">
          <div className="flex justify-between">
            <span>Approved</span>
            <span>89.2%</span>
          </div>

          <div className="flex justify-between">
            <span>Rejected</span>
            <span>10.8%</span>
          </div>
        </div>
      </div>
    </div>
  );
}