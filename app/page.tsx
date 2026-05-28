"use client";

import { useState } from "react";

const SCREENS = [
  { id: "s1", title: "Dashboard", icon: "dashboard" },
  { id: "s2", title: "Citizen Monitoring", icon: "supervised_user_circle" },
  { id: "s5", title: "Citizen Detail", icon: "person" },
  { id: "s3", title: "Analytics & Reporting", icon: "analytics" },
  { id: "s6", title: "AI Insights", icon: "psychology" },
  { id: "s4", title: "Activity Feed", icon: "history" },
  { id: "s7", title: "Verification Requests", icon: "fact_check" },
  { id: "s8", title: "Reports Center", icon: "description" },
  { id: "s9", title: "Appeals & Complaints", icon: "gavel" },
  { id: "s10", title: "Security & Audit Logs", icon: "security" },
  { id: "s11", title: "Settings", icon: "settings" },
];

export default function Index() {
  const [current, setCurrent] = useState("s1");
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">
      <aside
        className={`${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static z-50 top-0 left-0 h-screen w-64 bg-white border-r border-black/5 flex flex-col p-5 transition-transform`}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-linear-to-br from-[#002b73] to-[#0056D2] flex items-center justify-center text-white font-bold">
            {/* <Image src=""/> */}
            S
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#002b73]" style={{ fontFamily: "Public Sans, sans-serif" }}>
              SIGAP
            </h1>
            <p className="text-xs text-[#40484B]">Government Portal</p>
          </div>
        </div>
        
        <nav className="flex flex-col gap-1 flex-1 overflow-y-auto">
          {SCREENS.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                setCurrent(s.id);
                setNavOpen(false);
              }}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold text-left transition-colors ${
                current === s.id
                  ? "bg-[#a0f499] text-[#207128]"
                  : "text-[#40484B] hover:bg-[#e7e8e9]"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{s.icon}</span>
              <span>{s.title}</span>
            </button>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="md:hidden flex items-center justify-between bg-white px-4 py-3 border-b border-black/5 sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-[#002b73] text-white flex items-center justify-center text-sm font-bold">
              S
            </div>
            <span className="font-bold text-[#002b73]">SIGAP</span>
          </div>
          <button onClick={() => setNavOpen((v) => !v)} className="p-2 rounded-full hover:bg-black/5">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>

        <iframe
          key={current}
          title={SCREENS.find((s) => s.id === current)?.title}
          src={`/screens/${current}.tsx`}
          className="flex-1 w-full border-0 bg-white"
        />
      </div>
    </div>
  );
}