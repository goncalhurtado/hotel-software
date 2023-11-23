import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CategoriesForm from "./CategoriesForm";
import { axiosInstance } from "../../../config/axiosInstance";

const EditCategory = ({ categoryToEdit, setEditing }) => {
  const { name, description, capacity, price, image, _id } = categoryToEdit;

  const [formData, setFormData] = useState({
    name: name,
    description: description,
    capacity: capacity,
    price: price,
    image: image,
  });

  const [newImg, setNewImg] = useState([]);
  console.log(newImg);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("capacity", formData.capacity);
    data.append("price", formData.price);
    data.append("image", newImg[0]);
    try {
      const response = await axiosInstance.put(`/category/${_id}`, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
          return to categories
        </Button>
      </Box>
      <Box>
        <CategoriesForm
          categoryToEdit={categoryToEdit}
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          setNewImg={setNewImg}
        />
      </Box>
    </Box>
  );
};

export default EditCategory;
