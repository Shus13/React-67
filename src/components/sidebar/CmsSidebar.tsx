export default function Sidebar() {
  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-950 text-white">
        <div className="flex h-16 items-center gap-3 border-b border-slate-800 px-6">
          <img src="/logo.png" alt="Logo" className="size-10" />

          <h1 className="text-xl font-bold">MyApp</h1>
        </div>

        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            <li>
              <a
                href="/cms"
                className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-indigo-600 hover:text-white"
              >
                Dashboard
              </a>
            </li>

            <li>
              <a
                href="/cms/users"
                className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-indigo-600 hover:text-white"
              >
                Users List
              </a>
            </li>

            <li>
              <a
                href="/cms/users/create"
                className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-indigo-600 hover:text-white"
              >
                Create User
              </a>
            </li>

            <li>
              <a
                href="/cms/user/:edit"
                className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-indigo-600 hover:text-white"
              >
                Edit User
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}