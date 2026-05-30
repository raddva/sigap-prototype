// app/screens/security-logs/page.tsx

import PageHeader from './components/PageHeader';
import LogControls from './components/LogControls';
import LogList from './components/LogList';

export default function SecurityLogsPage() {
  return (
    <div className="px-4 py-6 md:px-space-8 md:py-space-12 max-w-7xl mx-auto w-full grow">
      <PageHeader />
      <LogControls />
      <LogList />
    </div>
  );
}