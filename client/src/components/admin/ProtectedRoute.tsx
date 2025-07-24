import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function PrivateRoute({ children }: { children: React.ReactElement }) {
  const context = useAuth();
  if (!context) {
    throw new Error("useAdminContext must be used within AdminProvider");
  }
  const { token } = context;
  const isAdmin = localStorage.getItem("adminToken") === token;
  return isAdmin ? children : <Navigate to="/login" />;
}
