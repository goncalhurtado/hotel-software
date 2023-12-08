import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const GuestInfo = ({ data }) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    passportType,
    passport,
    country,
    arrivalTime,
    additionalComments,
  } = data;
  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        name:{" "}
        <Typography variant="body1" display="inline">
          {lastName} {firstName}
        </Typography>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        email:{" "}
        <Typography variant="body1" display="inline">
          {email}
        </Typography>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        phone:{" "}
        <Typography variant="body1" display="inline">
          {phone}
        </Typography>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        country:{" "}
        <Typography variant="body1" display="inline">
          {country}
        </Typography>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {passportType}:{" "}
        <Typography variant="body1" display="inline">
          {passport}
        </Typography>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        arrival:{" "}
        <Typography variant="body1" display="inline">
          {arrivalTime}
        </Typography>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        notes:{" "}
        <Typography variant="body1" display="inline">
          {additionalComments}
        </Typography>
      </Typography>
    </Box>
  );
};

export default GuestInfo;
