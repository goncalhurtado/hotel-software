import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import TableSkeleton from "../../skeletons/TableSkeleton";
import { LoadingButton } from "@mui/lab";
import {
  deleteContact,
  setAnswered,
  setPending,
} from "../../../helpers/admin/adminContact";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

const ContactTable = ({ data, getContacts }) => {
  const [loading, setLoading] = useState(false);
  const [contactTable, setContactTable] = useState([]);
  const columns = [
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
      width: "150px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      cell: (row) => (
        <div>
          <p>
            {row.lastName} {row.firstName}
          </p>
        </div>
      ),
      sortable: true,
      width: "150px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      width: "200px",
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
      width: "100px",
    },
    {
      name: "Message",
      //   selector: (row) => row.message,
      cell: (row) => (
        <div style={{ width: "200px" }}>
          <p style={{ width: "100%" }}>{row.message}</p>
        </div>
      ),
      sortable: true,
      width: "200px",
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      width: "90px",
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <LoadingButton
            loading={!loading ? false : true}
            variant={row.status === "pending" ? "contained" : "outlined"}
            //   color={row.status === "pending" ? "primary" : "secondary"}
            sx={{
              width: { xs: "50%", sm: "20%", md: "100px" },
            }}
            onClick={() => {
              row.status === "pending"
                ? setAnswered(row._id, setLoading)
                : setPending(row._id, setLoading);
            }}
          >
            {row.status === "pending" ? (
              <DoneOutlinedIcon />
            ) : (
              <>
                <PendingActionsOutlinedIcon />
              </>
            )}
          </LoadingButton>
          <LoadingButton
            color="error"
            onClick={() => deleteContact(row._id, setLoading)}
          >
            <DeleteIcon />
          </LoadingButton>
        </>
      ),
      sortable: true,
      width: "200px",
    },
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
          defaultSortFieldId={1}
          noDataComponent={<TableSkeleton />}
          // customStyles={customStylesBooking}
        />
      </>
    </>
  );
};

export default ContactTable;
