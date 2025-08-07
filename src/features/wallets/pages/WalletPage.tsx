import { useWallet } from "@/context/WalletContext";

const WalletPage = () => {
  const { balance, addMoney, withdrawMoney } = useWallet();

  const handleAdd = async () => {
    try {
      await addMoney(100);
      alert("Added $100 successfully");
    } catch {
      alert("Failed to add money");
    }
  };

  const handleWithdraw = async () => {
    try {
      await withdrawMoney(50);
      alert("Withdrew $50 successfully");
    } catch {
      alert("Failed to withdraw money");
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
      <h1 className="text-2xl sm:text-3xl font-bold mb-10 text-center sm:text-left">
        💼 My Wallet
      </h1>

      <div className="bg-gray-100 p-4 sm:p-6 rounded-md shadow-md mb-8 text-center sm:text-left">
        <p className="text-base sm:text-lg text-gray-700">Current Balance:</p>
        <p className="text-3xl sm:text-4xl font-extrabold text-indigo-600">${balance}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleAdd}
          className="w-full sm:w-auto flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md text-sm sm:text-base transition"
        >
          ➕ Add $100
        </button>
        <button
          onClick={handleWithdraw}
          className="w-full sm:w-auto flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-md text-sm sm:text-base transition"
        >
          ➖ Withdraw $50
        </button>
      </div>
    </section>
  );
};

export default WalletPage;


