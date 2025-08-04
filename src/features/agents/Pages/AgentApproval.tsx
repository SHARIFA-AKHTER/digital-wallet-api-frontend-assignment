/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { IUser } from "@/types/user";
import {
  approveAgentRequest,
  fetchPendingAgents,
  rejectAgentRequest,
} from "@/services/agentService";
import { Button } from "@/components/ui/button";

const AgentApproval = () => {
  const [pendingAgents, setPendingAgents] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  const loadAgents = async () => {
    try {
      setLoading(true);
      const data = await fetchPendingAgents();

      if (Array.isArray(data)) {
        setPendingAgents(data);
      } else {
        setPendingAgents([]);
        toast.warn("Unexpected data format received");
      }
    } catch (err) {
      toast.error("Failed to fetch agent requests");
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    try {
      await approveAgentRequest(id);
      toast.success("Agent approved successfully");
      loadAgents();
    } catch {
      toast.error("Failed to approve agent");
    }
  };

  const handleReject = async (id: string) => {
    try {
      await rejectAgentRequest(id);
      toast.success("Agent rejected");
      loadAgents();
    } catch {
      toast.error("Failed to reject agent");
    }
  };

  useEffect(() => {
    loadAgents();
  }, []);

  return (
    <div className="p-4 md:p-6 lg:p-10 bg-white shadow-md rounded-md animate-fadeIn min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6 text-center">
        Agent Approval Requests
      </h2>

      {loading ? (
        <p className="text-gray-500 text-center">Loading...</p>
      ) : pendingAgents.length === 0 ? (
        <p className="text-gray-500 text-center">No pending agent requests found.</p>
      ) : (
        <div className="space-y-4">
          {pendingAgents.map((agent) => (
            <div
              key={agent._id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gray-50 border border-gray-200 p-4 rounded-md shadow-sm"
            >
              <div className="flex-1">
                <p className="text-lg font-semibold text-gray-800">{agent.name}</p>
                <p className="text-sm text-gray-600">{agent.email}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => handleApprove(agent._id)}
                  className="bg-green-600 text-white hover:bg-green-700 transition"
                >
                  Approve
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => handleReject(agent._id)}
                >
                  Reject
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AgentApproval;
