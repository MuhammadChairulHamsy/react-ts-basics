import { axiosInstance } from "../../lib/axios";

export const editUser = async ({ userId, payload }: { userId: string; payload: any }) => {
  const response = await axiosInstance.patch(`/users/${userId}`, payload);
  return response.data;
};