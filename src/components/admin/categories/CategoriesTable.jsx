import React from "react";
import DataTable from "react-data-table-component";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { customStyles } from "./TableCustomStyles";
import "../../../style/admin/categories/table.css";

const CategoriesTable = ({ categories, handleEdit, handleDelete }) => {
  const columns = [
    {
      name: "Image",
      width: "180px",
      selector: (row) => (
        <>
          <Box
            component="img"
            src={row.image}
            sx={{ width: "180px", height: "120px" }}
          ></Box>
        </>
      ),
    },
    {
      name: "Name",
      selector: (row) => row.name,
      width: "200px",
      sortable: true,
    },
    {
      name: "Description",
      cell: (row) => (
        <div style={{ whiteSpace: "pre-wrap" }}>{row.description}</div>
      ),
    },
    {
      name: "Capacity",
      selector: (row) => row.capacity,
      width: "98px",
      sortable: true,
      cell: (row) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          {row.capacity}
        </div>
      ),
    },
    {
      name: "Price",
      //
      selector: (row) => row.price,
      width: "70px",
      sortable: true,
      cell: (row) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          {row.price}
        </div>
      ),
    },
    {
      name: "",
      //
      cell: (row) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Button onClick={(e) => handleEdit(e, row)} variant="outlined">
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
        </div>
      ),
    },
  ];

  return (
    <>
      <DataTable
        data={categories}
        columns={columns}
        pagination
        defaultSortFieldId={4}
        customStyles={customStyles}
      />
    </>
  );
};

export default CategoriesTable;
