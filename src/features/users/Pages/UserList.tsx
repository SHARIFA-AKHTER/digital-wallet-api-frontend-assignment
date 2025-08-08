/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import axios from "axios";
import type { IUser } from "@/types/user";

const API_BASE = "https://digital-wallet-api-backend.vercel.app/api";

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const authUser = localStorage.getItem("authUser");

      if (!authUser) {
        setError("❌ No token found. Please login.");
        setLoading(false);
        return;
      }

      const { token } = JSON.parse(authUser);

      try {
        const res = await axios.get<ApiResponse<IUser[]>>(`${API_BASE}/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsers(res.data.data);
      } catch (err: any) {
        console.error("Error fetching users:", err);
        setError(err?.response?.data?.message || "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-600">Loading users...</div>
    );
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      <h1 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-6 text-center sm:text-left">
        👥 All Users
      </h1>

      <div className="w-full overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-100">
            <tr>
              <th className="px-3 py-2 text-left text-xs sm:text-sm hidden  font-semibold text-gray-700 whitespace-nowrap">
                #
              </th>
              <th className="px-3 py-2 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                Name
              </th>
              <th className="px-3 py-2 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap hidden md:table-cell">
                Email
              </th>
              <th className="px-3 py-2 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap hidden sm:table-cell">
                Role
              </th>
              <th className="px-3 py-2 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
            {users.map((user, index) => (
              <tr key={user._id} className="hover:bg-gray-50 transition">
                <td className="px-3 hidden   py-2">{index + 1}</td>
                <td className="px-3 py-2 max-w-[120px] sm:max-w-none overflow-hidden text-ellipsis whitespace-nowrap">
                  {user.name || "N/A"}
                </td>
                <td className="px-3 py-2 max-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap hidden md:table-cell">
                  {user.email}
                </td>
                <td className="px-3 py-2 capitalize whitespace-nowrap hidden sm:table-cell">
                  {user.role}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                      user.isActive === "ACTIVE"
                        ? "bg-green-100 text-green-700"
                        : user.isActive === "INACTIVE"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.isActive}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <div className="text-center py-8 text-gray-500">No users found.</div>
        )}
      </div>
    </div>
  );
};

export default UserList;
