import React from "react";
import DataTable from "react-data-table-component";
import { Box, Button } from "@mui/material";

const CategoriesTable = ({ categories }) => {
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
          <Button onClick={(e) => console.log(row._id)} variant="contained">
            Editar
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <>
      <DataTable title="Categorias" data={categories} columns={columns} />
    </>
  );
};

export default CategoriesTable;
