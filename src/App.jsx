import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
const App = () => {
  return (
    <>

      <Routes>
        <Route element={<Mainlayout />}>
          <Route path="/" element={<Navigate to={"/dashboard"} replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />

        </Route>
      </Routes>


    </>
  )
}
export default App