import React from "react";
import SearchForm from "../components/SearchForm";
import { Box } from "@mui/material";
import { useState } from "react";
import RoomBookingCard from "../components/RoomBookingCard";

const Bookings = () => {
  const [rooms, setRooms] = useState({
    categories: [],
    rooms: [],
  });
  console.log(rooms);
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="10px"
      >
        <Box></Box>
        <SearchForm setRooms={setRooms} />

        <>
          {rooms.categories?.map((room) => (
            <RoomBookingCard key={room.id} room={room} />
          ))}
        </>
      </Box>
    </div>
  );
};

export default Bookings;
