import { Link } from "react-router";
import { useState } from "react";
import { useCreateEmploye } from "../api/useCreateEmploye";
import { useFetchEmployes } from "../api/useFetchEmploye";
import { useDeleteEmploye } from "../api/useDeleteEmploye";

const EmployesPage = () => {
  const { fetchEmployes, employes, loading, employesError } =
    useFetchEmployes();
  const { createEmploye, createEmployeIsLoading, createEmployeError } =
    useCreateEmploye();
  const { deleteEmploye, deleteEmployeIsLoading, deleteEmployeError } =
    useDeleteEmploye();
  const [inputText, setInputText] = useState("");

  const handleCreateEmploye = async () => {
    await createEmploye(inputText);
    await fetchEmployes();
    setInputText("");
  };
  const handleDeleteEmploye = async (employeId: string) => {
    await deleteEmploye(employeId);
    await fetchEmployes();
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-10">
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

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Employees Management
            </h1>
            <p className="text-slate-500 text-sm">
              Add, remove, or manage your team members.
            </p>
          </div>
          <button
            disabled={loading}
            onClick={fetchEmployes}
            className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-all shadow-sm active:scale-95"
          >
            Refresh List
          </button>
        </div>

        {/* Main Table Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 w-20">
                  Id
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">
                  Name
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {employes.map((data) => (
                <tr
                  key={data.id}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  <td className="px-6 py-4 text-sm text-slate-400 font-mono">
                    #{data.id}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">
                    {data.name}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDeleteEmploye(data.id)}
                      disabled={deleteEmployeIsLoading}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg text-xs font-bold transition-all disabled:opacity-50"
                    >
                      {deleteEmployeIsLoading ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

            {/* Input Section using TFOOT as a "New Entry" row */}
            <tfoot className="bg-slate-50/30 border-t-2 border-slate-100">
              <tr>
                <td colSpan={2} className="px-6 py-4">
                  <input
                    onChange={(e) => setInputText(e.target.value)}
                    type="text"
                    value={inputText}
                    placeholder="Enter new employee name..."
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={handleCreateEmploye}
                    disabled={createEmployeIsLoading || !inputText}
                    className="bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-indigo-700 transition-all disabled:bg-slate-300 shadow-md shadow-indigo-100"
                  >
                    {createEmployeIsLoading ? "Adding..." : "Add Employee"}
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Error Messages */}
        <div className="mt-4 space-y-2">
          {deleteEmployeError && (
            <p className="text-red-500 text-xs bg-red-50 p-2 rounded-lg border border-red-100">
              ⚠️ {deleteEmployeError}
            </p>
          )}
          {createEmployeError && (
            <p className="text-red-500 text-xs bg-red-50 p-2 rounded-lg border border-red-100">
              ⚠️ {createEmployeError}
            </p>
          )}
          {employesError && (
            <p className="text-red-500 text-xs bg-red-50 p-2 rounded-lg border border-red-100">
              ⚠️ {employesError}
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default EmployesPage;
