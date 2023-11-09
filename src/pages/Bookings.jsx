import React from "react";
import DatePickerBooking from "../components/DatePickerBooking";
import BookingForm from "../components/BookingForm";
import { Box } from "@mui/material";

const Bookings = () => {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="10px"
      >
        <Box></Box>
        <BookingForm />
      </Box>
    </div>
  );
};

export default Bookings;
