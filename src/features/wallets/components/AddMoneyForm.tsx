/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import axios from "axios";
import type { IWallet } from "@/types/wallet";

const AddMoneyForm = () => {
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleAddMoney = async (e: React.FormEvent) => {
    e.preventDefault();

    const authUser = localStorage.getItem("authUser");
    if (!authUser) {
      setMessage("❌ Please login first");
      return;
    }

    const { token } = JSON.parse(authUser);

    try {
      setLoading(true);

        
  console.log("Sending token:", token);
      const response = await axios.post<{ success: boolean; data: IWallet }>(
        "https://digital-wallet-api-backend.vercel.app/api/wallet/add",
        { amount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            
          },
          
        }
        
      );
         

      setMessage(`✅ Money added successfully: ${response.data.data.balance}`);
      setAmount(0);
    } catch (error: any) {
      setMessage(
        error?.response?.data?.message || "❌ Failed to add money. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-700">Add Money</h2>

      <form onSubmit={handleAddMoney} className="space-y-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter amount"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          required
          min={1}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          {loading ? "Adding..." : "Add Money"}
        </button>
      </form>

      {message && (
        <div className="mt-4 text-center text-sm text-gray-700">{message}</div>
      )}
    </div>
  );
};

export default AddMoneyForm;
