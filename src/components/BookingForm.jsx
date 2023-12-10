import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { arrivalTimes } from "../helpers/information";
import { LoadingButton } from "@mui/lab";
import { postBooking } from "../helpers/booking";
import Grid from "@mui/material/Grid";

const BookingForm = ({ selected, setSuccessInfo }) => {
  const [loading, setLoading] = useState(false);
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
      paymentStatus: "pending",
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
  const handleChangeEmail = (e) => {
    const { name, value } = e.target;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    postBooking(formData, setLoading, setSuccessInfo);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          // "& > :not(style)": { m: 1, width: "25ch" },
          width: { xs: "90%", sm: "90%", md: "600px" },
          margin: "auto",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            display: "flex",
            justifyContent: "center",
            width: "100%",
            "& > *": {
              margin: "10px",
            },
          }}
        >
          <TextField
            type="text"
            label="First Name"
            variant="outlined"
            name="firstName"
            onChange={handleChange}
            sx={{
              marginRight: { xs: 0, sm: "40px", md: "40px" },
            }}
          />
          <TextField
            type="text"
            label="Last Name"
            variant="outlined"
            name="lastName"
            onChange={handleChange}
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            display: "flex",
            justifyContent: "center",
            "& > *": {
              margin: "10px",
            },
          }}
        >
          <TextField
            type="phone"
            label="Phone"
            variant="outlined"
            name="phone"
            onChange={handleChange}
            sx={{
              marginRight: { xs: 0, sm: "40px", md: "40px" },
            }}
          />
          <TextField
            type="adress"
            label="Country of Origin"
            variant="outlined"
            name="country"
            onChange={handleChange}
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            display: "flex",
            justifyContent: "center",
            "& > *": {
              margin: "10px",
            },
          }}
        >
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            sx={{
              marginRight: { xs: 0, sm: "40px", md: "40px" },
            }}
          />
          <TextField
            type="email"
            label="Repeat Email"
            variant="outlined"
            name="RepEmail"
            onChange={handleChangeEmail}
          />
        </Grid>

        <Grid
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            display: "flex",
            justifyContent: "center",
            "& > *": {
              margin: "10px",
            },
          }}
        >
          <FormControl
            variant="outlined"
            sx={{
              width: { xs: "331px", sm: "222px", md: "222px" },
              margin: "10px",
            }}
          >
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
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            display: "flex",
            justifyContent: "center",
            "& > *": {
              margin: "10px",
            },
          }}
        >
          <FormControl
            variant="outlined"
            sx={{
              width: { xs: "331px", sm: "222px", md: "222px" },
              margin: "10px",
            }}
          >
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
          <FormControl
            variant="outlined"
            sx={{
              width: { xs: "331px", sm: "222px", md: "222px" },
              margin: "10px",
            }}
          >
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
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            display: "flex",
            justifyContent: "center",
            "& > *": {
              margin: "10px",
            },
          }}
        >
          <TextField
            label="Additional Comments"
            variant="outlined"
            name="additionalComments"
            onChange={handleChange}
            sx={{
              width: { xs: "331px", sm: "464px", md: "464px" },
              margin: "10px",
            }}
          />
        </Grid>
        <LoadingButton
          loading={!loading ? false : true}
          variant="contained"
          sx={{
            display: "flex",
            margin: "auto",
            width: { xs: "50%", sm: "20%", md: "20%" },
            marginBottom: "20px",
          }}
          onClick={handleSubmit}
        >
          Book
        </LoadingButton>
      </Box>
    </>
  );
};

export default BookingForm;
