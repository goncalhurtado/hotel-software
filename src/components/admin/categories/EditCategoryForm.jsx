import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import "../../../style/admin/categories/CategoriesForm.css";

const EditCategoryForm = ({
  categoryToEdit,
  formData,
  setFormData,
  setNewImg,
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
    setImageURL(URL.createObjectURL(...e.target.files));
    setImg(true);
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
                <Button
                  onClick={() => setToogle(false)}
                  variant={toogle ? "text" : "outlined"}
                >
                  {!imageURL ? "Actual Image" : "Previous Image"}
                </Button>
                <Button
                  disabled={!img ? true : false}
                  onClick={() => setToogle(true)}
                  variant={toogle ? "outlined" : "text"}
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
            </Grid>
          </Grid>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Box>
  );
};

export default EditCategoryForm;
