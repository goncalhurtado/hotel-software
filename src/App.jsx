import { React, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./Routes/PrivateRoutes";
import Login from "./pages/admin/Login";
import Navbar from "./components/Navbar";
import Bookings from "./pages/Bookings";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import Admin from "./pages/admin/Admin";
import AdminCategories from "./pages/admin/AdminCategories";

import AdminRooms from "./pages/admin/AdminRooms";
import AdminBookings from "./pages/admin/AdminBookings";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
        <Route element={<PrivateRoutes setIsLogged={setIsLogged} />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/bookings" element={<AdminBookings />} />
          <Route path="/admin/categories" element={<AdminCategories />} />
          <Route path="/admin/rooms" element={<AdminRooms />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
