import React, { useState } from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { LoadingButton } from "@mui/lab";
import { editRoom } from "../../../helpers/admin/rooms";

const EditRoomForm = ({ data }) => {
  const [formData, setFormData] = useState({
    number: data.room.number,
    category: data.room.category._id,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    state: false,
    message: "",
  });

  const { room, categories } = data;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ state: false, message: "" });
  };

  const handleSubmit = async (e, formData, setLoading) => {
    await editRoom(e, formData, setLoading, setError);
  };

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems="center"
        justifyContent="center"
      >
        <FormControl error={error.status}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              textAlign={"center"}
              sx={{ marginBottom: "15px" }}
              variant="h6"
            >
              Editing Room number {room.number}
            </Typography>
            <TextField
              label="Number"
              defaultValue={room.number}
              name="number"
              onChange={handleChange}
              error={error.status}
              sx={{ marginBottom: "15px" }}
            />
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent="center"
              marginBottom={1}
            >
              <Typography
                sx={{ marginRight: "5px", width: "100%" }}
                variant="subtitle1"
              >
                Category
              </Typography>
              <Select
                defaultValue={room.category._id}
                onChange={handleChange}
                sx={{ marginRight: "5px", width: "100%" }}
                name="category"
                error={error.status}
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
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  height: "20px",
                  color: error.status === true ? "red" : "green",
                }}
              >
                {error.menssage}
              </Typography>
              <LoadingButton
                loading={!loading ? false : true}
                variant="contained"
                sx={{ marginTop: "15px" }}
                onClick={(e) => handleSubmit(e, formData, setLoading)}
              >
                Edit
              </LoadingButton>
            </Box>
          </Box>
        </FormControl>
      </Box>
    </>
  );
};

export default EditRoomForm;
