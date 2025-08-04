
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 w-full min-h-screen p-4 md:p-6 bg-gray-50 overflow-x-hidden">
        <div className="max-w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;