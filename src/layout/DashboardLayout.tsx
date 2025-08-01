import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 p-4 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout