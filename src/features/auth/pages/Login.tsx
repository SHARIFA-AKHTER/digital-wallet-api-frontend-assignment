
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

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
    console.log("Login data:", { email, password });

    try {
      const response = await fetch("https://digital-wallet-api-backend.vercel.app/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Login failed");
        return;
      }

      login({
        email,
        role: result.data.user.role.toLowerCase(), 
        name: result.data.user.name,
        token: result.data.accessToken,
      });

      const role = result.data.user.role.toLowerCase();

      if (role === "admin") navigate("/dashboard/admin");
      else if (role === "agent") navigate("/dashboard/agent");
      else navigate("/dashboard/user");
    } catch (error) {
      console.error(error);
      alert("Something went wrong, try again later.");
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

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useLogin } from "../hooks/useLogin";

// const Login = () => {
//   const navigate = useNavigate();
//   const { loginHandler, loading, error } = useLogin();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert("Please fill in all fields");
//       return;
//     }

//     const success = await loginHandler({ email, password });
//     if (success) {
//       // তোমার useLogin হুক থেকে ইউজারের রোল নিতে পারলে, নিচের মতো নেভিগেট করবে
//       // ধরো তুমি useAuth থেকে user পাওয়া যাবে, অথবা loginHandler রিটার্ন করবে user info

//       // এখানে সরল উদাহরণ হিসেবে localStorage থেকে ইউজার রোল নিয়ে নিলাম
//       const authUserStr = localStorage.getItem("authUser");
//       if (!authUserStr) return;

//       const authUser = JSON.parse(authUserStr);
//       if (authUser.role === "admin") {
//         navigate("/dashboard/admin");
//       } else if (authUser.role === "agent") {
//         navigate("/dashboard/agent");
//       } else {
//         navigate("/dashboard/user");
//       }
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 px-4">
//       <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl animate-fadeInUp">
//         <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
//           Welcome Back
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
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
//             <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
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
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         {error && (
//           <p className="text-red-600 text-center mt-4">{error}</p>
//         )}

//         <p className="mt-6 text-sm text-center text-gray-600">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-indigo-600 font-medium hover:underline">
//             Register here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
