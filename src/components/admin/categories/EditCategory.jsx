import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditCategoriesForm from "./EditCategoriesForm";
import { axiosInstance } from "../../../config/axiosInstance";
import { LoadingButton } from "@mui/lab";
import Swal from "sweetalert2";

const EditCategory = ({ categoryToEdit, setEditing, getCategories }) => {
  const { name, description, capacity, price, image, _id } = categoryToEdit;

  const [formData, setFormData] = useState({
    name: name,
    description: description,
    capacity: capacity,
    price: price,
    image: image,
  });

  const [newImg, setNewImg] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("capacity", formData.capacity);
    data.append("price", formData.price);
    data.append("image", newImg[0]);
    setLoading(true);
    try {
      const response = await axiosInstance.put(`/category/${_id}`, data);

      Swal.fire({
        title: response.data.message,
        icon: "success",
        confirmButtonColor: "#3f50b5",
      });
      setEditing(false);
      getCategories();
    } catch (error) {
      Swal.fire({
        title: error.message,
        icon: "error",
        confirmButtonColor: "#d33",
      });
      setLoading(false);
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
        <EditCategoriesForm
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
