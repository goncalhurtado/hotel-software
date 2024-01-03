import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const BenefitsItem = ({ data }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} textAlign={"center"}>
      <Box textAlign={"center"} color="#9E9E9E">
        {data.img}
      </Box>
      <Typography textAlign={"center"} variant="h6" color="#FFFFFF">
        {data.title}
      </Typography>
      <Typography textAlign={"center"} variant="body2" color="#9E9E9E">
        {data.description}
      </Typography>
    </Box>
  );
};

export default BenefitsItem;
