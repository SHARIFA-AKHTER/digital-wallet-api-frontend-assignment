import { useAuth } from "@/context/AuthContext";
import { useWallet } from "@/context/WalletContext";
import UserList from "@/features/users/Pages/UserList";

const UserDashboard = () => {
  const { user } = useAuth();
  const { balance } = useWallet();

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-center sm:text-left">
        Hello, {user?.name} 👋
      </h2>

      <p className="text-gray-600 mb-6 text-center sm:text-left">
        Your role: <strong>{user?.role}</strong>
      </p>

      <div className="bg-gray-100 p-4 sm:p-6 rounded-md shadow-sm mb-8">
        <p className="text-base sm:text-lg mb-1">Wallet Balance</p>
        <h3 className="text-2xl sm:text-3xl font-bold text-primary">${balance}</h3>
      </div>

      <div>
        <UserList />
      </div>
    </section>
  );
};

export default UserDashboard;
