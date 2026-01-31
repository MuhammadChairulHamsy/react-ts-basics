import { useState } from "react";
import { axiosInstance } from "../lib/axios";

type EmployeResponse = {
  id: string;
  name: string;
};

export const useFetchEmployes = () => {
  const [employes, setEmployes] = useState<EmployeResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [employesError, setEmployesError] = useState("");

  const fetchEmployes = async () => {
    try {
      setLoading(true);

      const response = await axiosInstance.get<EmployeResponse[]>("/employes");
      console.log(response);

      setEmployes(response.data);
    } catch (err) {
      setEmployesError((err as TypeError).message);
    } finally {
      setLoading(false);
    }
  };

  
  return {
    fetchEmployes,
    employes,
    loading,
    employesError,
  };
};
