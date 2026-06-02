import React from "react";
import { citizenProfile } from "../data";
import { User } from "lucide-react";

export default function CitizenProfileHeader() {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">

      {/* AVATAR */}
      <div className="w-20 h-20 rounded-full bg-[#e8f0fe] flex items-center justify-center border border-blue-100">
        <User className="w-10 h-10 text-[#0056D2]" />
      </div>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col gap-4 w-full">

        {/* HEADER ROW */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">

          {/* NAME */}
          <div>
            <h1 className="text-2xl font-bold text-[#002b73] mb-1">
              {citizenProfile.name}
            </h1>

            <p className="text-sm text-gray-500 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">
                badge
              </span>
              NIK: {citizenProfile.nik}
            </p>
          </div>

          {/* STATUS CHIPS (FIXED) */}
          <div className="flex flex-wrap gap-2">

            {/* AI RECOMMENDED */}
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
              <span className="material-symbols-outlined text-[14px]">
                psychology
              </span>
              AI Recommended
            </span>

            {/* HIGH PRIORITY */}
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-100">
              High Priority
            </span>

            {/* UNDER REVIEW */}
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200">
              Under Review
            </span>

          </div>
        </div>

        {/* INFO ROW */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-500 border-t border-gray-100 pt-4">

          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">
              location_on
            </span>
            {citizenProfile.location}
          </div>

          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">
              family_home
            </span>
            {citizenProfile.familyMembers} Members
          </div>

          <div className="flex items-center gap-1.5 text-green-600 font-medium">
            <span className="material-symbols-outlined text-[16px]">
              verified
            </span>
            {citizenProfile.verificationStatus}
          </div>

          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">
              update
            </span>
            Last verification: {citizenProfile.lastVerification}
          </div>

        </div>
      </div>
    </section>
  );
}