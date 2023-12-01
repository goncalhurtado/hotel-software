import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { LoadingButton } from "@mui/lab";
import CreateCategoryForm from "./CreateCategoryForm";
import { createCategory } from "../../../helpers/admin/categories";

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

    createCategory(formData, getCategories, setLoading, setCreating, newImg);
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
