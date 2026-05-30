import CitizenProfileHeader from './components/CitizenProfileHeader';
import EconomicChangeSummary from './components/EconomicChangeSummary';
import AIRecommendations from './components/AIRecommendations';
import UploadedEvidence from './components/UploadedEvidence';
import VerificationHistory from './components/VerificationHistory';
import OfficerReviewPanel from './components/OfficerReviewPanel';

export default function CitizenDetailPage() {
  return (
    <div className="flex-1 p-space-8 lg:p-space-10 grid grid-cols-1 xl:grid-cols-12 gap-space-8 items-start">
      <div className="xl:col-span-8 flex flex-col gap-space-12">
        <CitizenProfileHeader />
        <EconomicChangeSummary />
        <AIRecommendations />
        <UploadedEvidence />
        <VerificationHistory />
      </div>

      <div className="xl:col-span-4 sticky top-25">
        <OfficerReviewPanel />
      </div>
    </div>
  );
}