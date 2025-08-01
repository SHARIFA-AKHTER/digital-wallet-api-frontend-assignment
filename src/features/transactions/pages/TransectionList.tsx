import TransactionCard from "../components/TransectionCard";

const mockTransactions = [
  { id: 1, type: "Send", amount: 200, status: "Completed" },
  { id: 2, type: "Receive", amount: 150, status: "Completed" },
  { id: 3, type: "Withdraw", amount: 50, status: "Pending" },
];

const TransactionList = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-2xl font-semibold mb-4">Transaction History</h2>
      <div className="space-y-4">
        {mockTransactions.map((tx) => (
          <div key={tx.id} className="p-4 border rounded-md shadow-sm flex justify-between items-center">
            <div>
              <p className="font-medium">{tx.type}</p>
              <p className="text-sm text-gray-500">Status: {tx.status}</p>
            </div>
            <span className="text-xl font-bold text-primary">৳{tx.amount}</span>

            <TransactionCard type={"Send"} amount={0} status={"Completed"} createdAt={""}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TransactionList;

// import { useEffect, useState } from "react";
// import axios from "axios";

// interface ITransaction {
//   _id: string;
//   type: "Send" | "Receive" | "Withdraw" | "Add";
//   amount: number;
//   status: "Pending" | "Completed" | "Failed";
//   createdAt: string;
// }

// const TransactionList = () => {
//   const [transactions, setTransactions] = useState<ITransaction[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchTransactions = async () => {
//       const storedUser = localStorage.getItem("authUser");
//       if (!storedUser) {
//         console.log("No user found in localStorage");
//         setLoading(false);
//         return;
//       }

//       const { token } = JSON.parse(storedUser);

//       try {
//         const res = await axios.get("http://localhost:3000/api/transactions", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setTransactions(res.data.data);
//       } catch (error) {
//         console.error("Failed to fetch transactions:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTransactions();
//   }, []);

//   if (loading) {
//     return <div className="text-center py-6 text-gray-600">Loading transactions...</div>;
//   }

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-6">
//       <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Transaction History</h2>

//       {transactions.length === 0 ? (
//         <p className="text-gray-500">No transactions found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white shadow-md rounded-md">
//             <thead className="bg-indigo-100">
//               <tr>
//                 <th className="py-2 px-4 text-left">Type</th>
//                 <th className="py-2 px-4 text-left">Amount</th>
//                 <th className="py-2 px-4 text-left">Status</th>
//                 <th className="py-2 px-4 text-left">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {transactions.map((txn) => (
//                 <tr key={txn._id} className="border-b">
//                   <td className="py-2 px-4">{txn.type}</td>
//                   <td className="py-2 px-4">${txn.amount.toFixed(2)}</td>
//                   <td className="py-2 px-4">
//                     <span
//                       className={`text-xs px-2 py-1 rounded-full ${
//                         txn.status === "Completed"
//                           ? "bg-green-100 text-green-700"
//                           : txn.status === "Pending"
//                           ? "bg-yellow-100 text-yellow-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {txn.status}
//                     </span>
//                   </td>
//                   <td className="py-2 px-4">{new Date(txn.createdAt).toLocaleString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TransactionList;


