import { useAuth } from "@/context/AuthContext";
import { useWallet } from "@/context/WalletContext";
import UserList from "@/features/users/Pages/UserList";
import AddMoneyForm from "@/features/wallets/components/AddMoneyForm";

const UserDashboard = () => {
  const { user } = useAuth();
  const { balance } = useWallet();

  return (
    <section className="px-4 py-8 w-full">
      <h2 className="text-2xl font-semibold mb-2">Hello, {user?.name} 👋</h2>
      <p className="text-gray-600 mb-6">Your role: <strong>{user?.role}</strong></p>

      <div className="bg-gray-100 p-6 rounded-md shadow-sm">
        <p className="text-lg">Wallet Balance</p>
        <h3 className="text-3xl font-bold text-primary">${balance}</h3>

         <AddMoneyForm />
         <UserList></UserList>
      </div>
    </section>
  );
};

export default UserDashboard;
