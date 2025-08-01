/* eslint-disable react-hooks/rules-of-hooks */
import type { IUser } from "@/types/user";
import { useAuthAxios } from "@/utils/axiosInstance";

export const getAllUsers = async (): Promise<IUser[]> => {
  const res = await useAuthAxios().get("/users");

  if (res.data && res.data.data) return res.data.data;
  if (Array.isArray(res.data)) return res.data;

  throw new Error("Unexpected response format from /users");
};

export const getUserById = async (id: string): Promise<IUser> => {
  const res = await useAuthAxios().get(`/users/${id}`);

  if (res.data && res.data.data) return res.data.data;
  if (res.data) return res.data;

  throw new Error("Unexpected response format from /users/:id");
};
