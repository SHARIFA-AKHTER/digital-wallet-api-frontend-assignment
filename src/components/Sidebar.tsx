// import { useUserRole } from "@/hooks/useUserRole";
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {

//   const { isAdmin } = useUserRole();
//   return (
//     <aside className="w-full md:w-64 bg-gray-100 p-4 shadow-sm">
//       <ul className="space-y-3">
//         <li>
//           <NavLink to="/dashboard/admin" className="block text-gray-700 hover:text-primary">Dashboard Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/dashboard/wallet" className="block text-gray-700 hover:text-primary">My Wallet</NavLink>
//         </li>
//         <li>
//           <NavLink to="/dashboard/transactions" className="block text-gray-700 hover:text-primary">Transactions</NavLink>
//         </li>
//         <li>
//           <NavLink to="/dashboard/settings" className="block text-gray-700 hover:text-primary">Settings</NavLink>
//         </li>
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;

import { useUserRole } from "@/hooks/useUserRole";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { isAdmin, isAgent, isUser } = useUserRole();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "block text-indigo-600 font-semibold"
      : "block text-gray-700 hover:text-indigo-600 transition";

  return (
    <aside className="w-full md:w-64 bg-gray-100 p-4 shadow-sm min-h-screen">
      <nav>
        <ul className="space-y-3 text-base">
          {/* Common to all roles */}
          <li>
            <NavLink to="/dashboard/user" className={linkClass}>
              Dashboard Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/user/wallet" className={linkClass}>
              My Wallet
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/user/transactions" className={linkClass}>
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>

          {/* Admin-only route */}
          {isAdmin && (
            <li>
              <NavLink to="/dashboard/admin/settings" className={linkClass}>
                Settings
              </NavLink>
            </li>
          )}

          {/* Agent-only route */}
          {isAgent && (
            <li>
              <NavLink to="/dashboard/agent/agent-commission" className={linkClass}>
                Commission History
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
