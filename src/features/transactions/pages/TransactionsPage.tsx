import React from "react";

import CashInCashOut from "@/features/agents/Pages/components/CashInCashOut";
import TransactionList from "./TransectionList";


const TransactionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <TransactionList />
      <hr className="my-8" />
      <CashInCashOut />
    </div>
  );
};

export default TransactionsPage;
