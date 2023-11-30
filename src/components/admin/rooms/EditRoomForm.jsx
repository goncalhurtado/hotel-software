import React, { useState } from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { LoadingButton } from "@mui/lab";
import { editRoom } from "../../../helpers/admin/rooms";

const EditRoomForm = ({ data }) => {
  const [formData, setFormData] = useState({
    number: data.room.number,
    category: data.room.category._id,
  });
  const [loading, setLoading] = useState(false);

  const { room, categories } = data;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, formData, setLoading) => {
    // console.log(formData);
    await editRoom(e, formData, setLoading);
  };

  return (
    <>
      <Box margin={0}>
        <Typography textAlign={"center"} sx={{ marginBottom: "15px" }}>
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
            <TextField
              id="filled-helperText"
              label="Number"
              defaultValue={room.number}
              variant="outlined"
              // className="nameCategory"
              name="number"
              onChange={handleChange}
            />

            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              sx={{
                width: "222px",
                marginTop: "10px",
              }}
            >
              <Box display={"flex"} alignItems={"center"}>
                <InputLabel sx={{ marginRight: "5px", width: "100%" }}>
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={room.category._id}
                  onChange={handleChange}
                  sx={{ marginRight: "5px", width: "100%" }}
                  name="category"
                >
                  {categories?.map((category) => (
                    <MenuItem key={category._id} value={category._id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <LoadingButton
                  loading={!loading ? false : true}
                  variant="contained"
                  sx={{ marginTop: "15px" }}
                  onClick={handleSubmit}
                >
                  Edit
                </LoadingButton>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EditRoomForm;
