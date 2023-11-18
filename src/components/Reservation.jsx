import React from "react";
import BookingForm from "./BookingForm";
import InfoReservation from "./InfoReservation";

const Reservation = ({ selected }) => {
  return (
    <>
      <InfoReservation selected={selected} />
      <BookingForm selected={selected} />
    </>
  );
};

export default Reservation;
