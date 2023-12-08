import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { arrivalTimes } from "../../../helpers/information";
import "../../../style/admin/booking/bookingForm.css";
const EditGuestForm = ({ editing, formData, setFormData, setError }) => {
  const {
    firstName,
    lastName,
    email,
    country,
    phone,
    passport,
    arrivalTime,
    passportType,
  } = editing.data.info;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ state: false, message: "" });
  };

  return (
    <Box margin={2}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item container direction="row" justifyContent="center">
            <TextField
              id="filled-helperText"
              label="First Name"
              defaultValue={firstName}
              variant="outlined"
              className="textFieldForm"
              name="firstName"
              onChange={handleChange}
            />
            <TextField
              id="filled-helperText"
              label="Last Name"
              defaultValue={lastName}
              variant="outlined"
              className="textFieldForm"
              name="lastName"
              onChange={handleChange}
            />
            <TextField
              id="filled-helperText"
              label="email"
              defaultValue={email}
              variant="outlined"
              className="textFieldForm"
              name="email"
              onChange={handleChange}
              type="email"
            />
          </Grid>
          <Grid item container justifyContent="center" alignItems="center">
            <TextField
              id="filled-helperText"
              label="country"
              defaultValue={country}
              variant="outlined"
              className="textFieldForm"
              name="country"
              onChange={handleChange}
            />

            <TextField
              id="filled-helperText"
              label="phone"
              defaultValue={phone}
              variant="outlined"
              className="textFieldForm"
              name="phone"
              //   type="number"
              onChange={handleChange}
            />
            <Grid item container justifyContent="center" alignItems="center">
              <FormControl
                variant="outlined"
                sx={{ minWidth: "120px", width: "auto" }}
              >
                <InputLabel>Passport Type</InputLabel>
                <Select
                  value={passportType}
                  onChange={handleChange}
                  label="Passport Type"
                  name="passportType"
                >
                  <MenuItem value="Dni">Dni</MenuItem>
                  <MenuItem value="Passport">Passport</MenuItem>
                </Select>
              </FormControl>

              <TextField
                id="filled-helperText"
                label="passport"
                defaultValue={passport}
                variant="outlined"
                className="textFieldForm"
                name="passport"
                type="number"
                onChange={handleChange}
              />

              <FormControl variant="outlined" sx={{ width: "200px" }}>
                <InputLabel>Estimated Arrival Time</InputLabel>
                <Select
                  label="Estimated Arrival Time"
                  variant="outlined"
                  name="arrivalTime"
                  onChange={handleChange}
                  value={arrivalTime}
                >
                  {arrivalTimes?.map((time) => (
                    <MenuItem key={time.id} value={time.time}>
                      {time.time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditGuestForm;
