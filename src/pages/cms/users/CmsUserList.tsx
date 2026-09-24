export default function CmsUsersList() {
  return (
    <section className="w-full flex flex-col gap-5">

      <div className="flex w-full justify-between border-b-2 border-b-teal-900/30 pb-5">
        <h1 className="text-5xl font-semibold text-shadow-lg">
          User Listing
        </h1>

        <div className="flex gap-3 items-center">
          <form action="" className="w-xl">
            <input
              type="search"
              className="w-full bg-white border border-gray-200 rounded-full p-2 px-5 shadow-lg"
              placeholder="Enter username or email for search"
            />
          </form>
          <a
            href="/cms/user/create"
            className="bg-teal-800 w-50 p-2 flex items-center justify-center text-white rounded-full"
          >
            Add User
          </a>
        </div>
      </div>

      <div className="w-full flex flex-col gap-3">
        <table className="w-full border border-gray-300">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-2 border-r border-gray-300 ">Name</th>
              <th className="p-2 border-r border-gray-300 ">Email</th>
              <th className="p-2 border-r border-gray-300 ">Role</th>
              <th className="p-2 border-r border-gray-300 ">Address</th>
              <th className="p-2 border-r border-gray-300 ">Phone</th>
              <th className="p-2 border-r border-gray-300 ">Status</th>
              <th className="p-2 border-r border-gray-300 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
            </tr>

            <tr>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
            </tr>

            <tr>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
            </tr>

            <tr>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
            </tr>

            <tr>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
            </tr>

            <tr>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
            </tr>

            <tr>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
            </tr>

            <tr>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
            </tr>

            <tr>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
              <td className="p-3 border-r border-gray-300">
                <p className="w-full bg-gray-300 animate-pulse rounded-full h-2"></p>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="w-full flex justify-end">
          <ul className="flex gap-3">
            <li className="size-8 bg-gray-200 flex items-center justify-center rounded-full shadow-lg text-sm font-bold text-gray-700 hover:cursor-pointer"><a href="/cmsmuser?page=1">&lt;</a></li>
            <li className="size-8 bg-teal-900 flex items-center justify-center rounded-full shadow-lg text-sm font-bold text-white hover:cursor-pointer"><a href="/cmsmuser?page=1">1</a></li>
            <li className="size-8 bg-gray-200 flex items-center justify-center rounded-full shadow-lg text-sm font-bold text-gray-700 hover:cursor-pointer"><a href="/cmsmuser?page=1">2</a></li>
            <li className="size-8 bg-gray-200 flex items-center justify-center rounded-full shadow-lg text-sm font-bold text-gray-700 hover:cursor-pointer"><a href="/cmsmuser?page=1">3</a></li>
            <li className="size-8 bg-gray-200 flex items-center justify-center rounded-full shadow-lg text-sm font-bold text-gray-700 hover:cursor-pointer"><a href="/cmsmuser?page=1">4</a></li>
            <li className="size-8 bg-gray-200 flex items-center justify-center rounded-full shadow-lg text-sm font-bold text-gray-700 hover:cursor-pointer"><a href="/cmsmuser?page=1">5</a></li>
            <li className="size-8 bg-gray-200 flex items-center justify-center rounded-full shadow-lg text-sm font-bold text-gray-700 hover:cursor-pointer"><a href="/cmsmuser?page=1">&gt;</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
