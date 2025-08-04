/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";
import useAuthAxios from "@/hooks/useAuthAxios";

const SettingsPage = () => {
  const { user, login } = useAuth();
  const axiosInstance = useAuthAxios();

  const [name, setName] = useState(user?.name || "");
  const [photo, setPhoto] = useState(""); // Optional

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.patch("/users/update-profile", {
        name,
        photo,
      });
      toast.success(response.data.message);

      // update context
      const updatedUser = { ...user, name, token: user?.token } as any;
      login(updatedUser);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Update failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4 py-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center text-indigo-600">Update Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Photo URL (optional)</label>
          <input
            type="text"
            className="w-full border p-2 rounded mt-1"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition w-full"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;

