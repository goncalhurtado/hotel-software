import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "../../../style/admin/categories/CategoriesForm.css";

const CategoriesForm = ({ categoryToEdit }) => {
  const [formData, setFormData] = useState({});

  const { name, description, capacity, price, image, _id } = categoryToEdit;

  const handleChange = (e) => {};
  const handleSubmit = async (e) => {
    e.preventDefault();
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
              label="Name"
              defaultValue={name}
              variant="outlined"
              className="nameCategory"
            />
            <TextField
              id="filled-helperText"
              label="Capacity"
              defaultValue={capacity}
              variant="outlined"
              className="numberCategory"
              type="number"
            />
            <TextField
              id="filled-helperText"
              label="Price"
              defaultValue={price}
              variant="outlined"
              className="numberCategory"
              type="number"
            />
          </Grid>
          <Grid item container justifyContent="center" alignItems="center">
            <TextField
              id="outlined-multiline-static"
              label="Description"
              defaultValue={description}
              multiline
              rows={5}
              sx={{
                width: "590px",
              }}
              className="descriptionCategory"
            />
          </Grid>
          {/* Rest of your code */}
        </Grid>
        <Grid item></Grid>
        <Grid item sx={{ width: "590px" }}>
          <Grid container>
            <Grid sx={{ marginLeft: "5px" }} item>
              <Typography>Actual Image</Typography>
              <img
                src={image}
                alt={`image of the category ${name}`}
                width={300}
              />
            </Grid>
            <Grid
              item
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ width: "285px" }}
            >
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload new image
                <VisuallyHiddenInput type="file" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button sx={{ marginTop: "18px" }} variant="contained">
            Modificar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoriesForm;
