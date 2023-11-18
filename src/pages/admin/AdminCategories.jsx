import React, { useEffect, useState } from "react";
import CategoriesTable from "../../components/admin/CategoriesTable";
import { axiosInstance } from "../../config/axiosInstance";

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await axiosInstance.get("/categories");
      setCategories(response.data.categories);
      console.log(categories);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <CategoriesTable categories={categories} />
    </>
  );
};

export default AdminCategories;
