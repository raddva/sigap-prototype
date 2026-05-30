import { uploadedEvidence } from '../data';

export default function UploadedEvidence() {
  return (
    <section>
      <h2 className="font-headline-md text-headline-md text-on-surface mb-space-6">Uploaded Evidence</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-6">
        {uploadedEvidence.map((evidence) => (
          <div key={evidence.id} className="bg-surface-container-lowest rounded-xl overflow-hidden group">
            <div className="h-40 bg-surface-variant relative">
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 bg-surface-container-lowest text-primary px-4 py-2 rounded-lg font-label-lg text-label-lg flex items-center gap-2 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-sm">
                  <span className="material-symbols-outlined">download</span> Download
                </button>
              </div>
              <img alt={evidence.title} className="w-full h-full object-cover" src={evidence.image} />
            </div>
            <div className="p-space-4 flex justify-between items-center">
              <div>
                <div className="font-label-lg text-label-lg text-on-surface">{evidence.title}</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">{evidence.time}</div>
              </div>
              <span className="material-symbols-outlined text-secondary">check_circle</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}