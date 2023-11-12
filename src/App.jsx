import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Bookings from "./pages/Bookings";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import Admin from "./pages/admin/Admin";
import NavbarAdmin from "./components/admin/NavbarAdmin";
import AdminRooms from "./pages/admin/AdminRooms";
import AdminBookings from "./pages/admin/AdminBookings";

function App() {
  const location = useLocation();

  // Comprueba si la ruta actual es "/admin"
  const isAdminRoute = location.pathname.includes("/admin");

  return (
    <>
      {/* Utiliza un ternario para decidir qué Navbar renderizar */}
      {isAdminRoute ? <NavbarAdmin /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />
        <Route path="/admin/rooms" element={<AdminRooms />} />
      </Routes>
    </>
  );
}

export default App;
