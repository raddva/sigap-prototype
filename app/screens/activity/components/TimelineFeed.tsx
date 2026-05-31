import { feedEvents } from '../data';

export default function TimelineFeed() {
  const getIconBgClass = (type: string) => {
    switch (type) {
      case 'error': return 'bg-error-container text-on-error-container';
      case 'success': return 'bg-secondary-container text-on-secondary-container';
      case 'primary': return 'bg-primary-container/20 text-primary';
      default: return 'bg-surface-container-high text-on-surface-variant';
    }
  };

  return (
    <div className="bg-surface-container-low p-space-6 rounded-xl flex flex-col gap-space-6 mt-space-4">
      {feedEvents.map((event, index) => (
        <div key={event.id} className="flex gap-space-4 group">
          <div className="flex flex-col items-center">
            {/* Lingkaran Icon */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm relative z-10 ${getIconBgClass(event.type)}`}>
              <span 
                className="material-symbols-outlined font-label-lg" 
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {event.icon}
              </span>
            </div>
            {/* Garis Vertikal Penghubung Timeline */}
            <div className={`w-px h-full bg-outline-variant/50 my-2 ${index === feedEvents.length - 1 ? 'hidden' : ''}`}></div>
          </div>

          {/* Kotak Konten */}
          <div className="bg-surface-container-lowest p-space-4 rounded-xl flex-1 border border-transparent group-hover:border-outline-variant/20 transition-colors shadow-sm">
            <div className="flex justify-between items-start mb-space-1">
              <h3 className="font-headline-md text-body-lg font-semibold text-on-surface">
                {event.title}
              </h3>
              <span className="font-label-sm text-label-sm text-on-surface-variant whitespace-nowrap ml-2">
                {event.time}
              </span>
            </div>

            {event.citizen && (
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-2">
                Citizen: <span className="text-on-surface font-medium">{event.citizen}</span>
              </p>
            )}

            {event.officer && (
              <p className="font-body-md text-body-md text-on-surface-variant">
                Officer: <span className="text-on-surface font-medium">{event.officer}</span> approved Case <a className="text-primary hover:underline" href="#">{event.caseNo}</a>.
              </p>
            )}

            {event.count && (
              <p className="font-body-md text-body-md text-on-surface-variant">
                Verification link delivered to <span className="text-on-surface font-medium">{event.count}</span> citizens.
              </p>
            )}

            {/* Detail Tambahan (Badge Error / Dokumen) */}
            {event.detail && (
              <div className={`p-space-2 rounded-lg inline-block ${event.type === 'error' ? 'bg-error-200/20 border border-error/10' : 'bg-surface-container'}`}>
                <span className={`font-label-sm text-label-sm flex items-center gap-1 ${event.type === 'error' ? 'text-error' : 'text-on-surface-variant'}`}>
                  <span className="material-symbols-outlined text-[14px]">{event.detailIcon}</span>
                  {event.detail}
                </span>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Tombol Load More */}
      <div className="flex justify-center pt-space-4">
        <button className="text-primary font-label-lg text-label-lg hover:bg-surface-container px-space-6 py-space-2 rounded-xl transition-colors">
          Load Older Events
        </button>
      </div>
    </div>
  );
}