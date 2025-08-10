/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import axios from "axios";

const AgentCommission = () => {
  const [transactions, setTransactions] = useState([]);
  const [commissionTotal, setCommissionTotal] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchAgentTransactions = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setErrorMessage("User token not found. Please log in again.");
          return;
        }
       
        const res = await axios.get("http://localhost:3000/api/transactions/agent-commissions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const allTransactions = res.data?.data || [];

        const agentTxns = allTransactions.filter((txn: any) => txn?.type === "cashIn");

        const totalCommission = agentTxns.reduce(
          (sum: number, txn: any) => sum + (txn?.commission || 0),
          0
        );

        setTransactions(agentTxns);
        setCommissionTotal(totalCommission);
        setErrorMessage("");
      } catch (error: any) {
        console.error("❌ Error fetching transactions:", error);

        if (error?.response?.status === 400) {
          setErrorMessage("Bad Request. Please contact admin.");
        } else if (error?.response?.status === 401) {
          setErrorMessage("Unauthorized. Please login again.");
        } else if (error?.response?.status === 500) {
          setErrorMessage("😓 Server error occurred. Try again later.");
        } else {
          setErrorMessage("⚠️ Network error. Check your internet or try again.");
        }
      }
    };

    fetchAgentTransactions();
  }, []);

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">
        🧾 Agent Commission Report
      </h2>

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded text-sm">
          {errorMessage}
        </div>
      )}

      <p className="mb-6 text-lg text-center text-green-700">
        💰 Total Commission Earned: <strong>৳{commissionTotal.toFixed(2)}</strong>
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow text-sm md:text-base">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border px-4 py-2 text-left">👤 To User ID</th>
              <th className="border px-4 py-2 text-right">💵 Amount</th>
              <th className="border px-4 py-2 text-right">💰 Commission</th>
              <th className="border px-4 py-2 text-left">📅 Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No commission transactions found.
                </td>
              </tr>
            ) : (
              transactions.map((txn: any) => (
                <tr key={txn._id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{txn.toUser || "N/A"}</td>
                  <td className="border px-4 py-2 text-right">৳{txn.amount?.toFixed(2)}</td>
                  <td className="border px-4 py-2 text-right">
                    ৳{txn.commission?.toFixed(2)}
                  </td>
                  <td className="border px-4 py-2">
                    {txn.createdAt ? new Date(txn.createdAt).toLocaleString() : "N/A"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentCommission;
