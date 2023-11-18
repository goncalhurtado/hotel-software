import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }
};

const PrivateRoutes = ({ setIsLogged }) => {
  useAuth();
  const isAuth = localStorage.getItem("token");

  useEffect(() => {
    if (isAuth) {
      setIsLogged(true);
    }
  }, [isAuth, setIsLogged]);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
