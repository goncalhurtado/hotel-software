import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { dateFormater } from "../../../helpers/admin/adminBookings";
import DataTable from "react-data-table-component";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import TableSkeleton from "../../skeletons/TableSkeleton";
import Box from "@mui/material/Box";
import { deleteBooking } from "../../../helpers/admin/adminBookings";
import { customStylesBooking } from "../categories/TableCustomStyles";

const TableBookings = ({ bookings, getBookings, setModal, setEditing }) => {
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
          <div
            style={{ cursor: "pointer" }}
            onClick={() => setModal({ action: true, data: row.info })}
          >
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
      width: "120px",
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
      name: "Payment",
      selector: (row) => row.info.paymentMethod,
      cell: (row) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>
            <Box display={"flex"}>
              <b>method</b>
              <p style={{ marginLeft: "5px" }}>{row.info.paymentMethod}</p>
            </Box>
            <Box display={"flex"}>
              <b>status</b>
              <p style={{ marginLeft: "15px" }}>{row.info.paymentStatus}</p>
            </Box>
          </Box>
        </div>
      ),
      sortable: true,
      width: "150px",
    },

    {
      name: "",
      //
      cell: (row) => (
        <Box>
          <IconButton onClick={() => setEditing({ status: true, data: row })}>
            <EditNoteOutlinedIcon />
          </IconButton>
          <IconButton color="error" onClick={(e) => handleDelete(e, row)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  const handleDelete = async (e, row) => {
    e.preventDefault();
    deleteBooking(row, getBookings);
  };

  useEffect(() => {
    setBookingsTable(bookings);
  }, [bookings]);

  return (
    <Box padding={1}>
      <DataTable
        data={bookingsTable}
        columns={columns}
        pagination
        defaultSortFieldId={4}
        noDataComponent={<TableSkeleton />}
        customStyles={customStylesBooking}
      />
    </Box>
  );
};

export default TableBookings;
