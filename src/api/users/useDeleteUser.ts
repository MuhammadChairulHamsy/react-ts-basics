import { axiosInstance } from "../../lib/axios";

export const deleteUser = async (userId: string) => {
  return await axiosInstance.delete(`/users/${userId}`);
};
