import React from "react";
import NavbarAdmin from "./admin/NavbarAdmin";
import Navbar from "./Navbar";
import { is } from "date-fns/locale";

const Navegation = () => {
  const isLogged = localStorage.getItem("token");
  return <>{isLogged ? <NavbarAdmin /> : <Navbar />}</>;
};

export default Navegation;
