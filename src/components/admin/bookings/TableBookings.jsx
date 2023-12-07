import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";

const TableBookings = ({ bookings }) => {
  const [bookingsTable, setBookingsTable] = useState([]);

  const columns = [
    {
      name: "Bookings",
      selector: (row) => row.bookingId,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.room.category.name,
      sortable: true,
    },
    {
      name: "Client",
      selector: (row) => (
        <p>
          {row.info.lastName} {row.info.firstName}
        </p>
      ),
      sortable: true,
    },
    {
      name: "Check In",
      selector: (row) => row.check_in,
      sortable: true,
    },
    {
      name: "Check Out",
      selector: (row) => row.check_out,
      sortable: true,
    },
    {
      name: "Payment Status",
      selector: (row) => row.info.paymentStatus,
      sortable: true,
    },
    // {
    //     name: "information",
    //     selector: (row) => row.info,
    //     sortable: true,
    // }
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
        defaultSortFieldId={1}
        // customStyles={customStyles}
      />
    </>
  );
};

export default TableBookings;
