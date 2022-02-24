import React from "react";
import { Routes, Route } from "react-router-dom";
import EditUser from "../components/pages/main/editUser/editUser";
import Home from "../components/pages/main/home/home";
import Login from "../components/pages/main/login";
import Profile from "../components/pages/main/profile/profile";
function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditUser />} />
       <Route path="/profile" element={<Profile/>}/> 
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}
export default AppRoutes;
