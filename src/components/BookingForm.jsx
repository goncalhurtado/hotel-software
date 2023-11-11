import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const BookingForm = ({ selected }) => {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Nombre" variant="outlined" />
        <TextField id="outlined-basic" label="Apellido" variant="outlined" />
        <TextField id="outlined-basic" label="Telefono" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Correo Electrónico"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Pais de Origen"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Tipo de documento"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="País de Origen"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Hora prevista de llegada"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Comentarios adicionales"
          variant="outlined"
        />
      </Box>
    </>
  );
};

export default BookingForm;
