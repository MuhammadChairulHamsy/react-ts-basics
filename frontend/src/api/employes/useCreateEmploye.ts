import { useState } from "react";
import { axiosInstance } from "../../lib/axios";

export const useCreateEmploye = () => {
  const [createEmployeIsLoading, setCreateEmployeIsLoading] = useState(false);
  const [createEmployeError, setCreateEmployeError] = useState("");

  const createEmploye = async (payload: { name?: string; job?: string }) => {
    try {
      setCreateEmployeIsLoading(true);
      await axiosInstance.post("/employes", {
        name: payload.name,
        job: payload.job,
      });
    } catch (error) {
      setCreateEmployeError((error as TypeError).message);
    } finally {
      setCreateEmployeIsLoading(false);
    }
  };
  return {
    createEmploye,
    createEmployeIsLoading,
    createEmployeError,
  };
};
