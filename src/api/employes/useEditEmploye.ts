import { useState } from "react";
import { axiosInstance } from "../../lib/axios";

export const useEditEmploye = () => {
  const [editEmployeIsLoading, setEditEmployeIsLoading] = useState(false);
  const [editEmployeError, setEditEmployeError] = useState("");

  const editEmploye = async (
    employeId: string,
    payload: {
      name?: string;
      job?: string;
    },
  ) => {
    try {
      setEditEmployeIsLoading(true);
      await axiosInstance.patch(`/employes/${employeId}`, {
        name: payload.name ? payload.name : undefined,
        job: payload.job ? payload.job : undefined,
      });
    } catch (error) {
      setEditEmployeError((error as TypeError).message);
    } finally {
      setEditEmployeIsLoading(false);
    }
  };
  return {
    editEmploye,
    editEmployeIsLoading,
    editEmployeError,
  };
};
