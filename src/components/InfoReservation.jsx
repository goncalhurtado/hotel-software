import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const InfoReservation = ({ selected }) => {
  const { category, check_in, check_out, nights, price } = selected;

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "331px", sm: "464px", md: "464px" },
        marginTop: "20px",
        backgroundColor: "#dadadb",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          marginLeft: "10px",
        }}
      >
        <Typography>Reservation Info</Typography>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          "& > *": {
            marginLeft: "10px",
          },
        }}
      >
        <Typography>You select the category {category.name}</Typography>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          "& > *": {
            marginLeft: "10px",
          },
        }}
      >
        <Box textAlign={"center"}>
          <Typography>Check in:</Typography>
          <Typography>{check_in}</Typography>
        </Box>
        <Box textAlign={"center"}>
          <Typography>Check out:</Typography>
          <Typography>{check_out}</Typography>
        </Box>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          "& > *": {
            marginLeft: "10px",
          },
        }}
      >
        <Typography>Capacity: {category.capacity}</Typography>
        <Typography>Nights: {nights}</Typography>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          "& > *": {
            marginLeft: "10px",
          },
        }}
      >
        <Typography variant="h6">
          Total Price: <b>${price}</b>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default InfoReservation;
