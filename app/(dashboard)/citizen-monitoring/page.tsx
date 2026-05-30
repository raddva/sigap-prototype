import CitizenFilter from "./components/CitizenFilter";
import CitizenMonitoringTable from "./components/CitizenMonitoringTable";
import CitizenDetailPanel from "./components/CitizenDetailPanel";

export default function CitizenMonitoringPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold">
            Citizen Monitoring
          </h1>

          <p className="text-muted-foreground mt-2">
            Monitor AI-detected socioeconomic changes in
            real time
          </p>
        </div>

        <div className="flex gap-3">
          <button className="border rounded-xl px-4 py-2">
            Filter
          </button>

          <button className="border rounded-xl px-4 py-2">
            Export
          </button>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex-1 space-y-6">
          <CitizenFilter />
          <CitizenMonitoringTable />
        </div>

        <CitizenDetailPanel />
      </div>
    </div>
  );
}