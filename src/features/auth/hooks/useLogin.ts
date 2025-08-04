/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import { useAuth } from "@/context/AuthContext";

interface LoginInput {
  email: string;
  password: string;
}

export const useLogin = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginHandler = async (data: LoginInput) => {
    setLoading(true);
    setError(null);

    try {
      const res = await loginUser(data);
  
      login({
        name: res.name,
        email: res.email,
        role: res.role,
        token: res.token,
      });
      setLoading(false);
      return true; 
    } catch (err: any) {
      setLoading(false);
      setError(err.response?.data?.message || err.message || "Login failed");
      return false; 
    }
  };

  return { loginHandler, loading, error };
};
