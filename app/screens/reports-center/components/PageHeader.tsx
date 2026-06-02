import React from "react";

export default function PageHeader() {
  return (
    <div className="mb-8 flex items-start justify-between gap-6">

      {/* LEFT: TITLE */}
      <div className="flex flex-col gap-2">
        <h2
          className="text-3xl font-bold text-[#002b73]"
          style={{ fontFamily: "Public Sans, sans-serif" }}
        >
          Reports Center
        </h2>

        <p className="text-[15px] text-gray-600 max-w-2xl">
          Generate operational and government reporting documents
        </p>
      </div>

      {/* RIGHT: BADGES */}
      <div className="mt-5 flex items-center gap-3 flex-wrap justify-end">

        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold border border-gray-200">
          <span className="material-symbols-outlined text-[16px] text-[#0056D2]">
            auto_awesome
          </span>
          Automated Reporting
        </span>

        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold border border-gray-200">
          <span className="material-symbols-outlined text-[16px] text-[#0056D2]">
            monitoring
          </span>
          Real-time Analytics
        </span>

      </div>

    </div>
  );
}