import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CategoriesTable from "../../components/admin/categories/CategoriesTable";
import { axiosInstance } from "../../config/axiosInstance";
import EditCategory from "../../components/admin/categories/EditCategory";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CreateCategory from "../../components/admin/categories/CreateCategory";
import { deleteCategory } from "../../helpers/admin/categories";

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);

  // Create Category

  const [creating, setCreating] = useState(false);

  // Edit Category

  const [editing, setEditing] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState({
    name: "",
    description: "",
    capacity: "",
    price: "",
    image: "",
    _id: "",
  });

  const handleEdit = (e, row) => {
    e.preventDefault();
    setCategoryToEdit({
      name: row.name,
      description: row.description,
      capacity: row.capacity,
      price: row.price,
      image: row.image,
      _id: row._id,
    });
    setEditing(true);
  };

  // Delete Category

  const handleDelete = async (e, row) => {
    e.preventDefault();
    deleteCategory(row, getCategories);
  };

  // Get Categories

  const getCategories = async () => {
    try {
      const response = await axiosInstance.get("/categories");
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Box display={"flex"}>
        <Typography variant="h4" sx={{ marginLeft: "15px" }}>
          Categories
        </Typography>

        {!creating && !editing && (
          <Button
            sx={{
              marginLeft: "auto",
              marginRight: "112px",
              marginTop: "8px",
            }}
            variant="contained"
            onClick={() => setCreating(true)}
          >
            create category
          </Button>
        )}
      </Box>
      {!creating ? (
        !editing ? (
          <CategoriesTable
            categories={categories}
            handleEdit={handleEdit}
            setCategoryToEdit={setCategoryToEdit}
            handleDelete={handleDelete}
          />
        ) : (
          <EditCategory
            categoryToEdit={categoryToEdit}
            setEditing={setEditing}
            getCategories={getCategories}
          />
        )
      ) : (
        <CreateCategory
          setCreating={setCreating}
          getCategories={getCategories}
        />
      )}
    </>
  );
};

export default AdminCategories;
