import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CarouselHome from "../components/home/CarouselHome";
import Benefits from "../components/home/Benefits";

const Home = () => {
  return (
    <Box>
      {/* <CarouselHome /> */}
      <Box>
        <Benefits />
      </Box>
    </Box>
  );
};

export default Home;
