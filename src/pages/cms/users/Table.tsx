export default function TransactionTable() {
  const transactions = [
    {
      id: 1,
      title: "Grocery Shopping",
      category: "Food",
      amount: 2500,
      date: "Sep 17, 2026",
    },
    {
      id: 2,
      title: "Internet Bill",
      category: "Bills",
      amount: 1800,
      date: "Sep 16, 2026",
    },
    {
      id: 3,
      title: "Movie",
      category: "Entertainment",
      amount: 800,
      date: "Sep 15, 2026",
    },
    {
      id: 4,
      title: "Bus Fare",
      category: "Transport",
      amount: 500,
      date: "Sep 14, 2026",
    },
    {
      id: 5,
      title: "Coffee",
      category: "Food",
      amount: 450,
      date: "Sep 13, 2026",
    },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-4 font-semibold text-gray-700">
                Transaction
              </th>
              <th className="px-6 py-4 font-semibold text-gray-700">
                Category
              </th>
              <th className="px-6 py-4 font-semibold text-gray-700">
                Amount
              </th>
              <th className="px-6 py-4 font-semibold text-gray-700">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {transaction.title}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {transaction.category}
                </td>

                <td className="px-6 py-4 font-medium text-gray-900">
                  Rs. {transaction.amount}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {transaction.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
        {/* Previous */}
        <button
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700
          hover:bg-gray-100"
        >
          ← Previous
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1">
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white">
            1
          </button>

          <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
            2
          </button>

          <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
            3
          </button>

          <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
            4
          </button>

          <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
            5
          </button>
        </div>

        {/* Next */}
        <button
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700
          hover:bg-gray-100"
        >
          Next →
        </button>
      </div>
    </div>
  );
}