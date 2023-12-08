import React, { useEffect, useState } from "react";
import TableBookings from "../../components/admin/bookings/TableBookings";
import { axiosInstance } from "../../config/axiosInstance";
import ModalBookings from "../../components/admin/bookings/ModalBookings";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [modal, setModal] = useState({ action: false, data: {} });

  const getBookings = async () => {
    try {
      const response = await axiosInstance.get("/bookings");

      setBookings(response.data.formattedBookings);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBookings();
  }, []);
  return (
    <>
      <TableBookings bookings={bookings} setModal={setModal} />
      <ModalBookings setModal={setModal} modal={modal} />
    </>
  );
};

export default AdminBookings;
