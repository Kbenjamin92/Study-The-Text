import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { AdminData } from "../interface";
import { useNavigate } from "react-router-dom";
import { toaster } from "../components/ui/toaster";
import { AdminContext } from "./AdminContext";
import type { AdminSignupInput } from "../interface";
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
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem("adminToken") !== null;
  });
  const [token, setToken] = useState();

  // Admin Signup
  const handleSignup = async (registerAdminData: AdminSignupInput) => {
   try {
    if (password !== confirmPassword) {
      toaster.create({
        title: "Passwords do not match",
        description: "Please make sure both password fields match.",
        type: "error",
      });
      return;
    }

    const res = await axios.post(`${API}/auth/register`, registerAdminData, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    console.log("Signup response:", res.data);

    toaster.create({
      title: "Signup successful",
      description: `Welcome ${res.data.username}!`,
      type: "success",
    });

    setFirstName("");
    setLastName("");
    setUsername("");
    setPassword("");
    setConfirmPassword(""); 
    navigate("/login");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    toaster.create({
      title: "Signup failed",
      description: err.response?.data?.message || "Error occurred",
      type: "error",
    });
  }
};


  //  Admin Login
  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API}/auth/login`, {
        username,
        password,
      });

      const token = res.data.token;
      localStorage.setItem("adminToken", token);
      setToken(token);
      setIsAdmin(true);
      setUsername("");
      setPassword("");

      toaster.create({
        title: "Login successful",
        description: "Welcome admin!",
        type: "success",
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        confirmPassword,
        setConfirmPassword,
        handleLogin,
        isAdmin,
        setIsAdmin,
        logout,
        handleSignup,
        token
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
