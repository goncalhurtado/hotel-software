import React from "react";
import Skeleton from "@mui/material/Skeleton";
import DataTable from "react-data-table-component";

const TableSkeleton = () => {
  const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

  const columns = [
    {
      name: () => {
        <Skeleton variant="text" width={"100%"} />;
      },
      cell: () => <Skeleton variant="text" width={"100%"} />,
      width: "110px",
    },
    {
      name: "",
      cell: () => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Skeleton variant="text" width={"100%"} />
        </div>
      ),
    },
    {
      name: "",
      cell: () => <Skeleton variant="text" width={"100%"} />,
      width: "130px",
    },
    {
      name: "",
      cell: () => <Skeleton variant="text" width={"100%"} />,
      width: "110px",
    },
    {
      name: "",
      cell: () => <Skeleton variant="text" width={"100%"} />,
      width: "110px",
    },
    {
      name: "",
      cell: () => <Skeleton variant="text" width={"100%"} />,
      width: "110px",
    },
    {
      name: "",
      cell: () => <Skeleton variant="text" width={"100%"} />,
      width: "80px",
    },
    {
      name: () => <Skeleton variant="text" width={"100%"} />,
      cell: () => <Skeleton variant="text" width={"100%"} />,
    },
  ];

  return (
    <>
      <DataTable data={data} columns={columns} noDataComponent="" />
    </>
  );
};

export default TableSkeleton;
