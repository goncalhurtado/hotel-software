import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// const useAuth = () => {
//     const token = localStorage.getItem("token");
//     const decode = jwtDecode(token);
//     console.log(decode);}

const PrivateRoutes = () => {
  const isAuth = localStorage.getItem("token");
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
