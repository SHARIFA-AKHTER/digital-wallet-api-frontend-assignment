import { useAuth } from "@/context/AuthContext";


/**
 * Hook to check current user's role
 */
export const useUserRole = () => {
  const { user } = useAuth();

  const isAdmin = user?.role === "admin";
  const isUser = user?.role === "user";
  const isAgent = user?.role === "agent";

  return {
    isAdmin,
    isUser,
    isAgent,
    role: user?.role,
  };
};
