import React from "react";
import { Routes, Route } from "react-router-dom";
import {Home,Login,EditUser,Profile,ViewUser} from '../components/pages/index'
function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditUser />} />
       <Route path="/profile" element={<Profile/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/view" element={<ViewUser/>}/>
      </Routes>
    </div>
  );
}
export default AppRoutes;
