import InsightsHeader from './components/InsightsHeader';
import DetectionSummary from './components/DetectionSummary';
import RecommendationFeed from './components/RecommendationFeed';
import ExplainabilityPanel from './components/ExplainabilityPanel';
import HumanOversightFooter from './components/HumanOversightFooter';

export default function AIInsightsPage() {
  return (
    <div className="flex flex-col gap-space-12">
      <InsightsHeader />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 flex flex-col gap-space-12">
          <DetectionSummary />
          <RecommendationFeed />
        </div>

        <div className="lg:col-span-4">
          <ExplainabilityPanel />
        </div>
      </div>

      <HumanOversightFooter />
    </div>
  );
}