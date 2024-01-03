import React from "react";
import BenefitsItem from "./BenefitsItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SellIcon from "@mui/icons-material/Sell";
import LockIcon from "@mui/icons-material/Lock";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import Grid from "@mui/material/Grid";

const Benefits = () => {
  const benefits = [
    {
      title: "FREE CANCELLATION",
      description: "Cancel up to 7 days before your arrival at no cost",
      img: <CheckCircleIcon sx={{ fontSize: "50px" }} />,
    },
    {
      title: "BEST ONLINE PRICE",
      description: "Always the best price on our website",
      img: <SellIcon sx={{ fontSize: "50px" }} />,
    },
    {
      title: "SECURE BOOKINGS",
      description: "Make your reservation securely on our website",
      img: <LockIcon sx={{ fontSize: "50px" }} />,
    },
    {
      title: "PAY AT THE HOTEL",
      description: "No charges until your arrival (according to the rate)",
      img: <RoomServiceIcon sx={{ fontSize: "50px" }} />,
    },
  ];
  return (
    <Box sx={{ backgroundColor: "#262626", padding: "20px" }}>
      <Box sx={{ paddingBottom: "20px" }}>
        <Typography textAlign={"center"} variant="h5" color="#FFFFFF">
          BENEFITS OF BOOKING WITH US
        </Typography>
        <Typography textAlign={"center"} variant="h6" color="#9E9E9E">
          The best rate is here
        </Typography>
      </Box>
      <Grid container display={"flex"} justifyContent={"center"}>
        {benefits.map((benefit, index) => {
          return (
            <Grid item key={index} sx={{ padding: "20px" }}>
              <BenefitsItem data={benefit} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Benefits;
