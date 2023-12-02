import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { arrivalTimes } from "../helpers/information";
import { LoadingButton } from "@mui/lab";
import { postBooking } from "../helpers/booking";

const BookingForm = ({ selected }) => {
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState({
  //   status: false,
  //   message: "",
  //   type: "",
  // });
  const [formData, setFormData] = useState({
    info: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      country: "",
      passportType: "",
      passport: "",
      arrivalTime: "",
      paymentMethod: "",
      additionalComments: "",
      paymentMethod: "",
      price: selected.category.price,
    },
    category: selected.category._id,
    check_in: selected.check_in,
    check_out: selected.check_out,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      info: {
        ...prevData.info,
        [name]: value,
      },
      category: selected.category._id,
      check_in: selected.check_in,
      check_out: selected.check_out,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(formData);

    postBooking(formData, setLoading);

    // const reservation = setBooking(formData);

    // try {
    //   const response = await axiosInstance.post("/booking", reservation);
    //   console.log("Reserva agregada:", response.data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          type="text"
          label="First Name"
          variant="outlined"
          name="firstName"
          onChange={handleChange}
        />
        <TextField
          type="text"
          label="Last Name"
          variant="outlined"
          name="lastName"
          onChange={handleChange}
        />
        <TextField
          type="phone"
          label="Phone"
          variant="outlined"
          name="phone"
          onChange={handleChange}
        />
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
        />
        <TextField
          type="adress"
          label="Country of Origin"
          variant="outlined"
          name="country"
          onChange={handleChange}
        />
        <FormControl variant="outlined">
          <InputLabel>Passport Type</InputLabel>
          <Select
            value={formData.info.passportType}
            onChange={handleChange}
            label="Passport Type"
            name="passportType"
          >
            <MenuItem value="Dni">Dni</MenuItem>
            <MenuItem value="Passport">Passport</MenuItem>
          </Select>
        </FormControl>

        <TextField
          type="number"
          label="Number"
          variant="outlined"
          name="passport"
          onChange={handleChange}
        />

        <FormControl variant="outlined">
          <InputLabel>Estimated Arrival Time</InputLabel>
          <Select
            label="Estimated Arrival Time"
            variant="outlined"
            name="arrivalTime"
            onChange={handleChange}
            value={formData.info.arrivalTime}
          >
            {arrivalTimes?.map((time) => (
              <MenuItem key={time.id} value={time.time}>
                {time.time}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel>Payment Method</InputLabel>
          <Select
            label="Payment Method"
            value={formData.info.paymentMethod}
            onChange={handleChange}
            name="paymentMethod"
          >
            <MenuItem value="Transfer">Transfer</MenuItem>
            <MenuItem disabled value="Credit Card">
              Credit Card
            </MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Additional Comments"
          variant="outlined"
          name="additionalComments"
          onChange={handleChange}
        />

        <LoadingButton
          loading={!loading ? false : true}
          variant="contained"
          sx={{ marginTop: "15px" }}
          onClick={handleSubmit}
        >
          Book
        </LoadingButton>
      </Box>
    </>
  );
};

export default BookingForm;
