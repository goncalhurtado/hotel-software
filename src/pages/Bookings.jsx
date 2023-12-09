import React, { useState } from "react";
import { Box } from "@mui/material";
import SearchForm from "../components/booking/search/SearchForm";
import RoomBookingCard from "../components/booking/RoomBookingCard";
import RoomBookingCardSoldOut from "../components/booking/RoomBookingCardSoldOut";
import BookingPreview from "../components/booking/BookingPreview";
import Grid from "@mui/material/Grid";
import Reservation from "../components/Reservation";

const Bookings = () => {
  const [availables, setAvailables] = useState({
    categories: [],
    rooms: [], //rooms solo para poder confirmar las reservas restantes, despues lo puedo eliminar
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
                  {availables.categories.availables?.map((category) => (
                    <RoomBookingCard
                      key={category._id}
                      category={category}
                      setSelected={setSelected}
                      // availables={availables}
                    />
                  ))}
                  {availables.categories.soldout?.map((category) => (
                    <RoomBookingCardSoldOut
                      key={category._id}
                      category={category}
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
