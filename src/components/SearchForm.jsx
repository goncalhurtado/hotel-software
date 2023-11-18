import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import SelectCapacity from "./SelectCapacity";
import DatePickerBooking from "./DatePickerBooking";
import { axiosInstance } from "../config/axiosInstance";
import { getBookings } from "../helpers/booking";

const SearchForm = ({ setAvailables, selected }) => {
  const [showDate, setShowDate] = useState(false);
  const [capacity, setCapacity] = useState(1);

  const [date, setDate] = useState({
    start_date: "",
    end_date: "",
  });

  const handleSubmit = async () => {
    try {
      (selected.check_in = date.start_date),
        (selected.check_out = date.end_date),
        (selected.capacity = capacity),
        await getBookings(selected, setAvailables);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box>
        <Box display={"flex"}>
          <Box sx={{ display: showDate ? "block" : "none" }}>
            {<DatePickerBooking date={date} setDate={setDate} />}
          </Box>
          <a onClick={() => setShowDate(!showDate)}>
            {!showDate ? "Ver Fechas" : "Cerrar"}
          </a>
          <SelectCapacity capacity={capacity} setCapacity={setCapacity} />
        </Box>
        <Box marginTop="10px" marginLeft="15px">
          <Button variant="contained" onClick={handleSubmit}>
            Search
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SearchForm;
