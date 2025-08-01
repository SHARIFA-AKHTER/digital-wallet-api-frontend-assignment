import axios from "axios";

const API_BASE = "http://localhost:3000/api";

const getAuthHeader = () => {
  const authUser = localStorage.getItem("authUser");
  if (!authUser) return {};
  const parsed = JSON.parse(authUser);
  return {
    Authorization: `Bearer ${parsed.token}`,
  };
};

export const getMyTransactions = async () => {
  const response = await axios.get(`${API_BASE}/transactions/me`, {
    headers: getAuthHeader(),
  });
  return response.data;
};

export const sendMoney = async (toUserId: string, amount: number) => {
  const response = await axios.post(
    `${API_BASE}/transactions/send`,
    { toUserId, amount },
    { headers: getAuthHeader() }
  );
  return response.data;
};

