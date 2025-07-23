export interface AdminData {
  title: string;
  summary: string;
  file: File | null;
};

export interface AdminContextType {
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  handleLogin: () => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
  data: AdminData;
  setData: (newData: AdminData) => void;
};
