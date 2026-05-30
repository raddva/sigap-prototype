const citizens = [
  {
    name: "Budi Santoso",
    id: "320114567890002",
    region: "Jakarta Pusat",
    economicChange: "-15%",
    recommendation: "AI Recommended",
    status: "Under Review",
  },
  {
    name: "Siti Aminah",
    id: "35022111222333",
    region: "Surabaya",
    economicChange: "-5%",
    recommendation: "Needs Review",
    status: "Pending",
  },
];

export default function CitizenMonitoringTable() {
  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="text-left p-4">
              Citizen
            </th>

            <th className="text-left p-4">
              Region
            </th>

            <th className="text-left p-4">
              Economic Change
            </th>

            <th className="text-left p-4">
              Recommendation
            </th>

            <th className="text-left p-4">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {citizens.map((citizen) => (
            <tr
              key={citizen.id}
              className="border-t hover:bg-muted/50"
            >
              <td className="p-4">
                <div>
                  <p className="font-medium">
                    {citizen.name}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    ID: {citizen.id}
                  </p>
                </div>
              </td>

              <td className="p-4">
                {citizen.region}
              </td>

              <td className="p-4 text-red-500">
                {citizen.economicChange}
              </td>

              <td className="p-4">
                {citizen.recommendation}
              </td>

              <td className="p-4">
                {citizen.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="border-t p-4 flex justify-between">
        <span>Showing 1-10 of 245</span>

        <div className="flex gap-2">
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
      </div>
    </div>
  );
}