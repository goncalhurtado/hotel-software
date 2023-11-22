import React, { useEffect, useState } from "react";
import CategoriesTable from "../../components/admin/categories/CategoriesTable";
import { axiosInstance } from "../../config/axiosInstance";
import EditCategory from "../../components/admin/categories/EditCategory";

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);

  //Edit Category

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
      {!editing ? (
        <CategoriesTable
          categories={categories}
          handleEdit={handleEdit}
          setCategoryToEdit={setCategoryToEdit}
        />
      ) : (
        <EditCategory categoryToEdit={categoryToEdit} setEditing={setEditing} />
      )}
    </>
  );
};

export default AdminCategories;
