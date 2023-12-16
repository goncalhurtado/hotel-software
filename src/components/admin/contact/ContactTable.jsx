import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import TableSkeleton from "../../skeletons/TableSkeleton";

const ContactTable = ({ data }) => {
  const [contactTable, setContactTable] = useState([]);

  const columns = [
    // {
    //   name: "Date",
    //   selector: (row) => row.date,
    //   sortable: true,
    //   width: "110px",
    // },
    // {
    //   name: "Name",
    //   selector: (row) => row.name,
    //   cell: (row) => (
    //     <div>
    //       <p>
    //         {row.lastName} {row.firstName}
    //       </p>
    //     </div>
    //   ),
    //   sortable: true,
    //   width: "110px",
    // },
    // {
    //   name: "Email",
    //   selector: (row) => row.email,
    //   sortable: true,
    //   width: "110px",
    // },
    // {
    //   name: "Phone",
    //   selector: (row) => row.phone,
    //   sortable: true,
    //   width: "110px",
    // },
    // {
    //   name: "Message",
    //   selector: (row) => row.message,
    //   sortable: true,
    //   width: "110px",
    // },
  ];

  useEffect(() => {
    setContactTable(data);
  }, [data]);
  return (
    <>
      <>
        <DataTable
          data={contactTable}
          columns={columns}
          pagination
          defaultSortFieldId={4}
          noDataComponent={<TableSkeleton />}
          // customStyles={customStylesBooking}
        />
      </>
    </>
  );
};

export default ContactTable;
