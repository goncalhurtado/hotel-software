import React, { useEffect, useState } from "react";
import TableBookings from "../../components/admin/bookings/TableBookings";
import { axiosInstance } from "../../config/axiosInstance";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

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
      <TableBookings bookings={bookings} />
    </>
  );
};

export default AdminBookings;
