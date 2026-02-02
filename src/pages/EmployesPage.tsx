// pages/EmployesPage.tsx

import { useEmployeeActions } from "../hooks/useEmployes";
import { EmployeeRow } from "../components/EmployeeRow";

const EmployesPage = () => {
  const { data, loadingStates, forms, actions } = useEmployeeActions();

  if (data.loading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-extrabold">Employees Management</h1>
          <button
            onClick={actions.refresh}
            className="bg-indigo-600 text-white font-bold px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition-all transform active:scale-95 shadow-md shadow-indigo-100 disabled:opacity-50 flex items-center gap-2"
          >
            Refresh
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 w-20">
                  Id
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">
                  Name
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">
                  Job
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 text-right">
                  Action
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 text-right">
                  Select Edit
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.employes.map((emp) => (
                <EmployeeRow
                  key={emp.id}
                  employee={emp}
                  isSelected={forms.editForm.id === emp.id}
                  isDeleting={loadingStates.isDeleting}
                  onDelete={actions.handleDelete}
                  onSelect={() =>
                    forms.setEditForm({
                      id: emp.id,
                      name: emp.name,
                      job: emp.job,
                    })
                  }
                />
              ))}
            </tbody>
            <tfoot className="bg-slate-50/30 border-t-2 border-slate-100">
              {/* Row Tambah */}
              <tr>
                <td colSpan={2} className="px-6 py-2">
                  <input
                    type="text"
                    value={forms.form.name}
                    onChange={(e) =>
                      forms.setForm({ ...forms.form, name: e.target.value })
                    }
                    placeholder="Enter new employee name..."
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </td>
                <td colSpan={2} className="px-6 py-2">
                  <input
                    type="text"
                    value={forms.form.job}
                    onChange={(e) =>
                      forms.setForm({ ...forms.form, job: e.target.value })
                    }
                    placeholder="Enter new employee job..."
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={actions.handleCreate}
                    disabled={loadingStates.isCreating}
                    className="bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-indigo-700 transition-all disabled:bg-slate-300 shadow-md shadow-indigo-100"
                  >
                    {loadingStates.isCreating ? "Adding..." : "Add"}
                  </button>
                </td>
              </tr>
              {/* Row Edit */}
              <tr>
                <td colSpan={2} className="px-6 py-2">
                  <input
                    type="text"
                    value={forms.editForm.name}
                    onChange={(e) =>
                      forms.setEditForm({
                        ...forms.editForm,
                        name: e.target.value,
                      })
                    }
                    placeholder="Enter Edit employee id..."
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </td>
                <td colSpan={2} className="px-6 py-2">
                  <input
                    type="text"
                    value={forms.editForm.job}
                    onChange={(e) =>
                      forms.setEditForm({
                        ...forms.editForm,
                        job: e.target.value,
                      })
                    }
                    placeholder="Enter Edit job employee id..."
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={actions.handleUpdate}
                    disabled={loadingStates.isEditing || !forms.editForm.id}
                    className="bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-indigo-700 transition-all disabled:bg-slate-300 shadow-md shadow-indigo-100"
                  >
                    {loadingStates.isEditing ? "Saving..." : "Edit"}
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </main>
    </div>
  );
};

export default EmployesPage;
