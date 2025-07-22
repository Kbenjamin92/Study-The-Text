import React from "react";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }: { children: React.ReactElement }) {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  return isAdmin ? children : <Navigate to="/login" />;
}
