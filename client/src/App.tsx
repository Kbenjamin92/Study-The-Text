import './App.css'
import { NavBar } from './components/navigation/NavBar'
import { HomePage } from './components/home/HomePage'
import { Routes, Route } from "react-router-dom";
import { AdminLogin } from "./components/auth/AdminLogin";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { PrivateRoute } from "./components/admin/ProtectedRoute";

export const App = () => {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}