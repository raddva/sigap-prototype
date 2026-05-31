import { priorityEvents } from '../data';

export default function PrioritySidebar() {
  const getPriorityStyles = (type: string) => {
    if (type === 'error') {
      return {
        borderClass: 'border-l-error',
        badgeClass: 'bg-error-container text-on-error-container',
        btnClass: 'text-primary'
      };
    }
    return {
      borderClass: 'border-l-tertiary',
      badgeClass: 'bg-tertiary-container text-on-tertiary-container',
      btnClass: 'text-tertiary'
    };
  };

  return (
    <aside className="flex flex-col gap-space-6">
      <div className="bg-surface-container-low p-space-6 rounded-xl flex flex-col gap-space-6">
        <h2 className="font-headline-md text-headline-md text-on-surface border-b border-outline-variant/20 pb-space-4">
          Priority Events
        </h2>
        
        {priorityEvents.map((item) => {
          const styles = getPriorityStyles(item.type);
          
          return (
            <div 
              key={item.id} 
              className={`bg-surface-container-lowest p-space-4 rounded-xl border-l-4 shadow-sm relative overflow-hidden ${styles.borderClass}`}
            >
              <div className="flex justify-between items-start mb-space-2">
                <span className={`font-label-sm text-label-sm px-2 py-0.5 rounded-sm ${styles.badgeClass}`}>
                  {item.tag}
                </span>
                <button className="text-on-surface-variant hover:text-on-surface">
                  <span className="material-symbols-outlined font-label-sm">more_vert</span>
                </button>
              </div>
              
              <h4 className="font-body-lg text-body-lg font-semibold text-on-surface mb-space-1">
                {item.title}
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-4">
                {item.desc}
              </p>
              
              <button className={`font-label-sm text-label-sm font-semibold hover:underline flex items-center gap-1 ${styles.btnClass}`}>
                {item.action} 
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          );
        })}
      </div>
    </aside>
  );
}