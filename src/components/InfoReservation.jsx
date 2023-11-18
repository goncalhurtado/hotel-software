import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const InfoReservation = ({ selected }) => {
  const { category } = selected;

  return (
    <Box>
      <Typography>Usted selecciono la categoria {category.name}</Typography>
    </Box>
  );
};

export default InfoReservation;
