import React, { useEffect, useState } from "react";
import TableBookings from "../../components/admin/bookings/TableBookings";
import { axiosInstance } from "../../config/axiosInstance";
import ModalBookings from "../../components/admin/bookings/ModalBookings";
import EditBooking from "../../components/admin/bookings/EditBooking";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [modal, setModal] = useState({ action: false, data: {} });
  const [editing, setEditing] = useState({ status: false, data: {} });

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
      {!editing.status ? (
        <TableBookings
          bookings={bookings}
          setModal={setModal}
          setEditing={setEditing}
        />
      ) : (
        <EditBooking editing={editing} setEditing={setEditing} />
      )}

      <ModalBookings setModal={setModal} modal={modal} />
    </>
  );
};

export default AdminBookings;
