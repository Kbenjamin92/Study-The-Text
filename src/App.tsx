import './App.css'
import { NavBar } from './components/NavBar'
import { HomePage } from './components/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminLogin } from "./components/AdminLogin";
import { AdminDashboard } from "./components/AdminDashboard";
import { PrivateRoute } from "./components/ProtectedRoute";

export const App = () => {

  return (
    <>
     <BrowserRouter>
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
    </BrowserRouter>
      <NavBar />
    </>
  )
}