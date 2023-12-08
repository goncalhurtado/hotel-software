import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import { LoadingButton } from "@mui/lab";
import Grid from "@mui/material/Grid";

const EditGuestForm = ({ editing }) => {
  const { firstName, lastName, email, country, phone, passport, arrivalTime } =
    editing.data.info;

  const handleChange = (e) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    // setError({ state: false, message: "" });
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
              className="nameCategory"
              name="firstName"
              onChange={handleChange}
            />
            <TextField
              id="filled-helperText"
              label="Last Name"
              defaultValue={lastName}
              variant="outlined"
              className="nameCategory"
              name="lastName"
              onChange={handleChange}
            />
            <TextField
              id="filled-helperText"
              label="email"
              defaultValue={email}
              variant="outlined"
              className="nameCategory"
              name="email"
              onChange={handleChange}
              type="email"
            />
            <TextField
              id="filled-helperText"
              label="country"
              defaultValue={country}
              variant="outlined"
              className="nameCategory"
              name="country"
              onChange={handleChange}
            />

            <TextField
              id="filled-helperText"
              label="phone"
              defaultValue={phone}
              variant="outlined"
              className="nameCategory"
              name="phone"
              //   type="number"
              onChange={handleChange}
            />
            <TextField
              id="filled-helperText"
              label="passport"
              defaultValue={passport}
              variant="outlined"
              className="nameCategory"
              name="passport"
              type="number"
              onChange={handleChange}
            />
            <TextField
              id="filled-helperText"
              label="arrival time"
              defaultValue={arrivalTime}
              variant="outlined"
              className="nameCategory"
              name="arrivalTime"
              //   type="number"
              onChange={handleChange}
            />
          </Grid>
          <Grid item container justifyContent="center" alignItems="center">
            {/* <TextField
              id="outlined-multiline-static"
              label="Description"
              defaultValue={description}
              multiline
              rows={5}
              name="description"
              className="descriptionCategory"
              onChange={handleChange}
              sx={{
                width: "590px",
              }}
            /> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditGuestForm;
