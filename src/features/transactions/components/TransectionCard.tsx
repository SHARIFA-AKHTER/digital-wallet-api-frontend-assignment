import React from "react";

interface TransactionCardProps {
  type: "Add" | "Withdraw" | "Send" | "CashIn" | "CashOut";
  amount: number;
  status: "Pending" | "Completed" | "Failed";
  receiver?: string;
  sender?: string;
  createdAt: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  type,
  amount,
  status,
  receiver,
  sender,
  createdAt,
}) => {
  const statusColor =
    status === "Completed"
      ? "text-green-600"
      : status === "Pending"
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition duration-200">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-gray-700">{type}</span>
        <span className={`text-sm font-medium ${statusColor}`}>{status}</span>
      </div>

      <div className="mb-2">
        <p className="text-lg font-bold text-gray-900">৳{amount}</p>
      </div>

      <div className="text-sm text-gray-600 space-y-1">
        {sender && <p><span className="font-medium">Sender:</span> {sender}</p>}
        {receiver && <p><span className="font-medium">Receiver:</span> {receiver}</p>}
        <p><span className="font-medium">Date:</span> {new Date(createdAt).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default TransactionCard;
