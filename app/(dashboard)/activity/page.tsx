import StatusCards from './components/StatusCards';
import FeedTabs from './components/FeedTabs';
import TimelineFeed from './components/TimelineFeed';
import PrioritySidebar from './components/PrioritySidebar';

export default function ActivityFeedPage() {
  return (
    <>
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-space-6 mb-space-12">
        <div>
          <div className="flex items-center gap-space-4 mb-space-2">
            <h1 className="font-headline-lg text-headline-lg text-on-surface">Activity Feed</h1>
            <div className="bg-secondary-container text-on-secondary-container px-space-2 py-1 rounded-full flex items-center gap-2 font-label-sm text-label-sm">
              <span className="w-2 h-2 rounded-full bg-secondary pulsing-dot"></span>
              Live
            </div>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Real-time monitoring of verification and AI system activities.</p>
        </div>
        
        <div className="flex items-center gap-space-4">
          <div className="flex items-center gap-space-2 bg-surface-container-low px-space-4 py-space-2 rounded-xl">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Auto-refresh</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-9 h-5 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <button className="flex items-center gap-space-2 text-primary font-label-lg text-label-lg hover:bg-surface-container-low px-space-4 py-space-2 rounded-xl transition-colors">
            <span className="material-symbols-outlined font-label-lg">filter_list</span>
            Filter
          </button>
        </div>
      </header>

      <StatusCards />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-space-10">
        <div className="xl:col-span-2 flex flex-col gap-space-6">
          <FeedTabs />
          <TimelineFeed />
        </div>
        <PrioritySidebar />
      </div>
    </>
  );
}