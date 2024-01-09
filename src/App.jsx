import Box from "@mui/material/Box";
import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./Routes/PrivateRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bookings from "./pages/Bookings";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Admin from "./pages/admin/Admin";
import AdminBookings from "./pages/admin/AdminBookings";
import AdminCategories from "./pages/admin/AdminCategories";
import AdminContact from "./pages/admin/AdminContact";
import AdminRooms from "./pages/admin/AdminRooms";
import Login from "./pages/admin/Login";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
      <Box sx={{ minHeight: "80vh" }}>
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
            <Route path="/admin/contact" element={<AdminContact />} />
          </Route>
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
