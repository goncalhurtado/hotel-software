import React, { useState } from "react";
import { axiosInstance } from "../../../config/axiosInstance";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { LoadingButton } from "@mui/lab";
import Swal from "sweetalert2";
import CreateCategoryForm from "./CreateCategoryForm";

const CreateCategory = ({ setCreating, getCategories }) => {
  const [loading, setLoading] = useState(false);
  const [newImg, setNewImg] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    capacity: "",
    price: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("capacity", formData.capacity);
    data.append("price", formData.price);
    data.append("image", newImg[0]);
    setLoading(true);

    try {
      const response = await axiosInstance.post(`/category`, data);
      Swal.fire({
        title: response.data.message,
        icon: "success",
        confirmButtonColor: "#3f50b5",
      });

      setCreating(false);
      getCategories();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.data.message || error.message,
        icon: "error",
        confirmButtonColor: "#d33",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ marginTop: "15px" }}
        >
          <Typography>Creating a category</Typography>
          <Button
            variant="outlined"
            sx={{ marginLeft: "10px" }}
            onClick={() => setCreating(false)}
          >
            return
          </Button>
        </Box>
        <Box>
          <CreateCategoryForm
            setFormData={setFormData}
            formData={formData}
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
            Create category
          </LoadingButton>
        </Box>
      </Box>
    </>
  );
};

export default CreateCategory;
