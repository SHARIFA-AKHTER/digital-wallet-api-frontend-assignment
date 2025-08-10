
export type Role = "USER" | "ADMIN" | "AGENT";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: Role;
  isActive: "PENDING" | "ACTIVE" | "REJECTED" |"INACTIVE";
  createdAt: string;
  updatedAt: string;
  commissionRate?: number;
}