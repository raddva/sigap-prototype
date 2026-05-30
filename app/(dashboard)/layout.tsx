import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <div className="flex-1 md:ml-64">
        <Topbar />

        <main className="p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}