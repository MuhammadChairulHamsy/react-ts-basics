import { Link } from "react-router";
import { fetchUsers } from "../api/useFetchUser";
import type { UserResponse } from "../api/useFetchUser";
import { useQuery } from "@tanstack/react-query";

const UsersPage = () => {
  const {
    data: users = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<UserResponse[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="font-bold text-xl tracking-tight text-indigo-600">
            STORE.CO
          </h2>
          <div className="flex gap-8 text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-indigo-600 transition">
              Home
            </Link>
            <Link
              to="/about"
              className="text-indigo-600 border-b-2 border-indigo-600 transition"
            >
              About
            </Link>
            <Link to="/products" className="hover:text-indigo-600 transition">
              Products
            </Link>
            <Link to="/contact" className="hover:text-indigo-600 transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              User Directory
            </h1>
            <p className="text-slate-500 mt-1">
              Manage and view all registered users in the system.
            </p>
          </div>
          <button
            onClick={() => refetch()}
            className="bg-indigo-600 text-white font-bold px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition-all transform active:scale-95 shadow-md shadow-indigo-100 disabled:opacity-50 flex items-center gap-2"
          >
            Refresh Data
          </button>
        </div>

        {isError && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
            {(error as Error).message}
          </div>
        )}

        {/* Styled Table Container */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                  ID
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Name
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Email
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Company
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.length > 0 ? (
                users.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-slate-50/80 transition-colors group"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-slate-400">
                      #{user.id}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
                        {user.company?.name || "No Company"}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-10 text-center text-slate-400 italic"
                  >
                    No users found. Click fetch to load data.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
