import Topbar from "@/app/(dashboard)/components/Topbar";
import OverviewCard from "./components/OverviewCard";
import AnalyticsChart from "./components/AnalyticsChart";
import ApprovalChart from "./components/ApprovalChart";
import RegionalInsights from "./components/RegionalInsights";
import AIPerformance from "./components/AIPerformance";
import ReportPanel from "./components/ReportPanel";

export default function AnalyticsPage() {
  return (
    <>
      <Topbar />
      <div className="p-6 lg:p-10 space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Analytics & Reporting
            </h1>

            <p className="text-slate-500 mt-2">
              AI-powered monitoring and social assistance insights
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <select className="border rounded-xl px-4 py-2">
              <option>Last 30 Days</option>
            </select>

            <select className="border rounded-xl px-4 py-2">
              <option>All Regions</option>
            </select>

            <button className="px-5 py-2 bg-blue-700 text-white rounded-xl">
              Export Report
            </button>
          </div>
        </div>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <OverviewCard
            title="Total Citizens Verified"
            value="1,245,890"
            trend="+12%"
            icon="group"
          />

          <OverviewCard
            title="AI Detection Events"
            value="342K"
            trend="+8.4%"
            icon="psychology"
          />

          <OverviewCard
            title="Approval Rate"
            value="89.2%"
            trend="0%"
            icon="verified"
          />

          <OverviewCard
            title="Avg Eligibility Score"
            value="78/100"
            trend="+2.1%"
            icon="analytics"
          />
        </section>

        {/* Charts */}
        <section className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AnalyticsChart />
          </div>

          <ApprovalChart />
        </section>

        {/* Bottom */}
        <section className="grid lg:grid-cols-2 gap-6">
          <RegionalInsights />
          <AIPerformance />
        </section>

        <ReportPanel />
      </div>
    </>
  );
}