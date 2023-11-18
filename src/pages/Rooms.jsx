import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";
import RoomCard from "../components/RoomCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  const getRooms = async () => {
    try {
      const response = await axiosInstance.get("/categories");
      setRooms(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRooms();
  }, []);

  return (
    <Box>
      <Box>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Rooms Categories
        </Typography>
        <Grid container>
          {rooms?.map((room, index) => (
            <RoomCard room={room} key={index} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Rooms;
