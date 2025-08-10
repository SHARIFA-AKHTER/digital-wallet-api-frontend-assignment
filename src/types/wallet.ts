
import { Types } from "mongoose";

export interface IWallet {
  _id?: string;
  user: Types.ObjectId | string;
  balance: number;
  isBlocked: boolean;
  createdAt?: string;
  updatedAt?: string;
}