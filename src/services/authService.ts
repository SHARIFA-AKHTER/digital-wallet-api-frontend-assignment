
import axios from "axios";

interface LoginData {
  email: string;
  password: string;
}

export const loginUser = async (data: LoginData) => {
  const response = await axios.post("https://digital-wallet-api-backend.vercel.app/api/auth/login", data);
  return response.data;
};

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
  role: "user" | "agent" | "admin";
}) => {
  const response = await axios.post("https://digital-wallet-api-backend.vercel.app/api/user/register", data);
  return response.data;
};