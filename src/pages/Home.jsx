import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CarouselHome from "../components/home/CarouselHome";
import Benefits from "../components/home/Benefits";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <CarouselHome />
      <Box
        padding={{ xs: 1, sm: 15 }}
        paddingTop={{ xs: 5 }}
        paddingBottom={{ xs: 5 }}
      >
        <Typography variant="h4" textAlign={"center"}>
          Welcome to Hotel Goncal
        </Typography>
        <Typography variant="body1" textAlign={"center"}>
          We are a hotel located in Buenos Aires, Argentina. We offer the best
          service and the best prices.
        </Typography>
      </Box>
      <Box>
        <Benefits />
      </Box>
      <Box>
        <Typography
          variant="h4"
          textAlign={"center"}
          padding={{ xs: 3, sm: 10 }}
        >
          Don't keep waiting,{" "}
          <a
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => navigate("/bookings")}
          >
            book with us now.
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
