import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import SearchForm from "../components/booking/search/SearchForm";
import RoomBookingCard from "../components/booking/RoomBookingCard";
import RoomBookingCardSoldOut from "../components/booking/RoomBookingCardSoldOut";
import BookingPreview from "../components/booking/BookingPreview";
import Grid from "@mui/material/Grid";
import Reservation from "../components/Reservation";
import { nightsCalculator } from "../helpers/booking.js";

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
    nigths: 0,
  });
  // console.log(selected);

  useEffect(() => {
    setSelected((prevSelected) => ({
      ...prevSelected,
      nights: nightsCalculator(prevSelected.check_in, prevSelected.check_out),
      // price:
      // prevSelected.category.price *
      // nightsCalculator(prevSelected.check_in, prevSelected.check_out),
    }));
  }, [selected.check_in, selected.check_out]);

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
            <Grid
              container
              sx={{
                display: { xs: "flex", md: "flex" },
                flexDirection: { xs: "column-reverse", md: "initial" },
              }}
            >
              <Grid item xs={12} sm={12} md={8}>
                <Grid container>
                  {availables.categories.availables?.map((category) => (
                    <RoomBookingCard
                      key={category._id}
                      category={category}
                      setSelected={setSelected}
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
              <Grid item xs={12} sm={12} md={4}>
                <Grid
                  sx={{
                    display: { xs: "flex", md: "initial" },
                    justifyContent: { xs: "center", md: "initial" },
                    marginBottom: "20px",
                  }}
                >
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
