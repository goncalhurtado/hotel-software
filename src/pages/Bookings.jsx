import React from "react";
import SearchForm from "../components/SearchForm";
import { Box } from "@mui/material";
import { useState } from "react";
import RoomBookingCard from "../components/RoomBookingCard";
import Grid from "@mui/material/Grid";
import BookingPreview from "../components/BookingPreview";
import Reservation from "../components/Reservation";

const Bookings = () => {
  const [availables, setAvailables] = useState({
    categories: [],
    rooms: [],
  });

  const [selected, setSelected] = useState({
    selected: false,
    category: [],
    booked: false,
    check_in: "",
    check_out: "",
    capacity: "",
    nigths: "",
  });

  const [bookingDate, setBookingDate] = useState({});

  return (
    <div>
      {!selected.booked ? (
        <>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="10px"
          >
            <SearchForm
              setAvailables={setAvailables}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
          <Box>
            <Grid container>
              <Grid item lg={8}>
                <Grid container>
                  {availables.categories?.map((category) => (
                    <RoomBookingCard
                      key={category.id}
                      category={category}
                      setSelected={setSelected}
                      availables={availables}
                    />
                  ))}
                </Grid>
              </Grid>
              <Grid item lg={4}>
                <Grid container>
                  <BookingPreview
                    selected={selected}
                    setSelected={setSelected}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </>
      ) : (
        <>
          <Reservation selected={selected} />
        </>
      )}
    </div>
  );
};

export default Bookings;
