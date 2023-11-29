import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

const EditRoomForm = ({ data }) => {
  return (
    <>
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
                label="Number"
                variant="outlined"
                className="nameCategory"
                name="name"
                // onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EditRoomForm;
