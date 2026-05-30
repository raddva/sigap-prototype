export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white">
      <div className="flex items-center justify-between p-4">
        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Search citizens..."
            className="w-full rounded-full border px-4 py-2"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />

            <span className="text-sm text-green-700">
              System Active
            </span>
          </div>

          <button>
            <span className="material-symbols-outlined">
              notifications
            </span>
          </button>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-200" />

            <div>
              <p className="font-medium">
                Officer A. Rahman
              </p>

              <p className="text-sm text-gray-500">
                Senior Analyst
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}