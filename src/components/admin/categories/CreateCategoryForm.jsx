import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const CreateCategoryForm = ({ setFormData, formData, setNewImg, newImg }) => {
  const [imageURL, setImageURL] = useState(null);

  const handleFileChange = (e) => {
    setNewImg([...e.target.files]);
    setImageURL(URL.createObjectURL(...e.target.files));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
              variant="outlined"
              className="nameCategory"
              name="name"
              onChange={handleChange}
            />
            <TextField
              id="filled-helperText"
              label="Capacity"
              variant="outlined"
              className="numberCategory"
              type="number"
              name="capacity"
              onChange={handleChange}
            />
            <TextField
              id="filled-helperText"
              label="Price"
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
              <img
                src={!imageURL ? "" : imageURL}
                alt=""
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
              {!imageURL ? (
                <input type="file" name="image" onChange={handleFileChange} />
              ) : (
                <>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      setImageURL(), setNewImg([]);
                    }}
                  >
                    Delete Image
                  </Button>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Box>
  );
};

export default CreateCategoryForm;
