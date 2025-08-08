
import axios from "axios";

const authAxios = axios.create({
  baseURL: "https://digital-wallet-api-backend.vercel.app/api",
});

authAxios.interceptors.request.use((config) => {
  const authUser = localStorage.getItem("authUser");
  if (authUser) {
    const { token } = JSON.parse(authUser);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default authAxios;
