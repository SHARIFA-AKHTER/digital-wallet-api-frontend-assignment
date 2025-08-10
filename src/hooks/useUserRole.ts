import { useAuth } from "@/context/AuthContext";


/**
 * Hook to check current user's role
 */
export const useUserRole = () => {
  const { user } = useAuth();

  const isAdmin = user?.role === "ADMIN";
  const isUser = user?.role === "USER";
  const isAgent = user?.role === "AGENT";

  return {
    isAdmin,
    isUser,
    isAgent,
    role: user?.role,
  };
};
