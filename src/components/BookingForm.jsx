import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { setBooking } from "../helpers/booking";
import { axiosInstance } from "../config/axiosInstance";

const BookingForm = ({ selected }) => {
  const [formData, setFormData] = useState({
    info: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      country: "",
      passportType: "",
      passaport: "",
      arrivalTime: "",
      paymentMethod: "",
      additionalComments: "",
    },
    selectedCategory: selected.category.id,
    check_in: selected.check_in,
    check_out: selected.check_out,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      info: {
        ...prevData.info,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reservation = setBooking(formData);

    // try {
    //   const response = await axiosInstance.post("/booking", reservation);
    //   console.log("Reserva agregada:", response.data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          name="firstName"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Apellido"
          variant="outlined"
          name="lastName"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Telefono"
          variant="outlined"
          name="phone"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Correo Electrónico"
          variant="outlined"
          name="email"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Pais de Origen"
          variant="outlined"
          name="country"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Tipo de documento"
          variant="outlined"
          name="passaport"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Hora prevista de llegada"
          variant="outlined"
          name="arrivalTime"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Comentarios adicionales"
          variant="outlined"
          name="additionalComments"
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Reservar
        </Button>
      </Box>
    </>
  );
};

export default BookingForm;
