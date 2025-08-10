/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */



// import useAuthAxios from "@/hooks/useAuthAxios";
// import { useEffect, useState } from "react";



// interface Transaction {
//   _id: string;
//   toUser?: string;
//   amount: number;
//   commission: number;
//   createdAt?: string;
//   type: string;
// }

// const AgentCommission = () => {
//   const axiosInstance = useAuthAxios();
//   const [transactions, setTransactions] = useState<Transaction[]>([]);
//   const [commissionTotal, setCommissionTotal] = useState(0);
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     const fetchAgentTransactions = async () => {
//       try {
//         const res = await axiosInstance.get("/transactions/agent-commissions");
//         if (!res.data.success) {
//           setErrorMessage("Failed to fetch data from server.");
//           return;
//         }
//         const allTransactions: Transaction[] = res.data.data || [];

//         const agentTxns = allTransactions.filter((txn) => txn.type === "cashIn");

//         const totalCommission = agentTxns.reduce(
//           (sum, txn) => sum + (txn.commission || 0),
//           0
//         );

//         setTransactions(agentTxns);
//         setCommissionTotal(totalCommission);
//         setErrorMessage("");
//       } catch (error: any) {
//         console.error("Error fetching transactions:", error);

//         if (error?.response?.status === 400) {
//           setErrorMessage("Bad Request. Please contact admin.");
//         } else if (error?.response?.status === 401) {
//           setErrorMessage("Unauthorized. Please login again.");
//         } else if (error?.response?.status === 403) {
//           setErrorMessage("Forbidden. You don't have permission.");
//         } else if (error?.response?.status === 500) {
//           setErrorMessage("Server error occurred. Try again later.");
//         } else {
//           setErrorMessage("Network error. Check your internet or try again.");
//         }
//       }
//     };

//     fetchAgentTransactions();
//   }, [axiosInstance]);

//   return (
//     <div className="p-4 md:p-8 max-w-5xl mx-auto">
//       <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">
//         🧾 Agent Commission Report
//       </h2>

//       {errorMessage && (
//         <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded text-sm">
//           {errorMessage}
//         </div>
//       )}

//       {!errorMessage && (
//         <>
//           <p className="mb-6 text-lg text-center text-green-700">
//             💰 Total Commission Earned: <strong>৳{commissionTotal.toFixed(2)}</strong>
//           </p>

//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border rounded shadow text-sm md:text-base">
//               <thead className="bg-gray-100 text-gray-700">
//                 <tr>
//                   <th className="border px-4 py-2 text-left">👤 To User ID</th>
//                   <th className="border px-4 py-2 text-right">💵 Amount</th>
//                   <th className="border px-4 py-2 text-right">💰 Commission</th>
//                   <th className="border px-4 py-2 text-left">📅 Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {transactions.length === 0 ? (
//                   <tr>
//                     <td colSpan={4} className="text-center py-4 text-gray-500">
//                       No commission transactions found.
//                     </td>
//                   </tr>
//                 ) : (
//                   transactions.map((txn) => (
//                     <tr key={txn._id} className="hover:bg-gray-50">
//                       <td className="border px-4 py-2">{txn.toUser || "N/A"}</td>
//                       <td className="border px-4 py-2 text-right">৳{txn.amount.toFixed(2)}</td>
//                       <td className="border px-4 py-2 text-right">৳{txn.commission.toFixed(2)}</td>
//                       <td className="border px-4 py-2">
//                         {/* {txn.createdAt
//                           ? format(new Date(txn.createdAt), "PPPpp")
//                           : "N/A"} */}
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default AgentCommission;


import useAuthAxios from "@/hooks/useAuthAxios";
import { useEffect, useState } from "react";

interface Transaction {
  _id: string;
  toUser?: string;
  amount: number;
  commission: number;
  createdAt?: string;
  type: string;
}

const AgentCommission = () => {
  const axiosInstance = useAuthAxios();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [commissionTotal, setCommissionTotal] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchAgentTransactions = async () => {
      try {
        const res = await axiosInstance.get("/transactions/agent-commissions");
        if (!res.data.success) {
          setErrorMessage("Failed to fetch data from server.");
          return;
        }
        const allTransactions: Transaction[] = res.data.data || [];

        const agentTxns = allTransactions.filter((txn) => txn.type === "cashIn");

        const totalCommission = agentTxns.reduce(
          (sum, txn) => sum + (txn.commission || 0),
          0
        );

        setTransactions(agentTxns);
        setCommissionTotal(totalCommission);
        setErrorMessage("");
      } catch (error: any) {
        console.error("Error fetching transactions:", error);

        if (error?.response?.status === 400) {
          setErrorMessage("Bad Request. Please contact admin.");
        } else if (error?.response?.status === 401) {
          setErrorMessage("Unauthorized. Please login again.");
        } else if (error?.response?.status === 403) {
          setErrorMessage("Forbidden. You don't have permission.");
        } else if (error?.response?.status === 500) {
          setErrorMessage("Server error occurred. Try again later.");
        } else {
          setErrorMessage("Network error. Check your internet or try again.");
        }
      }
    };

    fetchAgentTransactions();
  }, [axiosInstance]);

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

      {!errorMessage && (
        <>
          <p className="mb-6 text-lg text-center text-green-700">
            💰 Total Commission Earned:{" "}
            <strong>৳{commissionTotal.toFixed(2)}</strong>
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow text-xs sm:text-sm md:text-base">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="border px-3 py-2 text-left whitespace-nowrap">👤 To User ID</th>
                  <th className="border px-3 py-2 text-right whitespace-nowrap">💵 Amount</th>
                  <th className="hidden sm:table-cell border px-3 py-2 text-right whitespace-nowrap">💰 Commission</th>
                  <th className="hidden sm:table-cell border px-3 py-2 text-left whitespace-nowrap">📅 Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-6 text-gray-500">
                      No commission transactions found.
                    </td>
                  </tr>
                ) : (
                  transactions.map((txn) => (
                    <tr key={txn._id} className="hover:bg-gray-50">
                      <td className="border px-3 py-2 whitespace-nowrap">{txn.toUser || "N/A"}</td>
                      <td className="border px-3 py-2 text-right whitespace-nowrap">৳{txn.amount.toFixed(2)}</td>
                      <td className="hidden sm:table-cell border px-3 py-2 text-right whitespace-nowrap">৳{txn.commission.toFixed(2)}</td>
                      <td className="hidden sm:table-cell border px-3 py-2 whitespace-nowrap">
                        {txn.createdAt
                          ? new Date(txn.createdAt).toLocaleDateString()
                          : "N/A"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default AgentCommission;
