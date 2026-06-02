// app/screens/citizen-monitoring/components/CitizenDetailPanel.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  citizen: any | null;
};

export default function CitizenDetailPanel({ citizen }: Props) {
  const router = useRouter();

  if (!citizen) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full sticky top-8 items-center justify-center p-10 text-center">
        <span className="material-symbols-outlined text-gray-300 text-5xl mb-3">
          person_search
        </span>
        <p className="text-gray-500 text-sm">
          Select a citizen to view details
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full sticky top-8">

      {/* HEADER */}
      <div className="p-6 border-b border-gray-100 flex justify-between items-start">
        <div className="flex items-center gap-3">
          {citizen.img ? (
            <img
              src={citizen.img}
              alt={citizen.name}
              className="w-12 h-12 rounded-full border border-gray-200 object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
              {citizen.initials}
            </div>
          )}

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {citizen.name}
            </h2>
            <div className="flex items-center text-sm text-gray-500 gap-1">
              <span className="material-symbols-outlined text-[16px]">
                badge
              </span>
              {citizen.id}
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="p-6 flex-1 overflow-y-auto flex flex-col gap-6">

        {/* AI SUMMARY */}
        <div className="bg-[#f0f4f8] rounded-xl p-5 border border-blue-100">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2 text-[#002b73] font-bold text-sm">
              <span className="material-symbols-outlined">
                psychology
              </span>
              AI Summary
            </div>

            <div className="bg-[#002b73] text-white px-3 py-1 rounded-full text-xs font-semibold text-center leading-tight">
              {citizen.confidence ?? 87}
              <br />
              <span className="text-[10px] font-normal">Confidence</span>
            </div>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            {citizen.summary ??
              "Citizen shows significant socioeconomic changes based on AI monitoring signals."}
          </p>

          {/* SCORES */}
          <div className="space-y-4">

            {/* ECONOMIC SCORE */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                <span>Economic Change Score</span>
                <span className="text-[#ba1a1a]">
                  {citizen.econScore ?? 0}%
                </span>
              </div>

              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-[#ba1a1a] rounded-full"
                  style={{
                    width: `${Math.min(
                      Math.abs(citizen.econScore ?? 0),
                      100
                    )}%`,
                  }}
                />
              </div>
            </div>

            {/* ELIGIBILITY SCORE */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                <span>Eligibility Score</span>
                <span className="text-[#002b73]">
                  {citizen.eligibilityScore ?? 0}/100
                </span>
              </div>

              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-[#002b73] rounded-full"
                  style={{
                    width: `${citizen.eligibilityScore ?? 0}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* EVIDENCE */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-3">
            Uploaded Evidence
          </h3>

          <div className="grid grid-cols-2 gap-3">

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center gap-2 text-gray-500 hover:bg-gray-100 cursor-pointer">
              <span className="material-symbols-outlined text-3xl">
                description
              </span>
              <span className="text-xs font-medium text-gray-700">
                Medical Bill.pdf
              </span>
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden relative group cursor-pointer">
              <img
                src={citizen?.evidence?.[0]?.url || "/placeholder.jpg"}
                className="w-full h-24 object-cover"
                alt="Evidence"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white">
                  visibility
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-full bg-white/90 py-1 text-center text-xs font-medium text-gray-700">
                Evidence.jpg
              </div>
            </div>
          </div>
        </div>

        {/* TIMELINE (FIXED ALIGN RIGHT + CLEAN LINE) */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-4">
            Verification Timeline
          </h3>

          <div className="relative ml-2 space-y-4 before:absolute before:left-3 before:top-0 before:h-full before:w-[2px] before:bg-gray-200">

            {(citizen.timeline ?? [
              { title: "Data Submitted", status: "done", time: "Today" },
              { title: "AI Analysis", status: "current", time: "Now" },
              { title: "Final Review", status: "pending", time: null },
            ]).map((item: any, index: number) => (
              <div
                key={index}
                className="relative flex items-start gap-4 pl-8"
              >

                {/* DOT */}
                <div
                  className={`absolute left-[7px] top-1.5 w-3 h-3 rounded-full border-2 border-white z-10 ${
                    item.status === "current"
                      ? "bg-[#b06000] ring-2 ring-[#fef7e0]"
                      : item.status === "done"
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                />

                <div className="flex flex-col">
                  <span
                    className={`text-sm ${
                      item.status === "current"
                        ? "font-bold text-gray-900"
                        : "font-medium text-gray-600"
                    }`}
                  >
                    {item.title}
                  </span>

                  {item.time && (
                    <span className="text-xs text-gray-400">
                      {item.time}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="p-5 border-t border-gray-100 flex flex-col gap-2">

        <div className="flex gap-3">
          <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold text-sm rounded-lg hover:bg-gray-50 transition-colors">
            Reject
          </button>

          <button className="flex-1 px-4 py-2 bg-transparent text-[#002b73] font-bold text-sm rounded-lg hover:bg-blue-50 transition-colors">
            Manual Review
          </button>
        </div>

        {/* VIEW DETAIL BUTTON */}
        <button
          onClick={() => router.push(`/screens/citizen-detail`)}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#002b73] text-white font-semibold text-sm rounded-lg hover:bg-[#001f52] transition"
        >
          View Full Profile
        </button>
      </div>
    </div>
  );
}