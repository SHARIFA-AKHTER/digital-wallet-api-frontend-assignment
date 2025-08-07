import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold mb-2">DigitalWallet</h2>
            <p className="text-indigo-200 text-sm">
              Manage your money effortlessly. Secure, fast, and easy to use.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-indigo-100 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              {/* <li><Link to="/dashboard/wallet" className="hover:text-white transition">Wallet</Link></li>
              <li><Link to="/transactions" className="hover:text-white transition">Transactions</Link></li> */}
              <li><Link to="/dashboard/user" className="hover:text-white transition">Dashboard</Link></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
            <p className="mt-4 text-sm text-indigo-200">Contact: support@digitalwallet.com</p>
          </div>

        </div>

        {/* Divider + Bottom */}
        <div className="mt-8 border-t border-indigo-400 pt-4 text-sm text-indigo-200 text-center">
          © {new Date().getFullYear()} DigitalWallet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// import { Link } from "react-router-dom";
// import { Facebook, Twitter, Instagram } from "lucide-react";
// import { useAuth } from "@/context/AuthContext";

// const Footer = () => {
//   const { user } = useAuth();

//   // Determine dashboard path based on role
//   const dashboardPath =
//     user?.role === "admin"
//       ? "/dashboard/admin"
//       : user?.role === "agent"
//       ? "/dashboard/agent"
//       : "/dashboard/user";

//   return (
//     <footer className="bg-indigo-600 text-white mt-12">
//       <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//           {/* Brand Info */}
//           <div>
//             <h2 className="text-2xl font-bold mb-2">DigitalWallet</h2>
//             <p className="text-indigo-200 text-sm">
//               Manage your money effortlessly. Secure, fast, and easy to use.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
//             <ul className="space-y-2 text-indigo-100 text-sm">
//               <li>
//                 <Link to="/" className="hover:text-white transition">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/wallet" className="hover:text-white transition">
//                   Wallet
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/transactions" className="hover:text-white transition">
//                   Transactions
//                 </Link>
//               </li>

//               {/* Show Dashboard link only if user is logged in */}
//               {user && (
//                 <li>
//                   <Link to={dashboardPath} className="hover:text-white transition">
//                     Dashboard
//                   </Link>
//                 </li>
//               )}
//             </ul>
//           </div>

//           {/* Social & Contact */}
//           <div>
//             <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-white"
//               >
//                 <Facebook size={20} />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-white"
//               >
//                 <Twitter size={20} />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-white"
//               >
//                 <Instagram size={20} />
//               </a>
//             </div>
//             <p className="mt-4 text-sm text-indigo-200">
//               Contact: support@digitalwallet.com
//             </p>
//           </div>
//         </div>

//         {/* Divider + Bottom */}
//         <div className="mt-8 border-t border-indigo-400 pt-4 text-sm text-indigo-200 text-center">
//           © {new Date().getFullYear()} DigitalWallet. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
