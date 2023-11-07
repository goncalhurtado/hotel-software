import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { axiosInstance } from "../config/axiosInstance";

import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const DatePickerBooking = () => {
  const getCapacity = async () => {
    try {
      const response = await axiosInstance.get("/categories");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCapacity();
  }, []);

  const [capacity, setCapacity] = useState(1);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [selected, setSelected] = useState({
    start_date: "",
    end_date: "",
  });

  const handleSelect = (ranges) => {
    const from = format(ranges.selection.startDate, "MM/dd/yyyy");
    const to = format(ranges.selection.endDate, "MM/dd/yyyy");

    setDateRange({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: "selection",
    });

    setSelected({ start_date: from, end_date: to });
  };

  const selectionRange = {
    startDate: dateRange.startDate,
    endDate: dateRange.endDate,
    key: "selection",
  };

  const handleChange = (event) => {
    setCapacity(event.target.value);
  };

  const handleDateChange = (newDateRange) => {
    setDateRange(newDateRange);
  };

  return (
    <form>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="10px"
      >
        <Box>
          <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Adults</InputLabel>
            <Select value={capacity} label="Adults" onChange={handleChange}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box marginTop="10px" marginLeft="15px">
          <Button variant="contained">Search</Button>
        </Box>
      </Box>
      <p>
        Seleccionado desde el {selected.start_date} hasta el {selected.end_date}
      </p>
    </form>
  );
};

export default DatePickerBooking;
