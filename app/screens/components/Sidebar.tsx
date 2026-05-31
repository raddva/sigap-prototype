"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
  },
  {
    name: "Citizen Monitoring",
    href: "/citizen-monitoring",
    icon: "supervised_user_circle",
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: "analytics",
  },
  {
    name: "AI Insights",
    href: "/ai-insights",
    icon: "psychology",
  },
  {
    name: "Activity Feed",
    href: "/activity",
    icon: "history",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 flex-col border-r bg-white p-6">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-primary">
          SIGAP Admin
        </h1>

        <p className="text-sm text-gray-500">
          Government Portal
        </p>
      </div>

      <button className="mb-8 rounded-xl bg-primary px-4 py-3 text-white">
        New Report
      </button>

      <nav className="flex flex-col gap-2">
        {menus.map((menu) => {
          const active = pathname === menu.href;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition
                ${
                  active
                    ? "bg-green-100 text-green-800"
                    : "hover:bg-gray-100"
                }
              `}
            >
              <span className="material-symbols-outlined">
                {menu.icon}
              </span>

              <span>{menu.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}