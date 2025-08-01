import AgentApproval from "./AgentApproval";

const AgentDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Agent Dashboard</h1>
      <p>Cash-In, Cash-Out and Commission History here.</p>
      <AgentApproval></AgentApproval>
    </div>
  );
};

export default AgentDashboard;
