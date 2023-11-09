import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import SelectCapacity from "./SelectCapacity";
import DatePickerBooking from "./DatePickerBooking";
import { axiosInstance } from "../config/axiosInstance";
import { getBookings } from "../helpers/booking";

const BookingForm = () => {
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
    // console.log(dataForm);
    const resp = await getBookings(dataForm);

    // try {

    //   const response = await axiosInstance.get("/categories");
    //   const { data } = response;
    //   console.log(data);
    //   //   const filteredCategories = categories.filter(category => category.capacity === dataForm.capacity);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <Box>
        <Box display={"flex"}>
          <DatePickerBooking date={date} setDate={setDate} />
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

export default BookingForm;
