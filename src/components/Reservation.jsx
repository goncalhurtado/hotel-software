import React from "react";
import BookingForm from "./BookingForm";
import InfoReservation from "./InfoReservation";
import SuccessBooking from "./SuccessBooking";
import { useState } from "react";

const Reservation = ({ selected }) => {
  const [successInfo, setSuccessInfo] = useState({
    status: false,
    firstName: "",
    email: "",
    bookingId: "",
  });
  return (
    <>
      {!successInfo.status ? (
        <>
          <InfoReservation selected={selected} />
          <BookingForm selected={selected} setSuccessInfo={setSuccessInfo} />
        </>
      ) : (
        <SuccessBooking info={successInfo} />
      )}
    </>
  );
};

export default Reservation;
