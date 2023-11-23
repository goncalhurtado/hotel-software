import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "../../../style/admin/categories/CategoriesForm.css";

const CategoriesForm = ({
  categoryToEdit,
  formData,
  setFormData,
  setNewImg,
  handleSubmit,
}) => {
  const { name, description, capacity, price, image, _id } = categoryToEdit;
  const [img, setImg] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [toogle, setToogle] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setNewImg([...e.target.files]);

    // setImageURL(URL.createObjectURL(e.target.files[0]));
    // setImg(true);
  };

  //

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
              name="name"
              onChange={handleChange}
            />
            <TextField
              id="filled-helperText"
              label="Capacity"
              defaultValue={capacity}
              variant="outlined"
              className="numberCategory"
              type="number"
              name="capacity"
              onChange={handleChange}
            />
            <TextField
              id="filled-helperText"
              label="Price"
              defaultValue={price}
              variant="outlined"
              className="numberCategory"
              type="number"
              name="price"
              onChange={handleChange}
            />
          </Grid>
          <Grid item container justifyContent="center" alignItems="center">
            <TextField
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
            />
          </Grid>
        </Grid>
        <Grid item></Grid>
        <Grid item sx={{ width: "590px" }}>
          <Grid container>
            <Grid sx={{ marginLeft: "5px" }} item>
              <Box display={"flex"}>
                <Button onClick={() => setToogle(false)}>Actual Image</Button>
                <Button
                  disabled={!img ? true : false}
                  onClick={() => setToogle(true)}
                  sx={{ marginLeft: "10px" }}
                >
                  New Image
                </Button>
              </Box>
              <img
                src={!toogle ? image : imageURL}
                alt={`image of the category ${name}`}
                width={300}
                height={200}
              />
              {/* {imageURL && <img src={imageURL} alt="Preview" />} */}
            </Grid>
            <Grid
              item
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ width: "285px" }}
            >
              <input type="file" name="image" onChange={handleFileChange} />
              {/* <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                name="image"
                onChange={handleFileChange}
                type="file"
              >
                Upload new image
                <VisuallyHiddenInput type="file" />
              </Button> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            sx={{ marginTop: "18px" }}
            variant="contained"
            onClick={handleSubmit}
          >
            Modificar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoriesForm;
