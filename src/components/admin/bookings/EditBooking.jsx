import React, { useState } from "react";
import EditGuestForm from "./EditGuestForm";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { editBooking } from "../../../helpers/admin/adminBookings";
import { LoadingButton } from "@mui/lab";

const EditBooking = ({ editing, setEditing }) => {
  const {
    firstName,
    lastName,
    email,
    country,
    phone,
    passport,
    arrivalTime,
    passportType,
  } = editing.data.info;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
    country: country,
    phone: phone,
    passport: passport,
    arrivalTime: arrivalTime,
    passportType: passportType,
  });

  const { _id } = editing.data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    editBooking(formData, setLoading, setError, _id);
  };

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
            onClick={() => setEditing({ action: false })}
          >
            return
          </Button>
        </Box>

        <Box>
          <EditGuestForm
            editing={editing}
            formData={formData}
            setFormData={setFormData}
            setError={setError}
          />
        </Box>
        <Typography
          variant="subtitle1"
          sx={{
            height: "20px",
            color: error.status === true ? "red" : "green",
          }}
        ></Typography>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <LoadingButton
            loading={!loading ? false : true}
            variant="contained"
            sx={{ marginBottom: "18px" }}
            onClick={handleSubmit}
          >
            edit
          </LoadingButton>
        </Box>
      </Box>
    </>
  );
};

export default EditBooking;
