import React from "react";
import DataTable from "react-data-table-component";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const CategoriesTable = ({
  categories,
  handleEdit,
  setCategoryToEdit,
  handleDelete,
}) => {
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
      width: "150px",
    },
    {
      name: "Description",
      //
      selector: (row) => row.description,
    },
    {
      name: "Capacity",
      selector: (row) => row.capacity,
      width: "100px",
    },
    {
      name: "Price",
      //
      selector: (row) => row.price,
      width: "100px",
    },
    {
      name: "",
      //
      selector: (row) => (
        <Box>
          <Button onClick={(e) => handleEdit(e, row)} variant="contained">
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            sx={{ marginLeft: "9px" }}
            onClick={(e) => handleDelete(e, row)}
          >
            Delete
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
