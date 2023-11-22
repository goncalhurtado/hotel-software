import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import "../../../style/admin/categories/CategoriesForm.css";
import { ca } from "date-fns/locale";

const CategoriesForm = ({ categoryToEdit }) => {
  const [formData, setFormData] = useState({});

  const { name, description, capacity, price, image, _id } = categoryToEdit;

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setFormData((prevData) => ({
    //   ...prevData,
    //   info: {
    //     ...prevData.info,
    //     [name]: value,
    //   },
    // }));
  };
  console.log(categoryToEdit);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await axiosInstance.post("/booking", reservation);
    //   console.log("Reserva agregada:", response.data);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <TextField
        id="filled-helperText"
        label="Name"
        defaultValue={name}
        // helperText="Some important text"
        variant="outlined"
        className="textFieldCategory"
      />
      <TextField
        id="outlined-multiline-static"
        label="Description"
        defaultValue={description}
        multiline
        rows={5}
        sx={{ width: "100%" }}
        className="textFieldCategory"
      />
      <Box display={"flex"} justifyContent="space-between">
        <TextField
          id="filled-helperText"
          label="Capacity"
          defaultValue={capacity}
          variant="outlined"
          className="textFieldCategory"
          type="number"
          sx={{ width: "49%" }}
        />
        <TextField
          id="filled-helperText"
          label="Price"
          defaultValue={price}
          variant="outlined"
          className="textFieldCategory"
          type="number"
          sx={{ width: "49%" }}
        />
      </Box>

      <Box>
        <img src={image} alt={`image of the category ${name}`} />
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Upload new image
          <VisuallyHiddenInput
            type="file"
            // multiple
          />
        </Button>
      </Box>

      <Button variant="contained">Modificar</Button>
    </Box>
  );
};

export default CategoriesForm;
