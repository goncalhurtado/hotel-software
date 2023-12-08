import React, { useState } from "react";
import EditGuestForm from "./EditGuestForm";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { LoadingButton } from "@mui/lab";

const EditBooking = ({ editing, setEditing }) => {
  const [loading, setLoading] = useState(false);
  // const [bookingToEdit, setBookingToEdit] = useState({

  // })
  console.log(editing);

  return (
    <>
      <Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ marginTop: "15px" }}
        >
          <Typography>Editing the Booking {editing.data.bookingId}</Typography>
          <Button
            variant="outlined"
            sx={{ marginLeft: "10px" }}
            onClick={() => setEditing(false)}
          >
            return
          </Button>
        </Box>

        <Box>
          <EditGuestForm />
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <LoadingButton
            loading={!loading ? false : true}
            variant="contained"
            sx={{ marginBottom: "18px" }}
            // onClick={handleSubmit}
          >
            edit
          </LoadingButton>
        </Box>
      </Box>
    </>
  );
};

export default EditBooking;
