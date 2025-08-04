// /* eslint-disable react-hooks/rules-of-hooks */
// import useAuthAxios from "@/hooks/useAuthAxios";
// import type { IUser } from "@/types/user";


// export const getAllUsers = async (): Promise<IUser[]> => {
//   const res = await useAuthAxios().get("/users");

//   if (res.data && res.data.data) return res.data.data;
//   if (Array.isArray(res.data)) return res.data;

//   throw new Error("Unexpected response format from /users");
// };

// export const getUserById = async (id: string): Promise<IUser> => {
//   const res = await useAuthAxios().get(`/users/${id}`);

//   if (res.data && res.data.data) return res.data.data;
//   if (res.data) return res.data;

//   throw new Error("Unexpected response format from /users/:id");
// };

/* eslint-disable react-hooks/rules-of-hooks */
import useAuthAxios from "@/hooks/useAuthAxios";
import type { IUser } from "@/types/user";
import type { AxiosResponse } from "axios"; 

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export const getAllUsers = async (): Promise<IUser[]> => {
  const axiosInstance = useAuthAxios();
  const res: AxiosResponse<ApiResponse<IUser[]>> = await axiosInstance.get("/users");
  return res.data.data;
};

export const getUserById = async (id: string): Promise<IUser> => {
  const axiosInstance = useAuthAxios();
  const res: AxiosResponse<ApiResponse<IUser>> = await axiosInstance.get(`/users/${id}`);
  return res.data.data;
};
export const updateProfile = async (_token: string, profileData: { name: string; photo?: string; }) => {
  const axiosInstance = useAuthAxios();
  const res = await axiosInstance.patch("/users/update-profile", profileData);
  return res.data;
};