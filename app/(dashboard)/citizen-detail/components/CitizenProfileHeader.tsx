import { citizenProfile } from '../data';

export default function CitizenProfileHeader() {
  return (
    <section className="bg-surface-container-low rounded-xl p-space-8 flex flex-col md:flex-row gap-space-8 items-start">
      <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 bg-surface-container-highest">
        <img alt={citizenProfile.name} className="w-full h-full object-cover" src={citizenProfile.avatar} />
      </div>

      <div className="flex-1 flex flex-col gap-space-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-4">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-1">{citizenProfile.name}</h1>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">badge</span>
              NIK: {citizenProfile.nik}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">psychology</span>
              AI Recommended
            </span>
            <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">
              High Priority
            </span>
            <span className="bg-surface-container-high text-on-surface px-3 py-1 rounded-full font-label-sm text-label-sm">
              Under Review
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-space-6 text-on-surface-variant mt-2">
          <div className="flex items-center gap-2 font-label-lg text-label-lg">
            <span className="material-symbols-outlined">location_on</span>
            {citizenProfile.location}
          </div>
          <div className="flex items-center gap-2 font-label-lg text-label-lg">
            <span className="material-symbols-outlined">family_home</span>
            {citizenProfile.familyMembers} Members
          </div>
          <div className="flex items-center gap-2 font-label-lg text-label-lg text-secondary">
            <span className="material-symbols-outlined">verified</span>
            {citizenProfile.verificationStatus}
          </div>
          <div className="flex items-center gap-2 font-label-lg text-label-lg">
            <span className="material-symbols-outlined">update</span>
            Last verification: {citizenProfile.lastVerification}
          </div>
        </div>
      </div>
    </section>
  );
}