/* eslint-disable @typescript-eslint/no-explicit-any */
import { cashIn, cashOut } from "@/services/transactionService";
import React, { useState } from "react";


const CashInCashOut: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [action, setAction] = useState<"cashIn" | "cashOut">("cashIn");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      if (action === "cashIn") {
        await cashIn(userId, amount);
        setMessage("Cash-In successful!");
      } else {
        await cashOut(userId, amount);
        setMessage("Cash-Out successful!");
      }
    } catch (error: any) {
      setMessage(error.response?.data?.message || "Operation failed");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-indigo-600">Agent Cash-In / Cash-Out</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">User ID</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter User ID"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Amount</label>
          <input
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter amount"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Action</label>
          <select
            value={action}
            onChange={(e) => setAction(e.target.value as "cashIn" | "cashOut")}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="cashIn">Cash In</option>
            <option value="cashOut">Cash Out</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-4 text-center text-sm text-green-600">{message}</p>}
    </div>
  );
};

export default CashInCashOut;



