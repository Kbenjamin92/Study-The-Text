import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { AdminData } from "../interface";
import { useNavigate } from "react-router-dom";
import { toaster } from "../components/ui/toaster";
import { AdminContext } from "./AdminContext";
import axios from "axios";

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [data, setData] = useState<AdminData>({
    title: "",
    summary: "",
    file: null,
    categories: [],
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem("adminToken") !== null;
  });

  // Admin Signup
  const handleSignup = async () => {
    try {
      const res = await axios.post(`${API}/auth/register`, {
        firstName,
        lastName,
        username,
        password,
      });

      toaster.create({
        title: "Signup successful",
        description: `Welcome ${res.data.username}!`,
        type: "success",
      });
      setFirstName("");
      setLastName("");
      setUsername("");
      setPassword("");
      navigate("/login");
    } catch (err: any) {
      toaster.create({
        title: "Signup failed",
        description: err.response?.data?.message || "Error occurred",
        type: "error",
      });
    }
  }

  //  Admin Login
  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API}/auth/login`, {
        username,
        password,
      });

      const token = res.data.token;
      localStorage.setItem("adminToken", token);
      setIsAdmin(true);
      setUsername("");
      setPassword("");

      toaster.create({
        title: "Login successful",
        description: "Welcome admin!",
        type: "success",
      });
    } catch (err: any) {
      toaster.create({
        title: "Login failed",
        description: err.response?.data?.message || "Invalid credentials",
        type: "error",
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setIsAdmin(false);
    toaster.create({
      title: "Logged out",
      description: "Admin session ended",
      type: "info",
    });
    navigate("/");
  };

  useEffect(() => {
    if (isAdmin) {
      navigate("/admin");
    }
  }, [isAdmin, navigate]);

  return (
    <AdminContext.Provider
      value={{
        data,
        setData,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        username,
        setUsername,
        password,
        setPassword,
        handleLogin,
        isAdmin,
        setIsAdmin,
        logout,
        handleSignup
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
