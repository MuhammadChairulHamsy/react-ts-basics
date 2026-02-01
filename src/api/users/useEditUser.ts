import { axiosInstance } from "../../lib/axios";

export const editUser = async ({
  userId,
  payload,
}: {
  userId: string;
  payload: { name?: string; email?: string; company?: string };
}) => {
  return await axiosInstance.patch(`/users/${userId}`, {
    name: payload.name ? payload.name : undefined,
    email: payload.email ? payload.email : undefined,
    company: payload.company ? payload.company : undefined,
  });
};
