/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import axios from "axios";
import type { IUser } from "@/types/user";

const API_BASE = "http://localhost:3000/api";

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
    return <div className="text-center py-10 text-gray-600">Loading users...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-xl md:text-2xl font-bold text-indigo-700 mb-6 text-center md:text-left">All Users</h1>

      <div className="overflow-x-auto rounded-md shadow-sm">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead className="bg-indigo-100">
            <tr>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-semibold text-gray-700">#</th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-semibold text-gray-700">Name</th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-semibold text-gray-700">Email</th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-semibold text-gray-700">Role</th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="px-2 py-2 md:px-4 md:py-3">{index + 1}</td>
                <td className="px-2 py-2 md:px-4 md:py-3 truncate max-w-[120px] md:max-w-none">
                  {user.name || "N/A"}
                </td>
                <td className="px-2 py-2 md:px-4 md:py-3 truncate max-w-[180px] md:max-w-none">
                  {user.email}
                </td>
                <td className="px-2 py-2 md:px-4 md:py-3 capitalize">{user.role}</td>
                <td className="px-2 py-2 md:px-4 md:py-3">
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
