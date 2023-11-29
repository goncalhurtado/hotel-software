import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import FilterRoom from "./FilterRoom";

const TableRoom = ({ rooms }) => {
  const [roomsTable, setRoomsTable] = useState([]);

  const columns = [
    {
      name: "Number",
      selector: (row) => row.number,
    },
    {
      name: "Category",
      selector: (row) => row.category.name,
    },
    { name: "Capacity", selector: (row) => row.category.capacity },
  ];
  useEffect(() => {
    setRoomsTable(rooms);
  }, [rooms]);

  return (
    <>
      <FilterRoom />
      <DataTable
        data={roomsTable}
        columns={columns}
        pagination
        defaultSortFieldId={4}
        // customStyles={customStyles}
      />
    </>
  );
};

export default TableRoom;
