import { useUserRole } from "@/hooks/useUserRole";

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
    </div>
  );
};

export default AdminDashboard;
