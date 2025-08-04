
// export default useAuthAxios;

// import axios from "axios";

// const useAuthAxios = () => {
//   const authUser = localStorage.getItem("authUser");
//   const token = authUser ? JSON.parse(authUser).token : null;

//   const instance = axios.create({
//     baseURL: "http://localhost:3000/api",
//     headers: token ? { Authorization: `Bearer ${token}` } : {},
//   });

//   return instance;
// };

// export default useAuthAxios;

// src/hooks/useAuthAxios.ts
import axios from "axios";

const useAuthAxios = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
  });

  axiosInstance.interceptors.request.use((config) => {
    const authUser = localStorage.getItem("authUser");
    if (authUser) {
      const { token } = JSON.parse(authUser);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return axiosInstance;
};

export default useAuthAxios;
