import React, { useEffect, useState } from "react";
import CategoriesTable from "../../components/admin/CategoriesTable";
import { axiosInstance } from "../../config/axiosInstance";
import EditCategory from "../../components/admin/EditCategory";

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);

  //Modal
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Edit Category

  const [categoryToEdit, setCategoryToEdit] = useState({
    name: "",
    description: "",
    capacity: "",
    price: "",
    _id: "",
  });

  const handleEdit = (e, row) => {
    e.preventDefault();
    setCategoryToEdit({
      name: row.name,
      description: row.description,
      capacity: row.capacity,
      price: row.price,
      _id: row._id,
    });
    setOpen(true);
  };

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
      <CategoriesTable
        categories={categories}
        handleEdit={handleEdit}
        setCategoryToEdit={setCategoryToEdit}
      />
      <EditCategory
        open={open}
        categoryToEdit={categoryToEdit}
        handleClose={handleClose}
      />
    </>
  );
};

export default AdminCategories;
