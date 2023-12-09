import React from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { parse, format } from "date-fns";

const DatePreview = ({ date }) => {
  const startDate = parse(date.start_date, "MM/dd/yyyy", new Date());
  const endDate = parse(date.end_date, "MM/dd/yyyy", new Date());
  const formattedStartDate = format(startDate, "MMM dd, yyyy");
  const formattedEndDate = format(endDate, "MMM dd, yyyy");

  return (
    <Box
      sx={{
        width: "351px",
        height: "54px",
        backgroundColor: "#dadadb",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "5px",
      }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        sx={{
          width: "159px",
          height: "33px",
          borderRadius: "5px",
          backgroundColor: "white",
          marginRight: "10px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>{formattedStartDate}</Typography>
      </Box>
      <Box
        sx={{
          width: "159px",
          height: "33px",
          borderRadius: "5px",
          backgroundColor: "white",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>{formattedEndDate}</Typography>
      </Box>
    </Box>
  );
};

export default DatePreview;
