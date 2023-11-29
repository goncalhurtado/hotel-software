import React, { useState } from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

const EditRoomForm = ({ data }) => {
  const { room, categories } = data;

  const [categorySelected, setCategorySelected] = useState("");

  const handleChange = (event) => {
    setCategorySelected(event.target.value);
  };

  return (
    <>
      <Box margin={2}>
        <Typography textAlign={"center"}>
          Editing Room number {room.number}
        </Typography>
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
                defaultValue={room.number}
                variant="outlined"
                className="nameCategory"
                name="name"
                onChange={handleChange}
              />
            </Grid>
            <Grid item container direction="row" justifyContent="start">
              <Box
                display={"flex"}
                alignItems={"center"}
                sx={{
                  marginLeft: "10px",
                }}
              >
                <InputLabel sx={{ marginRight: "5px" }}>Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={room.category.name}
                  onChange={handleChange}
                >
                  {categories?.map((category) => (
                    <MenuItem key={category.id} value={category.name}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EditRoomForm;
