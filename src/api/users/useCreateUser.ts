import { axiosInstance } from "../../lib/axios";

export const createUser = async (payload: {
  name?: string;
  email?: string;
  company?: string;
}) => {
  return await axiosInstance.post("/users", {
    name: payload.name,
    email: payload.email,
    company: payload.company,
  });
};
