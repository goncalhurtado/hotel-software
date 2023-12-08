import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import { dateFormater } from "../../../helpers/admin/adminBookings";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import TableSkeleton from "../../skeletons/TableSkeleton";
import Skeleton from "@mui/material/Skeleton";

const TableBookings = ({ bookings }) => {
  const [bookingsTable, setBookingsTable] = useState([]);
  const columns = [
    {
      name: "Booking ID",
      selector: (row) => row.bookingId,
      sortable: true,
      width: "110px",
    },

    {
      name: "Guest",
      selector: (row) => row.info.lastName,
      cell: (row) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            <p>
              {row.info.lastName} {row.info.firstName}
            </p>
            <p>{row.info.email}</p>
          </div>
          <div>
            <InfoOutlinedIcon sx={{ ml: 1 }} />
          </div>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Order Date",
      selector: (row) => {
        if (row.date) {
          return dateFormater(row.date);
        }
        return "";
      },
      sortable: true,
      width: "130px",
    },
    {
      name: "Check In",
      selector: (row) => row.check_in,
      sortable: true,
      width: "110px",
    },
    {
      name: "Check Out",
      selector: (row) => row.check_out,
      sortable: true,
      width: "110px",
    },
    {
      name: "Category",
      selector: (row) => row.room.category.name,
      sortable: true,
      width: "110px",
    },
    {
      name: "Room",
      selector: (row) => row.room.number,
      sortable: true,
      width: "80px",
    },
    {
      name: "Payment Status",
      selector: (row) => row.info.paymentStatus,
      sortable: true,
    },
    {
      name: "",
      //
      cell: (row) => (
        <div>
          <IconButton>
            <EditNoteOutlinedIcon />
          </IconButton>

          <IconButton color="error">
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  useEffect(() => {
    setBookingsTable(bookings);
  }, [bookings]);

  return (
    <>
      TableBookings
      <DataTable
        data={bookingsTable}
        columns={columns}
        pagination
        defaultSortFieldId={4}
        noDataComponent={<TableSkeleton />}
        // customStyles={customStyles}
      />
    </>
  );
};

export default TableBookings;
