const citizens = [
  {
    name: "Budi Santoso",
    region: "West Java",
    eligibility: 85,
    status: "AI Recommended",
  },
  {
    name: "Siti Wahyuni",
    region: "Central Java",
    eligibility: 60,
    status: "Review",
  },
  {
    name: "Agus Setiawan",
    region: "East Java",
    eligibility: 92,
    status: "Pending",
  },
];

export default function CitizenTable() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">
        Citizen Verification Queue
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th className="pb-3">Citizen</th>
            <th className="pb-3">Eligibility</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {citizens.map((citizen) => (
            <tr
              key={citizen.name}
              className="border-b"
            >
              <td className="py-4">
                <div>
                  <p>{citizen.name}</p>

                  <p className="text-sm text-gray-500">
                    {citizen.region}
                  </p>
                </div>
              </td>

              <td>{citizen.eligibility}</td>

              <td>
                <span className="rounded-md bg-green-100 px-3 py-1 text-sm">
                  {citizen.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}