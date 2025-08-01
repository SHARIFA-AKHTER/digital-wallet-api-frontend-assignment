// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Button } from "./ui/button";
// import { useAuth } from "@/context/AuthContext";

// export const Navbar = () => {
//   const { user, logout } = useAuth();
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Wallet", path: "/wallet" },
//     { name: "Transactions", path: "/transactions" },
//     { name: "Dashboard", path: "/dashboard/admin" },
//   ];

//   return (
//     <header className="w-full border-b bg-indigo-600 shadow-md fixed top-0 left-0 z-50">
//       <nav className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-white text-2xl font-extrabold tracking-wide"
//         >
//           DigitalWallet
//         </Link>

//         {/* Desktop Nav Links */}
//         <ul className="hidden md:flex space-x-8">
//           {navItems.map((item) => (
//             <li key={item.name}>
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-white font-semibold border-b-2 border-white pb-0.5"
//                     : "text-indigo-200 hover:text-white transition"
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Auth Buttons Desktop */}
//         <div className="hidden md:flex items-center space-x-4">
//           {user ? (
//             <>
//               <span className="text-indigo-200 truncate max-w-xs">
//                 {user.email}
//               </span>
//               <Button
                
//                 onClick={logout}
//                 className=" bg-white text-indigo-600 hover:bg-indigo-50"
//               >
//                 Log Out
//               </Button>
//             </>
//           ) : (
//             <>
//               <Link to="/login">
//                 <Button
                  
//                   className="bg-white text-indigo-600 hover:bg-indigo-50"
//                 >
//                   Login
//                 </Button>
//               </Link>
//               <Link to="/register">
//                 <Button className="bg-white text-indigo-600 hover:bg-indigo-50">
//                   Register
//                 </Button>
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Mobile Hamburger Button */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={() => setMobileMenuOpen((prev) => !prev)}
//           aria-label="Toggle menu"
//         >
//           {isMobileMenuOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <line x1="18" y1="6" x2="6" y2="18" />
//               <line x1="6" y1="6" x2="18" y2="18" />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <line x1="3" y1="12" x2="21" y2="12" />
//               <line x1="3" y1="6" x2="21" y2="6" />
//               <line x1="3" y1="18" x2="21" y2="18" />
//             </svg>
//           )}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-indigo-700 border-t border-indigo-500 shadow-lg">
//           <ul className="flex flex-col space-y-2 px-4 py-4">
//             {navItems.map((item) => (
//               <li key={item.name}>
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     isActive
//                       ? "block text-white font-semibold"
//                       : "block text-indigo-200 hover:text-white transition"
//                   }
//                   onClick={() => setMobileMenuOpen(false)} // close menu on click
//                 >
//                   {item.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//           <div className="border-t border-indigo-500 px-4 py-4 flex flex-col space-y-2">
//             {user ? (
//               <>
//                 <span className="text-indigo-200 truncate max-w-full">
//                   {user.email}
//                 </span>
//                 <Button
//                   className="w-full bg-white text-indigo-600 border border-indigo-600 font-medium"
//                   onClick={() => {
//                     logout();
//                     setMobileMenuOpen(false);
//                   }}
//                 >
//                   Log Out
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
//                   <Button className="w-full bg-white text-indigo-600 border border-indigo-600 font-medium">
//                     Login
//                   </Button>
//                 </Link>
//                 <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
//                   <Button className="w-full bg-white text-indigo-600 border border-indigo-600 font-medium">
//                     Register
//                   </Button>
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };


import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth } from "@/context/AuthContext";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Wallet", path: "/wallet" },
    { name: "Transactions", path: "/transactions" },
    {
      name: "Dashboard",
      path:
        user?.role === "admin"
          ? "/dashboard/admin"
          : user?.role === "agent"
          ? "/dashboard/agent"
          : "/dashboard/user",
    },
  ];

  return (
    <header className="w-full border-b bg-indigo-600 shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-2xl font-extrabold tracking-wide"
          onClick={() => setMobileMenuOpen(false)}
        >
          DigitalWallet
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-base lg:text-lg">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-semibold border-b-2 border-white pb-0.5"
                    : "text-indigo-200 hover:text-white transition"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Auth Buttons Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-indigo-200 truncate max-w-xs">{user.email}</span>
              <Button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="bg-white text-indigo-600 hover:bg-indigo-50"
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-white text-indigo-600 hover:bg-indigo-50">Login</Button>
              </Link>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-white text-indigo-600 hover:bg-indigo-50">Register</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-indigo-700 border-t border-indigo-500 shadow-lg animate-fadeIn">
          <ul className="flex flex-col space-y-3 px-6 py-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "block text-white font-semibold"
                      : "block text-indigo-200 hover:text-white transition"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="border-t border-indigo-500 px-6 py-4 flex flex-col space-y-3">
            {user ? (
              <>
                <span className="text-indigo-200 truncate max-w-full">{user.email}</span>
                <Button
                  className="w-full bg-white text-indigo-600 border border-indigo-600 font-medium"
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                >
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-white text-indigo-600 border border-indigo-600 font-medium">
                    Login
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-white text-indigo-600 border border-indigo-600 font-medium">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
