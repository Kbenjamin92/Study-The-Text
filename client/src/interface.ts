export interface AdminData {
  title: string;
  summary: string;
  file: File | null;
  categories: string[];
};

export interface AdminContextType {
  id?: string;
  firstName: string;
  lastName: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  username: string;
  password: string;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  handleLogin: () => void;
  logout: () => void;
  handleSignup: (data: AdminSignupInput) => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
  data: AdminData;
  setData: (newData: AdminData) => void;
  token?: string;
};

export interface AdminSignupInput {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmPassword?: string | null;
}


export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}