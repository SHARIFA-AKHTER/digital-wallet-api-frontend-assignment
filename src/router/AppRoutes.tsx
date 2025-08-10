
import { Route, Routes } from "react-router-dom";

// Layouts
import MainLayout from "@/layout/MainLayout";
import DashboardLayout from "@/layout/DashboardLayout";

// Public Pages
import Home from "@/Pages/Home";
import Login from "@/features/auth/pages/Login";
import Register from "@/features/auth/pages/Register";

// Shared Pages
import WalletPage from "@/features/wallets/pages/WalletPage";
import TransactionList from "@/features/transactions/pages/TransectionList";
import UserList from "@/features/users/Pages/UserList";

// Dashboard Pages
import UserDashboard from "@/features/dashboard/pages/userDashboard";
import AdminDashboard from "@/features/dashboard/pages/AdminDashboard";
import AgentDashboard from "@/features/agents/Pages/AgentDashboard";
import AgentApproval from "@/features/agents/Pages/AgentApproval";
// import SettingsPage from "@/features/settings/SettingsPage"; // Uncomment if exists

// Middleware
import PrivateRoute from "@/middleware/PrivateRoute";
import RoleGuard from "@/middleware/RoleGuard";
import SettingsPage from "@/features/settings/SettingsPage";
import AgentCommission from "@/features/agents/Pages/AgentCommission";
import Unauthorized from "@/Pages/Unauthorized";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 🔓 Public Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
           {/* <Route path="/wallet" element={<WalletPage />} />
        <Route path="/transactions" element={<TransactionList />} /> */}
      </Route>

      {/* 🔒 USER DASHBOARD */}
      <Route
        path="/dashboard/user"
        element={
          <PrivateRoute>
            <RoleGuard allowedRoles={["USER"]}>
              <DashboardLayout />
            </RoleGuard>
          </PrivateRoute>
        }
      >
        <Route index element={<UserDashboard />} />
        <Route path="wallet" element={<WalletPage />} />
        <Route path="transactions" element={<TransactionList />} />
      </Route>

      {/* 🔒 ADMIN DASHBOARD */}
      <Route
        path="/dashboard/admin"
        element={
          <PrivateRoute>
            <RoleGuard allowedRoles={["ADMIN"]}>
              <DashboardLayout />
            </RoleGuard>
          </PrivateRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="wallet" element={<WalletPage />} />
        <Route path="transactions" element={<TransactionList />} />
        <Route path="users" element={<UserList />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="agent-approval" element={<AgentApproval />} />
      </Route>

      {/* 🔒 AGENT DASHBOARD */}
      <Route
        path="/dashboard/agent"
        element={
          <PrivateRoute>
            <RoleGuard allowedRoles={["AGENT"]}>
              <DashboardLayout />
            </RoleGuard>
          </PrivateRoute>
        }
      >
        <Route index element={<AgentDashboard />} />
        <Route path="wallet" element={<WalletPage />} />
        <Route path="transactions" element={<TransactionList />} />
        <Route path="agent-commission" element={<AgentCommission />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
