const users = [
  { id: 1, name: "Sushit Karki", email: "sushit@example.com", role: "Admin" },
  { id: 2, name: "Ram Sharma", email: "ram@example.com", role: "User" },
  { id: 3, name: "Hari Thapa", email: "hari@example.com", role: "User" },
  { id: 4, name: "John Doe", email: "john@example.com", role: "User" },
];
export default function CmsUsersList() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              <th className="border-r border-slate-200 border-b px-6 py-4 text-sm font-semibold text-slate-600">
                ID
              </th>
              <th className="border-r border-slate-200 border-b px-6 py-4 text-sm font-semibold text-slate-600">
                Name
              </th>
              <th className="border-r border-slate-200 border-b px-6 py-4 text-sm font-semibold text-slate-600">
                Email
              </th>
              <th className="border-r border-slate-200 border-b px-6 py-4 text-sm font-semibold text-slate-600">
                Role
              </th>
              <th className="border-b border-slate-200 px-6 py-4 text-sm font-semibold text-slate-600">
                Action
              </th>
            </tr>
          </thead>
          
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-slate-100 transition hover:bg-indigo-50/40"
              >
                <td className="border-r border-slate-100 px-6 py-4 text-sm text-slate-600">
                  {user.id}
                </td>
                <td className="border-r border-slate-100 px-6 py-4 text-sm font-medium text-slate-800">
                  {user.name}
                </td>
                <td className="border-r border-slate-100 px-6 py-4 text-sm text-slate-600">
                  {user.email}
                </td>
                <td className="border-r border-slate-100 px-6 py-4">
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="text-sm font-medium text-indigo-600 transition hover:text-indigo-800"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4">
        {/* Previous */}
        <button
          type="button"
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
        >
          Previous
        </button>
        {/* Page Numbers */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-medium text-white"
          >
            1
          </button>
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-lg text-sm font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600"
          >
            2
          </button>
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-lg text-sm font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600"
          >
            3
          </button>
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-lg text-sm font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600"
          >
            4
          </button>
        </div>
        {/* Next */}
        <button
          type="button"
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
