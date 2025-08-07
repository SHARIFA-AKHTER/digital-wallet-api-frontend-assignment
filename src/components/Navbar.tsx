
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth } from "@/context/AuthContext";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
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

  const roleColor = {
    admin: "bg-red-600",
    agent: "bg-yellow-500",
    user: "bg-green-600",
  };

  return (
    <header className="w-full bg-indigo-600 text-white shadow-md fixed top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-3">
      
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center space-x-2"
        >
          <img
            src="https://i.ibb.co/JRPKm4Tb/Degital-Wallet.jpg"
            alt="Digital Wallet Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="text-2xl font-extrabold tracking-wide">
            Digital<span className="text-yellow-300">Wallet</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-base lg:text-lg">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "pb-1 border-b-2 border-white font-semibold"
                    : "text-indigo-200 hover:text-white transition duration-150"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-sm text-indigo-100 truncate max-w-xs">
                {user.email}
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  roleColor[user.role]
                } text-white font-medium capitalize`}
              >
                {user.role}
              </span>
              <Button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="bg-white text-indigo-600 hover:bg-indigo-50 transition"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-white text-indigo-600 hover:bg-indigo-50 transition">
                  Login
                </Button>
              </Link>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-white text-indigo-600 hover:bg-indigo-50 transition">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
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
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-indigo-700 border-t border-indigo-500 animate-fadeIn">
          <ul className="flex flex-col space-y-3 px-6 py-5">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "block font-semibold text-white"
                      : "block text-indigo-200 hover:text-white transition"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="border-t border-indigo-500 px-6 py-4 flex flex-col space-y-3">
            {user ? (
              <>
                <div className="text-sm text-indigo-100">{user.email}</div>
                <span
                  className={`text-xs px-2 py-1 rounded-full inline-block w-fit ${
                    roleColor[user.role]
                  } text-white font-medium capitalize`}
                >
                  {user.role}
                </span>
                <Button
                  className="w-full bg-white text-indigo-600"
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-white text-indigo-600">
                    Login
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-white text-indigo-600">
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
