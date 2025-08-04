/* eslint-disable react-hooks/rules-of-hooks */
// ✅ Final correct version
import useAuthAxios from "@/hooks/useAuthAxios";
import type { IUser } from "@/types/user";


const axiosInstance = useAuthAxios();

export const fetchPendingAgents = async (): Promise<IUser[]> => {
  const res = await axiosInstance.get("/admin/agents/pending");
  return res.data?.data || []; // ✅ Safe fallback
};

export const approveAgentRequest = async (agentId: string) => {
  return axiosInstance.patch(`/admin/agents/approve/${agentId}`);
};

export const rejectAgentRequest = async (agentId: string) => {
  return axiosInstance.patch(`/admin/agents/reject/${agentId}`);
};

