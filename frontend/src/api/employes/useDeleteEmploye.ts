import { useState } from "react";
import { axiosInstance } from "../../lib/axios";

export const useDeleteEmploye = () => {
  const [deleteEmployeIsLoading, setDeleteEmployeIsLoading] = useState(false);
  const [deleteEmployeError, setDeleteEmployeError] = useState("");

  const deleteEmploye = async (employeId: string) => {
    try {
      setDeleteEmployeIsLoading(true);
      await axiosInstance.delete(`/employes/${employeId}`);
    } catch (error) {
      setDeleteEmployeError((error as TypeError).message);
    } finally {
      setDeleteEmployeIsLoading(false);
    }
  };
  return {
    deleteEmploye,
    deleteEmployeIsLoading,
    deleteEmployeError,
  };
};
