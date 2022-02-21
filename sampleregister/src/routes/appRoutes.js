import React from "react";
import { Routes, Route } from "react-router-dom";
import EditUser from "../components/pages/main/editUser/editUser";
import Home from "../components/pages/main/home/home";
import { Profile } from "../components/pages/main/profile/profile";
function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditUser />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
export default AppRoutes;
