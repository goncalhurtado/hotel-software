import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import { nightsCalculator } from "../helpers/booking";

const InfoReservation = ({ selected }) => {
  const { category } = selected;
  // console.log(selected);
  // const nights = nightsCalculator(selected.check_in, selected.check_out);

  return (
    <Box>
      <Typography>You select the category {category.name}</Typography>
      <Typography>Check in: {selected.check_in}</Typography>
      <Typography>Check out: {selected.check_out}</Typography>
      <Typography>Nights: {nights}</Typography>
      {/* <Typography>Price per night: ${category.price}</Typography> */}
      <Typography variant="h6">
        {/* Total: <b>${category.price * nights}</b> */}
      </Typography>
    </Box>
  );
};

export default InfoReservation;
