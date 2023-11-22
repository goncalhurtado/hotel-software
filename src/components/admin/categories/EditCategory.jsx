import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CategoriesForm from "./CategoriesForm";

const EditCategory = ({ categoryToEdit, setEditing }) => {
  return (
    <div>
      <Box>
        <CategoriesForm categoryToEdit={categoryToEdit} />
      </Box>
      <Button onClick={() => setEditing(false)}>Volver Atras</Button>
    </div>
  );
};

export default EditCategory;
