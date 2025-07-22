import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { AdminData } from "../interface";
import { useNavigate } from "react-router-dom";
import { ADMIN_CREDENTIALS } from "../auth";
import { toaster } from "../components/ui/toaster"
import { AdminContext } from "./AdminContext";

// 2. Create provider
export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<AdminData>({
    title: "",
    summary: "",
    file: null,
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

//  add axios logic for backend and database integration

  const handleLogin = () => {
      if (
        username === ADMIN_CREDENTIALS.username &&
        password === ADMIN_CREDENTIALS.password
      ) {
        setIsAdmin(true);
      } else {
          toaster.create({
              title: "Login failed",
              description: "Incorrect username or password",
              type: "info",
      })
    }
  }

  useEffect(() => {
    if (isAdmin) {
      console.log("Admin:", isAdmin);
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    }
  }, [isAdmin, navigate]);

  return (
    <AdminContext.Provider value={{ 
      data, 
      setData,
      username,
      setUsername,
      password,
      setPassword,
      handleLogin,
      isAdmin,
      setIsAdmin, }}>
      {children}
    </AdminContext.Provider>
  );
}
