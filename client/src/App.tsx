import './App.css'
import { NavBar } from './components/navigation/NavBar'
import { HomePage } from './components/home/HomePage'
import { Routes, Route } from "react-router-dom";
import { AdminLogin } from "./components/auth/AdminLogin";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { PrivateRoute } from "./components/admin/ProtectedRoute";
import { CreateAdmin } from './components/auth/CreateAdmin';
import { BibleStudyContent } from './components/BibleStudyContent';

export const App = () => {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path="/login" element={ <AdminLogin /> } />
        <Route path='/create-admin' element={ <CreateAdmin /> } />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
         <Route path="/admin/bible-studies" element={ 
          <PrivateRoute>
            <BibleStudyContent />
          </PrivateRoute>
         } />
      </Routes>
    </>
  )
}