

// src/services/authService.ts
import axiosInstance from "@/utils/axiosInstance";

interface LoginData {
  email: string;
  password: string;
}

export const loginUser = async (data: LoginData) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
  role: "user" | "agent" | "admin";
}) => {
  const response = await axiosInstance.post("/user/register", data);
  return response.data;
};
