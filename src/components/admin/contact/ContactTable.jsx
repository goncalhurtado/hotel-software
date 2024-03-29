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
import ModalContact from "./ModalContact";

const ContactTable = ({ data, getContacts }) => {
  const [modal, setModal] = useState({
    state: false,
    data: {},
  });

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
      cell: (row) => (
        <div>
          <p>
            {row.lastName} {row.firstName}
          </p>
        </div>
      ),
      width: "150px",
    },
    {
      name: "Email",
      cell: (row) => (
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => setModal({ state: true, data: row })}
        >
          {row.email}
        </p>
      ),
      width: "200px",
    },
    {
      name: "Phone",
      cell: (row) => <p>{row.phone}</p>,
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
            sx={{
              width: { xs: "50%", sm: "20%", md: "100px" },
            }}
            onClick={() => {
              row.status === "pending"
                ? setAnswered(row, setLoading, getContacts)
                : setPending(row, setLoading, getContacts);
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
            onClick={() => deleteContact(row, setLoading, getContacts)}
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
        <ModalContact
          modal={modal}
          setModal={setModal}
          getContacts={getContacts}
        />
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
