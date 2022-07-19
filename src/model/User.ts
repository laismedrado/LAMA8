
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}
export interface UserInputDTO {
  email: string;
  password: string;
  name: string;
  role: UserRole;
}

export interface LoginInputDTO {
  email: string;
  password: string;
}

export enum UserRole {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}


