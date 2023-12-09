import React from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
// import { parse, format } from "date-fns";
import { useEffect, useState } from "react";
import { parse, format, isValid } from "date-fns";

const DatePreview = ({ date }) => {
  const [formattedDates, setFormattedDates] = useState({
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    let startDate, endDate;

    if (date.start_date && date.end_date) {
      startDate = parse(date.start_date, "MM/dd/yyyy", new Date());
      endDate = parse(date.end_date, "MM/dd/yyyy", new Date());
    } else {
      startDate = new Date();
      endDate = new Date();
      endDate.setDate(endDate.getDate() + 1);
    }

    if (isValid(startDate) && isValid(endDate)) {
      setFormattedDates({
        startDate: format(startDate, "MMM dd, yyyy"),
        endDate: format(endDate, "MMM dd, yyyy"),
      });
    } else {
      console.log("Invalid time");
    }
  }, [date]);

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
        <Typography>{formattedDates.startDate}</Typography>
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
        <Typography>{formattedDates.endDate}</Typography>
      </Box>
    </Box>
  );
};

export default DatePreview;
