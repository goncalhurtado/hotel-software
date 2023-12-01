import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import SelectCapacity from "./SelectCapacity";
import DatePickerBooking from "./DatePickerBooking";
import { LoadingButton } from "@mui/lab";
import { searchAvailableRooms } from "../helpers/createBooking";

const SearchForm = ({ setAvailables, selected, setSelected }) => {
  const [loading, setLoading] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [capacity, setCapacity] = useState(1);

  const [date, setDate] = useState({
    start_date: "",
    end_date: "",
  });

  const handleSubmit = async () => {
    setSelected({
      check_in: date.start_date,
      check_out: date.end_date,
      capacity: capacity,
    });

    const queryString = `search?check_in=${date.start_date}&check_out=${date.end_date}&capacity=${capacity}`;

    searchAvailableRooms(queryString, setLoading, setAvailables);
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
          <LoadingButton
            loading={!loading ? false : true}
            variant="contained"
            sx={{ marginTop: "15px" }}
            onClick={handleSubmit}
          >
            Search
          </LoadingButton>
        </Box>
      </Box>
    </>
  );
};

export default SearchForm;
