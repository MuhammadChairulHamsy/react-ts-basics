import { axiosInstance } from "../../lib/axios";

export type UserResponse = {
  id: string;
  name: string;
  email: string;
  company: string;
};
export const fetchUsers = async (): Promise<UserResponse[]> => {
  const {data} = await axiosInstance.get<UserResponse[]>("/users");

  return data;
};
