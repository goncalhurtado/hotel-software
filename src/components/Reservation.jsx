import React from "react";
import BookingForm from "./BookingForm";
import InfoReservation from "./InfoReservation";
import SuccessBooking from "./SuccessBooking";
import Box from "@mui/material/Box";
import { useState } from "react";
import Grid from "@mui/material/Grid";

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
        <Grid container direction="column">
          <Grid sx={{ display: "flex", justifyContent: "center" }} item>
            <InfoReservation selected={selected} />
          </Grid>

          <BookingForm selected={selected} setSuccessInfo={setSuccessInfo} />
        </Grid>
      ) : (
        <SuccessBooking info={successInfo} />
      )}
    </>
  );
};

export default Reservation;
