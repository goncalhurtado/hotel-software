import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import { LoadingButton } from "@mui/lab";
import { updateRoom } from "../../../helpers/admin/rooms";

const EditRoomForm = ({ data, getRooms }) => {
  const [formData, setFormData] = useState({
    id: data.room._id,
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
    await updateRoom(e, formData, setLoading, setError, getRooms);
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
              type="number"
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
                {error.message}
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
