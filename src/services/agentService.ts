import type { IUser } from "@/types/user";
import axios from "axios";

const API_BASE = "http://localhost:3000/"; 

export const fetchPendingAgents = async (): Promise<IUser[]> => {
  const res = await axios.get(`${API_BASE}/agents/pending`);
  return res.data;
};

export const approveAgentRequest = async (id: string) => {
  await axios.patch(`${API_BASE}/agents/approve/${id}`);
};

export const rejectAgentRequest = async (id: string) => {
  await axios.patch(`${API_BASE}/agents/reject/${id}`);
};

