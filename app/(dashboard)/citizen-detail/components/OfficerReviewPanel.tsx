'use client';

export default function OfficerReviewPanel() {
  return (
    <aside className="bg-surface-container-lowest rounded-xl p-space-6 shadow-[0_12px_32px_-4px_rgba(25,28,29,0.06)] border border-outline-variant/20 flex flex-col gap-space-6">
      <div className="border-b border-surface-container-highest pb-space-4">
        <h3 className="font-headline-md text-headline-md text-on-surface">Final Validation</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">Review the case details and make a decision.</p>
      </div>
      
      <div className="flex flex-col gap-space-4">
        <h4 className="font-label-lg text-label-lg text-on-surface">Verification Checklist</h4>
        {['Identity Verified', 'Income Verified', 'Dependency Confirmed'].map((item, idx) => (
          <label key={idx} className="flex items-center gap-3 cursor-pointer group">
            <input 
              className="form-checkbox text-primary rounded border-outline-variant focus:ring-primary focus:ring-offset-0 bg-surface-container-lowest w-5 h-5 transition-colors" 
              type="checkbox"
            />
            <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">{item}</span>
          </label>
        ))}
      </div>
      
      <div className="flex flex-col gap-2 mt-2">
        <label className="font-label-lg text-label-lg text-on-surface" htmlFor="officer-notes">Officer Notes</label>
        <textarea 
          id="officer-notes" 
          className="w-full bg-surface-container-lowest border-outline-variant/50 rounded-lg p-3 font-body-md text-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none placeholder:text-on-surface-variant/50" 
          placeholder="Add contextual notes for the decision..." 
          rows={4}
        ></textarea>
      </div>
      
      <div className="flex flex-col gap-space-4 mt-space-4">
        <button className="w-full bg-linear-to-r from-primary to-primary-container text-white py-3 px-6 rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
          <span className="material-symbols-outlined text-[20px]">thumb_up</span>
          Approve Assistance
        </button>
        <button className="w-full bg-transparent border border-outline text-on-surface py-3 px-6 rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined text-[20px]">thumb_down</span>
          Reject Assistance
        </button>
        
        <div className="flex gap-space-4">
          <button className="flex-1 bg-surface-container-low text-on-surface-variant py-2 px-4 rounded-lg font-label-lg text-label-lg hover:bg-surface-variant transition-colors text-center text-sm">
            Request Review
          </button>
          <button className="flex-1 bg-surface-container-low text-on-surface-variant py-2 px-4 rounded-lg font-label-lg text-label-lg hover:bg-surface-variant transition-colors text-center text-sm">
            Escalate
          </button>
        </div>
      </div>
      
      <div className="bg-surface-container-low p-4 rounded-lg flex items-start gap-3 mt-2">
        <span className="material-symbols-outlined text-on-surface-variant text-[20px] mt-0.5">info</span>
        <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
          AI assists decisions, officer performs final validation. Your decision is recorded immutably.
        </p>
      </div>
    </aside>
  );
}