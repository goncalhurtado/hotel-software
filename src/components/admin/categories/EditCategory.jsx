import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CategoriesForm from "./CategoriesForm";

const EditCategory = ({ categoryToEdit, setEditing }) => {
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
        <CategoriesForm categoryToEdit={categoryToEdit} />
      </Box>
    </Box>
  );
};

export default EditCategory;
