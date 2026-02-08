// hooks/useEmployeeActions.ts
import { useState } from "react";
import { useCreateEmploye } from "../api/employes/useCreateEmploye";
import { useFetchEmployes } from "../api/employes/useFetchEmploye";
import { useDeleteEmploye } from "../api/employes/useDeleteEmploye";
import { useEditEmploye } from "../api/employes/useEditEmploye";

export const useEmployeeActions = () => {
  const { fetchEmployes, employes, loading, employesError } =
    useFetchEmployes();
  const { createEmploye, createEmployeIsLoading, createEmployeError } =
    useCreateEmploye();
  const { editEmploye, editEmployeIsLoading, editEmployeError } =
    useEditEmploye();
  const { deleteEmploye, deleteEmployeIsLoading, deleteEmployeError } =
    useDeleteEmploye();

  const [form, setForm] = useState({ name: "", job: "" });
  const [editForm, setEditForm] = useState({ id: "", name: "", job: "" });

  const handleCreate = async () => {
    if (!form.name) return;
    await createEmploye(form);
    await fetchEmployes();
    setForm({ name: "", job: "" });
  };

  const handleUpdate = async () => {
    if (editForm.id && (editForm.name || editForm.job)) {
      await editEmploye(editForm.id, {
        name: editForm.name,
        job: editForm.job,
      });
      await fetchEmployes();
      setEditForm({ id: "", name: "", job: "" });
    }
  };

  const handleDelete = async (id: string) => {
    await deleteEmploye(id);
    await fetchEmployes();
  };

  return {
    data: {
      employes,
      loading,
      errors: {
        fetch: employesError,
        create: createEmployeError,
        edit: editEmployeError,
        del: deleteEmployeError,
      },
    },
    loadingStates: {
      isCreating: createEmployeIsLoading,
      isEditing: editEmployeIsLoading,
      isDeleting: deleteEmployeIsLoading,
    },
    forms: { form, setForm, editForm, setEditForm },
    actions: {
      handleCreate,
      handleUpdate,
      handleDelete,
      refresh: fetchEmployes,
    },
  };
};
