import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import SelectCapacity from "./SelectCapacity";
import DatePickerBooking from "./DatePickerBooking";
import { axiosInstance } from "../config/axiosInstance";
import { getBookings } from "../helpers/booking";

const SearchForm = ({ setRooms }) => {
  const [showDate, setShowDate] = useState(false);

  const [dataForm, setDataForm] = useState({
    check_in: "",
    check_out: "",
    capacity: "",
  });
  const [date, setDate] = useState({
    start_date: "",
    end_date: "",
  });
  const [capacity, setCapacity] = useState(1);

  const handleSubmit = async () => {
    dataForm.check_in = date.start_date;
    dataForm.check_out = date.end_date;
    dataForm.capacity = capacity;
    try {
      const resp = await getBookings(dataForm, setRooms);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box>
        <Box display={"flex"}>
          {showDate && <DatePickerBooking date={date} setDate={setDate} />}
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
