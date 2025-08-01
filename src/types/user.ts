export type Role = "USER" | "AGENT" | "ADMIN";

export type IsActive = "ACTIVE" | "INACTIVE" | "BLOCKED";

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  role: Role;
  isActive?: IsActive;
  isDeleted?: boolean;
  avatar?: string;
}
