import axios from "axios";

const useAuthAxios = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
  });

  axiosInstance.interceptors.request.use((config) => {
    const authUser = localStorage.getItem("authUser"); 

    if (authUser) {
      const { token } = JSON.parse(authUser);

      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return axiosInstance;
};

export default useAuthAxios;



