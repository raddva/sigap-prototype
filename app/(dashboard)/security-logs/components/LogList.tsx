// app/screens/security-logs/components/LogList.tsx

import { auditLogsData } from '../data';

export default function LogList() {
  return (
    <div className="bg-surface-container-low rounded-xl p-space-6 flex flex-col gap-space-6">
      
      {/* Log Entries Mapping */}
      {auditLogsData.map((log) => (
        <div 
          key={log.id} 
          className="bg-surface-container-lowest rounded-xl p-6 relative group hover:bg-surface-bright transition-colors border border-outline-variant/20"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <span 
                className={`material-symbols-outlined ${log.iconColorClass}`} 
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {log.icon}
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface">{log.title}</h3>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-2 md:mt-0">
              {log.timestamp}
            </span>
          </div>
          
          <p className="font-body-md text-body-md text-on-surface-variant mb-4">
            {log.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {log.tags.map((tag, index) => (
              <span 
                key={index} 
                className={`px-3 py-1 rounded-full font-label-sm text-label-sm ${tag.styleClass}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Load More Button */}
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-2 rounded-xl text-primary font-label-lg text-label-lg hover:bg-surface-container-low transition-colors">
          Load More Activity
        </button>
      </div>
      
    </div>
  );
}