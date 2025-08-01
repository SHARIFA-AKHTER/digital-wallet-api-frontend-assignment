export interface IWallet {
  _id?: string;
  user: string;
  balance: number;
  isBlocked: boolean;
  createdAt?: string;
  updatedAt?: string;
}

