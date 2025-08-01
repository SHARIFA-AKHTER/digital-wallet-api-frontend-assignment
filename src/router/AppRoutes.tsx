

// import { Route, Routes } from "react-router-dom";
// import Home from "@/Pages/Home";
// import WalletPage from "@/features/wallets/pages/WalletPage";
// import TransactionList from "@/features/transactions/pages/TransectionList";
// import UserDashboard from "@/features/dashboard/pages/userDashboard";
// import DashboardLayout from "@/layout/DashboardLayout";
// import MainLayout from "@/layout/MainLayout";
// import AgentDashboard from "@/features/agents/Pages/AgentDashboard";
// import AdminDashboard from "@/features/dashboard/pages/AdminDashboard";
// import Login from "@/features/auth/pages/Login";
// import Register from "@/features/auth/pages/Register";

// // 🛡️ Middleware
// import PrivateRoute from "@/middleware/PrivateRoute";
// import RoleGuard from "@/middleware/RoleGuard";
// import AgentApproval from "@/features/agents/Pages/AgentApproval";
// import UserList from "@/features/users/Pages/UserList";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* 🔓 Public Layout */}
//       <Route element={<MainLayout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/wallet" element={<WalletPage />} />
//         <Route path="/transactions" element={<TransactionList />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Route>

//       {/* 🔒 Protected Routes by Role */}
//       <Route
//         path="/dashboard/user"
//         element={
//           <PrivateRoute>
//             <RoleGuard allowedRoles={["user"]}>
//               <DashboardLayout />
//             </RoleGuard>
//           </PrivateRoute>
//         }
//       >
//         <Route index element={<UserDashboard />} />
//         <Route path="/dashboard/users" element={<UserList />} />

//       </Route>

//       <Route
//         path="/dashboard/admin"
//         element={
//           <PrivateRoute>
//             <RoleGuard allowedRoles={["admin"]}>
//               <DashboardLayout />
//             </RoleGuard>
//           </PrivateRoute>
//         }
//       >
//         <Route index element={<AdminDashboard />} />
//       </Route>

//       <Route
//         path="/dashboard/agent"
//         element={
//           <PrivateRoute>
//             <RoleGuard allowedRoles={["agent"]}>
//               <DashboardLayout />
//             </RoleGuard>
//           </PrivateRoute>
//         }
//       >
//         <Route index element={<AgentDashboard />} />
//         <Route path="/dashboard/agent-approval" element={<AgentApproval />} />

//       </Route>
//     </Routes>
//   );
// };

// export default AppRoutes;


import { Route, Routes } from "react-router-dom";
import Home from "@/Pages/Home";
import WalletPage from "@/features/wallets/pages/WalletPage";
import TransactionList from "@/features/transactions/pages/TransectionList";
import UserDashboard from "@/features/dashboard/pages/userDashboard";
import DashboardLayout from "@/layout/DashboardLayout";
import MainLayout from "@/layout/MainLayout";
import AgentDashboard from "@/features/agents/Pages/AgentDashboard";
import AdminDashboard from "@/features/dashboard/pages/AdminDashboard";
import Login from "@/features/auth/pages/Login";
import Register from "@/features/auth/pages/Register";

// 🛡️ Middleware
import PrivateRoute from "@/middleware/PrivateRoute";
import RoleGuard from "@/middleware/RoleGuard";
import AgentApproval from "@/features/agents/Pages/AgentApproval";
import UserList from "@/features/users/Pages/UserList";
// import SettingsPage from "@/features/settings/SettingsPage";


const AppRoutes = () => {
  return (
    <Routes>
      {/* 🔓 Public Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/transactions" element={<TransactionList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* 🔒 User Dashboard */}
      <Route
        path="/dashboard/user"
        element={
          <PrivateRoute>
            <RoleGuard allowedRoles={["user"]}>
              <DashboardLayout />
            </RoleGuard>
          </PrivateRoute>
        }
      >
        <Route index element={<UserDashboard />} />
        <Route path="wallet" element={<WalletPage />} />
        <Route path="transactions" element={<TransactionList />} />
        <Route path="users" element={<UserList />} />
      </Route>

      {/* 🔒 Admin Dashboard */}
      <Route
        path="/dashboard/admin"
        element={
          <PrivateRoute>
            <RoleGuard allowedRoles={["admin"]}>
              <DashboardLayout />
            </RoleGuard>
          </PrivateRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        {/* Route path="settings" element={<SettingsPage />}  */}
      </Route>

      {/* 🔒 Agent Dashboard */}
      <Route
        path="/dashboard/agent"
        element={
          <PrivateRoute>
            <RoleGuard allowedRoles={["agent"]}>
              <DashboardLayout />
            </RoleGuard>
          </PrivateRoute>
        }
      >
        <Route index element={<AgentDashboard />} />
        <Route path="agent-approval" element={<AgentApproval />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
