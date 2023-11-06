import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";
import RoomCard from "../components/RoomCard";
import Grid from "@mui/material/Grid";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  const getRooms = async () => {
    try {
      const response = await axiosInstance.get("/categories");
      setRooms(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRooms();
  }, []);

  return (
    <>
      <div>Habitaciones</div>
      <Grid container>
        {rooms?.map((room, index) => (
          <RoomCard room={room} key={index} />
        ))}
      </Grid>
    </>
  );
};

export default Rooms;
