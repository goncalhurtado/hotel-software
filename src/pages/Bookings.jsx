import React from "react";
import SearchForm from "../components/SearchForm";
import { Box } from "@mui/material";
import { useState } from "react";
import RoomBookingCard from "../components/RoomBookingCard";
import Grid from "@mui/material/Grid";
import BookingPreview from "../components/BookingPreview";

const Bookings = () => {
  const [rooms, setRooms] = useState({
    categories: [],
    rooms: [],
  });
  const [selected, setSelected] = useState({
    selected: false,
    category: [],
  });

  console.log(selected, "selected");
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="10px"
      >
        <SearchForm setRooms={setRooms} />
      </Box>
      <Box>
        <Grid container>
          <Grid item lg={8}>
            <Grid container>
              {rooms.categories?.map((category) => (
                <RoomBookingCard
                  key={category.id}
                  category={category}
                  setSelected={setSelected}
                />
              ))}
            </Grid>
          </Grid>
          <Grid item lg={4}>
            <Grid container>
              <BookingPreview selected={selected} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Bookings;