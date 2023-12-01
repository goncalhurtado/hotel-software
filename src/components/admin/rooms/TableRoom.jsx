import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import FilterRoom from "./FilterRoom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteRoom } from "../../../helpers/admin/rooms";

const TableRoom = ({ rooms, categories, setModal, getRooms }) => {
  const [roomsTable, setRoomsTable] = useState([]);

  const columns = [
    {
      name: "Number",
      selector: (row) => row.number,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category.name,
      sortable: true,
    },
    {
      name: "Capacity",
      selector: (row) => row.category.capacity,
      sortable: true,
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
            width: "object-fit",
          }}
        >
          <Button
            onClick={() => {
              setModal({
                state: true,
                action: "edit",
                data: { room: row, categories: categories },
              });
            }}
            variant="outlined"
          >
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

  const handleDelete = async (e, row) => {
    e.preventDefault();
    await deleteRoom(row, getRooms);
  };

  useEffect(() => {
    setRoomsTable(rooms);
  }, [rooms]);

  return (
    <>
      <FilterRoom categories={categories} />
      <DataTable
        data={roomsTable}
        columns={columns}
        pagination
        defaultSortFieldId={1}
        // customStyles={customStyles}
      />
    </>
  );
};

export default TableRoom;
