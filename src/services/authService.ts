
import axios from "axios";

interface LoginData {
  email: string;
  password: string;
}

export const loginUser = async (data: LoginData) => {
  const response = await axios.post("http://localhost:3000/api/auth/login", data);
  return response.data;
};

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
  role: "USER" | "AGENT" | "ADMIN";
}) => {
  const response = await axios.post("http://localhost:3000/api/user/register", data);
  return response.data;
};