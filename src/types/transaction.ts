export type TransactionType = "add" | "withdraw" | "send" | "receive";
export type TransactionStatus = "pending" | "completed" | "reversed";

export interface ITransaction {
  _id?: string;
  wallet: string; 
  type: TransactionType;
  amount: number;
  fee: number;
  commission: number;
  status: TransactionStatus;
  fromUser?: string;
  toUser?: string;
  createdAt: string;
}
