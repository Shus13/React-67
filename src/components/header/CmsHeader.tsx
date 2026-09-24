export default function CmsHeader() {
  return (
    <>
      <header className="fixed left-64 right-0 top-0 z-50 h-16 border-b border-slate-200 bg-white">
        <div className="flex h-full items-center justify-between px-6">
          <h1 className="text-xl font-semibold text-slate-800">Dashboard</h1>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="rounded-lg p-2 text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-600"
            >
              🔔
            </button>

            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-indigo-100 font-medium text-indigo-600">
                SK
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-medium text-slate-800">
                  Sushit Karki
                </p>

                <p className="text-xs text-slate-500">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}