"use client";

import { useEffect, useState } from "react";
import { Bell, Settings, LogOut } from "lucide-react";
import Link from "next/link";

interface Admin {
  full_name: string;
  role: string;
  email: string;
}

export default function Topbar() {
  const [admin, setAdmin] = useState<Admin | null>(null);

  useEffect(() => {
    fetch("/api/me")
      .then((res) => res.json())
      .then((data) => setAdmin(data))
      .catch(console.error);
  }, []);

  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center bg-white px-6 lg:px-8">
      <div className="ml-auto flex items-center gap-5">

        <div className="hidden items-center gap-2 rounded-full bg-[#e6f4ea] px-3 py-1.5 text-xs font-semibold text-[#1b6d24] md:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#1b6d24]" />
          System Active
        </div>

        <Link
          href="/screens/settings"
          className="flex h-9 w-9 items-center justify-center rounded-lg transition hover:bg-gray-100"
        >
          <Settings
            size={18}
            className="text-gray-600 hover:text-[#0056D2]"
          />
        </Link>

        <button className="relative flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-100">
          <Bell size={18} className="text-gray-600" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full border border-white bg-red-500" />
        </button>

        <div className="ml-1 flex items-center gap-3 border-l border-gray-200 pl-5">

          <div className="h-9 w-9 overflow-hidden rounded-full bg-gray-200">
            <img
              src={`https://ui-avatars.com/api/?name=${
                admin?.full_name ?? "Admin"
              }&background=0056D2&color=fff`}
              alt="Profile"
              className="h-full w-full"
            />
          </div>

          <div className="hidden lg:block leading-tight">
            <p className="text-sm font-bold text-gray-900">
              {admin?.full_name ?? "Loading..."}
            </p>

            <p className="text-xs text-gray-500">
              {admin?.role ?? ""}
            </p>

            {/* <p className="text-[10px] text-gray-400">
              {admin?.email}
            </p> */}
          </div>

          <Link
            href="/auth/logout"
            className="rounded-lg p-2 hover:bg-red-50"
          >
            <LogOut
              size={18}
              className="text-red-500"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}