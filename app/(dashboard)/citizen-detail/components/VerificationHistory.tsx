import { verificationHistory } from '../data';

export default function VerificationHistory() {
  return (
    <section>
      <h2 className="font-headline-md text-headline-md text-on-surface mb-space-6">Verification History</h2>
      <div className="pl-space-4 border-l-2 border-surface-container-highest space-y-space-6">
        {verificationHistory.map((history) => (
          <div key={history.id} className="relative">
            <span className={`absolute left-[-1.35rem] top-1 w-3 h-3 rounded-full ring-4 ring-background ${history.status === 'pending' ? 'bg-primary' : 'bg-secondary'}`}></span>
            <div className="flex items-center justify-between mb-1">
              <span className="font-label-lg text-label-lg text-on-surface">{history.title}</span>
              {history.status === 'pending' ? (
                <span className="bg-surface-container-high text-on-surface px-2 py-0.5 rounded text-xs font-medium">{history.time}</span>
              ) : (
                <span className="text-xs text-on-surface-variant">{history.time}</span>
              )}
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">{history.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}