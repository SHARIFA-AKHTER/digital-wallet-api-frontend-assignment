
// import { useState } from "react";
// import { useAuth } from "@/context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert("Please fill in all fields");
//       return;
//     }
//     console.log("Login data:", { email, password });

//     try {
//       const response = await fetch("http://localhost:3000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         alert(result.message || "Login failed");
//         return;
//       }

//       login({
//         email,
//         role: result.data.user.role.toLowerCase(), 
//         name: result.data.user.name,
//         token: result.data.accessToken,
//       });

//       const role = result.data.user.role.toLowerCase();

//       if (role === "admin") navigate("/dashboard/admin");
//       else if (role === "agent") navigate("/dashboard/agent");
//       else navigate("/dashboard/user");
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong, try again later.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 px-4 sm:px-6 lg:px-8">
//       <div className="w-full max-w-md md:max-w-lg lg:max-w-xl p-6 sm:p-8 bg-white rounded-2xl shadow-xl">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-700 mb-6">
//           Welcome Back
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label
//               htmlFor="email"
//               className="block mb-1 text-sm font-medium text-gray-700"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="password"
//               className="block mb-1 text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition-all duration-200"
//           >
//             Login
//           </button>
//         </form>

//         <p className="mt-6 text-sm text-center text-gray-600">
//           Don't have an account?{" "}
//           <Link
//             to="/register"
//             className="text-indigo-600 font-medium hover:underline"
//           >
//             Register here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import { useState } from "react";
// import { useAuth } from "@/context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert("Please fill in all fields");
//       return;
//     }

//     console.log("Login data:", { email, password });

//     try {
//       const response = await fetch("http://localhost:3000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         alert(result.message || "Login failed");
//         return;
//       }

//       const userRole = result.data.user.role; 

 
//       login({
//         email: result.data.user.email,
//         role: userRole,
//         name: result.data.user.name,
//         token: result.data.accessToken,
//       });

  
//       switch (userRole) {
//         case "ADMIN":
//           navigate("/dashboard/admin");
//           break;
//         case "AGENT":
//           navigate("/dashboard/agent");
//           break;
//         default:
//           navigate("/dashboard/user");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong, try again later.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 px-4 sm:px-6 lg:px-8">
//       <div className="w-full max-w-md md:max-w-lg lg:max-w-xl p-6 sm:p-8 bg-white rounded-2xl shadow-xl">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-700 mb-6">
//           Welcome Back
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label
//               htmlFor="email"
//               className="block mb-1 text-sm font-medium text-gray-700"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="password"
//               className="block mb-1 text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition-all duration-200"
//           >
//             Login
//           </button>
//         </form>

//         <p className="mt-6 text-sm text-center text-gray-600">
//           Don't have an account?{" "}
//           <Link
//             to="/register"
//             className="text-indigo-600 font-medium hover:underline"
//           >
//             Register here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const API = import.meta.env.VITE_API_URL || "http://localhost:3000";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const { data } = await axios.post(
        `${API}/api/auth/login`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const userRole = data?.data?.user?.role;

      login({
        email: data.data.user.email,
        role: userRole,
        name: data.data.user.name,
        token: data.data.accessToken,
      });

      switch (userRole) {
        case "ADMIN":
          navigate("/dashboard/admin");
          break;
        case "AGENT":
          navigate("/dashboard/agent");
          break;
        default:
          navigate("/dashboard/user");
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "Login failed");
      } else {
        alert("Something went wrong, try again later.");
      }
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl p-6 sm:p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-700 mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition-all duration-200"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 font-medium hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;