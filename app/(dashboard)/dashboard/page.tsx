import AIRecommendationPanel from "./components/AIRecommendationPanel";
import CitizenTable from "./components/CitizenTable";
import StatsCard from "./components/StatsCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Overview
        </h1>

        <p className="text-gray-500">
          Real-time monitoring and AI insights
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Citizens Verified"
          value="124,592"
          subtitle="+12% this month"
          icon="verified_user"
        />

        <StatsCard
          title="AI Detection Triggered"
          value="3,421"
          subtitle="Requires review"
          icon="psychology_alt"
        />

        <StatsCard
          title="Pending Verification"
          value="8,904"
          subtitle="2 days avg"
          icon="pending_actions"
        />

        <StatsCard
          title="Approval Rate"
          value="86.4%"
          subtitle="+2.1%"
          icon="fact_check"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <CitizenTable />
        </div>

        <AIRecommendationPanel />
      </div>
    </div>
  );
}