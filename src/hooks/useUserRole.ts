// import { useAuth } from "@/context/AuthContext";

import { useAuth } from "@/context/AuthContext";


// /**
//  * Hook to check current user's role
//  */
// export const useUserRole = () => {
//   const { user } = useAuth();

//   const isAdmin = user?.role === "ADMIN";
//   const isUser = user?.role === "USER";
//   const isAgent = user?.role === "AGENT";

//   return {
//     isAdmin,
//     isUser,
//     isAgent,
//     role: user?.role,
//   };
// };

export const useUserRole = () => {
  const { user } = useAuth();

  const role = user?.role?.toUpperCase();
  console.log("User role in useUserRole:", user?.role);

  const isAdmin = role === "ADMIN";
  const isUser = role === "USER";
  const isAgent = role === "AGENT";

  return {
    isAdmin,
    isUser,
    isAgent,
    role,
  };
};

