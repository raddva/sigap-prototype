// app/screens/reports-center/components/DownloadCenter.tsx

import { recentDownloadsData } from '../data';

export default function DownloadCenter() {
  return (
    <aside className="bg-surface-container-low rounded-xl p-space-6 flex flex-col gap-4">
      <h3 className="font-headline-md text-headline-md text-on-surface mb-2 border-b border-outline-variant/30 pb-4">
        Download Center
      </h3>
      <div className="flex flex-col gap-space-4">
        {recentDownloadsData.map((item) => (
          <div 
            key={item.id} 
            className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/20 hover:border-primary/30 transition-colors cursor-pointer"
          >
            <div className={`w-10 h-10 rounded flex items-center justify-center ${item.colorClass}`}>
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-label-lg text-label-lg text-on-surface truncate">{item.fileName}</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">{item.details}</p>
            </div>
            <button className="text-primary hover:text-primary-container p-1">
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}