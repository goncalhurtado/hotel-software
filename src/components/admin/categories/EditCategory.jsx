import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditCategoryForm from "./EditCategoryForm";
import { LoadingButton } from "@mui/lab";
import { updateCategory } from "../../../helpers/admin/categories";

const EditCategory = ({ categoryToEdit, setEditing, getCategories }) => {
  const { name, description, capacity, price, image, _id } = categoryToEdit;

  const [formData, setFormData] = useState({
    name: name,
    description: description,
    capacity: capacity,
    price: price,
    image: image,
    _id: _id,
  });

  const [newImg, setNewImg] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateCategory(formData, getCategories, setLoading, setEditing, newImg);
  };

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ marginTop: "15px" }}
      >
        <Typography>Editing the category "{categoryToEdit.name}"</Typography>
        <Button
          variant="outlined"
          sx={{ marginLeft: "10px" }}
          onClick={() => setEditing(false)}
        >
          return
        </Button>
      </Box>

      <Box>
        <EditCategoryForm
          categoryToEdit={categoryToEdit}
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          setNewImg={setNewImg}
        />
      </Box>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <LoadingButton
          loading={!loading ? false : true}
          variant="contained"
          sx={{ marginBottom: "18px" }}
          onClick={handleSubmit}
        >
          Modificar
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default EditCategory;
