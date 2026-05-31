import PageHeader from './components/PageHeader';
import StatsCards from './components/StatsCards';
import AutomationControls from './components/AutomationControls';
import VerificationTable from './components/VerificationTable';
import WhatsAppPreview from './components/WhatsAppPreview';

export default function VerificationRequestsPage() {
  return (
    <div className="flex-1 p-space-8 flex flex-col gap-space-12 max-w-400 mx-auto w-full">
      <PageHeader />
      <StatsCards />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-8 items-start">
        {/* Left Column: Controls & Table (8 cols) */}
        <div className="xl:col-span-8 flex flex-col gap-space-8">
          <AutomationControls />
          <VerificationTable />
        </div>

        {/* Right Column: WhatsApp Preview (4 cols) */}
        <div className="xl:col-span-4 flex justify-center">
          <WhatsAppPreview />
        </div>
      </div>
    </div>
  );
}