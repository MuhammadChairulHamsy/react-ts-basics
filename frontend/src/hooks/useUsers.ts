// hooks/useUsers.ts
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchUsers,
  createUser,
  editUser,
  deleteUser,
} from "../api/users/index";

export const useUsers = () => {
  const queryClient = useQueryClient();

  // States
  const [newForm, setNewForm] = useState({ name: "", email: "", company: "" });
  const [editForm, setEditForm] = useState({
    id: "",
    name: "",
    email: "",
    company: "",
  });

  // Query
  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // Mutations
  const addMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setNewForm({ name: "", email: "", company: "" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ userId, payload }: { userId: string; payload: any }) =>
      editUser({ userId, payload }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setEditForm({ id: "", name: "", email: "", company: "" });
      alert("Update berhasil!");
    },
    onError: (error) => {
      alert("Update gagal: " + error.message);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  return {
    users: usersQuery.data ?? [],
    status: {
      isLoading: usersQuery.isLoading,
      isError: usersQuery.isError,
      error: usersQuery.error,
      isAdding: addMutation.isPending,
      isUpdating: updateMutation.isPending,
      isDeleting: deleteMutation.isPending,
    },
    forms: { newForm, setNewForm, editForm, setEditForm },
    actions: {
      refetch: usersQuery.refetch,
      handleAdd: () => {
        if (newForm.name.trim() && newForm.email.trim()) {
          addMutation.mutate(newForm);
        }
      },
      handleUpdate: () =>
        updateMutation.mutate({ userId: editForm.id, payload: editForm }),
      handleDelete: (id: string) =>
        confirm("Hapus user?") && deleteMutation.mutate(id),
    },
  };
};
