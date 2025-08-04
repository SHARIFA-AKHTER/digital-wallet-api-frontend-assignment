export interface ITransaction {
  _id: string;
  wallet: string;
  type: "send" | "cashIn" | "cashOut" | "withdraw" | "add";
  amount: number;
  fee: number;
  commission: number;
  status: "pending" | "completed" | "reversed";
  fromUser: string;
  toUser: string;
  createdAt: string;
  updatedAt: string;
}
