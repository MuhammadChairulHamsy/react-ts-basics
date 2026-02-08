import { useUsers } from "../../hooks/useUsers";
import { UserTableForm } from "../../components/UserTableForm";

const UsersPage = () => {
  const { users, status, forms, actions } = useUsers();

  if (status.isLoading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">
              User Directory
            </h1>
            <p className="text-slate-500">
              Manage your team members and their information.
            </p>
          </div>
          <button
            onClick={() => actions.refetch()}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
          >
            Refresh Data
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Company</th>
                <th className="px-6 py-4 text-right">Action</th>
                <th className="px-6 py-4 text-right">Edit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4">#{user.id}</td>
                  <td className="px-6 py-4 font-semibold">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.company}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => actions.handleDelete(user.id)}
                      className="border p-1 bg-red-500 font-semibold text-slate-50 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <input
                      type="radio"
                      name="edit-selection"
                      checked={forms.editForm.id === user.id}
                      onChange={() =>
                        forms.setEditForm({ ...user, id: user.id })
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <UserTableForm
                label="Add User"
                color="green"
                values={forms.newForm}
                onChange={forms.setNewForm}
                onSubmit={actions.handleAdd}
                isPending={status.isAdding}
              />
              <UserTableForm
                label="Update User"
                color="indigo"
                values={forms.editForm}
                onChange={forms.setEditForm}
                onSubmit={actions.handleUpdate}
                isPending={status.isUpdating}
                disabled={!forms.editForm.id}
              />
            </tfoot>
          </table>
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
