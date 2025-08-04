
import { useUserRole } from "@/hooks/useUserRole";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const { isAdmin } = useUserRole();

  if (!isAdmin) {
    return <div className="text-red-600">Unauthorized</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome Admin</h1>
      {/* Only admin can see this part */}
      <p>Here you can manage users, transactions, wallets...</p>
    <Link
        to="agent-approval"
        className="text-blue-600 underline hover:text-blue-800"
      >
        View Agent Approval Requests
      </Link>

    </div>
  );
};

export default AdminDashboard;
