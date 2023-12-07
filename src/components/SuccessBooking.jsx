import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SuccessBooking = ({ info }) => {
  const { firstName, email, bookingId } = info;
  const navigate = useNavigate();

  return (
    <Box display={"flex"} justifyContent={"center"} margin={"auto"}>
      <Card sx={{ maxWidth: 800, marginTop: "20px" }}>
        <CardContent>
          <Box display="flex" flexDirection={"column"}>
            <Typography variant="h4" textAlign={"center"}>
              Your booking ID is: {bookingId}
            </Typography>
            <Typography variant="h5">Congratulations, {firstName}</Typography>
            <Typography variant="h5">
              Your reservation has been successfully made.
            </Typography>
            <Typography>
              You will receive the necessary information to confirm it at your
              email address {email}.
            </Typography>
            <Typography> Thank you for choosing us!</Typography>
            <Box>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              ></Typography>

              <Button variant="contained" onClick={() => navigate("/")}>
                Return
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SuccessBooking;
