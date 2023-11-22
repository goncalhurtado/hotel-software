import React from "react";
import DataTable from "react-data-table-component";
import { Box, Button } from "@mui/material";

const CategoriesTable = ({ categories, handleEdit, setCategoryToEdit }) => {
  const columns = [
    {
      name: "Imagen",
      selector: (row) => (
        <>
          <Box
            component="img"
            src={row.image}
            sx={{ width: "200px", height: "120px" }}
          ></Box>
        </>
      ),
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Description",
      //
      selector: (row) => row.description,
    },
    {
      name: "Capacity",
      selector: (row) => row.capacity,
    },
    {
      name: "Price",
      //
      selector: (row) => row.price,
    },
    {
      name: "",
      //
      selector: (row) => (
        <Box>
          <Button onClick={(e) => handleEdit(e, row)} variant="contained">
            Editar
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <>
      <DataTable data={categories} columns={columns} />
    </>
  );
};

export default CategoriesTable;
