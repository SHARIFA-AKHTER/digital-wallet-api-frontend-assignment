import axios from "axios";
import type { ITransaction } from "../types/transaction";

const API_BASE = "http://localhost:3000/api";

const getAuthHeader = () => {
  const authUser = localStorage.getItem("authUser");
  if (!authUser) return {};
  const parsed = JSON.parse(authUser);
  return {
    Authorization: `Bearer ${parsed.token}`,
  };
};

export const fetchMyTransactions = async (): Promise<ITransaction[]> => {
  const response = await axios.get(`${API_BASE}/transactions/me`, {
    headers: getAuthHeader(),
  });
  return response.data.data;
};

export const sendMoney = async (toUserId: string, amount: number): Promise<ITransaction> => {
  const response = await axios.post(
    `${API_BASE}/transactions`,
    { toUserId, amount },
    { headers: getAuthHeader() }
  );
  return response.data.data;
};

export const cashIn = async (userId: string, amount: number): Promise<ITransaction> => {
  const response = await axios.post(
    `${API_BASE}/transactions/cash-in`,
    { userId, amount },
    { headers: getAuthHeader() }
  );
  return response.data.data;
};

export const cashOut = async (userId: string, amount: number): Promise<ITransaction> => {
  const response = await axios.post(
    `${API_BASE}/transactions/cash-out`,
    { userId, amount },
    { headers: getAuthHeader() }
  );
  return response.data.data;
};


