export default function CitizenFilter() {
  return (
    <div className="bg-white rounded-xl border p-6">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Search citizen name or ID..."
          className="w-full md:w-96 border rounded-lg px-4 py-2"
        />

        <div className="flex flex-wrap gap-3">
          <select className="border rounded-lg px-3 py-2">
            <option>Region</option>
          </select>

          <select className="border rounded-lg px-3 py-2">
            <option>Verification Status</option>
          </select>

          <select className="border rounded-lg px-3 py-2">
            <option>AI Recommendation</option>
          </select>
        </div>
      </div>
    </div>
  );
}