/* eslint-disable @typescript-eslint/no-unused-vars */

// import { useWallet } from "@/context/WalletContext";
// import AddMoneyForm from "../components/AddMoneyForm";

// const WalletPage = () => {
//   const { balance, addMoney, withdrawMoney } = useWallet();

//   const handleAdd = async () => {
//     try {
//       await addMoney(100);
//     } catch (err) {
//       alert("Failed to add money");
//     }
//   };

//   const handleWithdraw = async () => {
//     try {
//       await withdrawMoney(50);
//     } catch (err) {
//       alert("Failed to withdraw money");
//     }
//   };

//   return (
//     <section className="max-w-3xl mx-auto px-4 py-20">
//       <h2 className="text-2xl font-semibold mb-4">My Wallet</h2>
//       <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-4">
//         <p className="text-lg">Current Balance:</p>
//         <h3 className="text-3xl font-bold text-primary">${balance}</h3>
//       </div>
//       <div className="flex flex-col md:flex-row gap-4">
//         <button
//           onClick={handleAdd}
//           className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
//         >
//           Add $100
//         </button>
//         <button
//           onClick={handleWithdraw}
//           className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
//         >
//           Withdraw $50
//         </button>
//       </div>
//        <AddMoneyForm />
//     </section>
//   );
// };

// export default WalletPage;


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
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Wallet</h1>

      <div className="bg-gray-100 p-6 rounded-md shadow mb-6">
        <p className="text-lg text-gray-700">Current Balance:</p>
        <p className="text-4xl font-extrabold text-indigo-600">${balance}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleAdd}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-md transition"
        >
          Add $100
        </button>
        <button
          onClick={handleWithdraw}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-md transition"
        >
          Withdraw $50
        </button>
      </div>
    </section>
  );
};

export default WalletPage;
