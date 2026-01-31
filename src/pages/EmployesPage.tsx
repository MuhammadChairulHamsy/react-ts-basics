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
  const {deleteEmploye, deleteEmployeIsLoading, deleteEmployeError} = useDeleteEmploye();
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
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"></div>
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

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Employes Page
          </h1>
        </div>
        <table className="border border-slate-950">
          <thead className="border border-slate-950">
            <tr>
              <th className="border border-slate-950">Id</th>
              <th className="border border-slate-950">Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employes.map((data) => {
              return (
                <tr key={data.id}>
                  <td className="border border-slate-950">{data.id}</td>
                  <td className="border border-slate-950">{data.name}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteEmploye(data.id)}
                      disabled={deleteEmployeIsLoading}
                      className=" bg-red-500 text-white font-bold p-1 m-2 rounded-xl hover:bg-red-700 transition-all transform active:scale-[0.98] shadow-lg shadow-indigo-200 cursor-pointer"
                    >
                      Delete
                    </button>
                    {deleteEmployeError && (
                      <p className="text-red-500 text-md">
                        {deleteEmployeError}
                      </p>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2} className="border border-slate-950 ">
                <input
                  onChange={(e) => setInputText(e.target.value)}
                  type="text"
                  value={inputText}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button
                  onClick={handleCreateEmploye}
                  disabled={createEmployeIsLoading}
                >
                  Create employe
                </button>
              </td>
            </tr>
            {createEmployeError && (
              <tr>
                <td className="border border-slate-950 " colSpan={2}>
                  {createEmployeError}
                </td>
              </tr>
            )}
          </tfoot>
        </table>
        <button
          disabled={loading}
          onClick={fetchEmployes}
          className=" bg-indigo-600 text-white font-bold p-1 my-2 rounded-xl hover:bg-indigo-700 transition-all transform active:scale-[0.98] shadow-lg shadow-indigo-200 cursor-pointer"
        >
          Button
        </button>
        {employesError && (
          <p className="text-red-500 text-md">{employesError}</p>
        )}
      </main>
    </div>
  );
};

export default EmployesPage;
