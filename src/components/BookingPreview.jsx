import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, Button } from "@mui/material";

const BookingPreview = ({ selected }) => {
  return (
    <Grid item lg={12}>
      <Card>
        <CardContent>
          <Box>Cantidad de Noches</Box>
          <Box>Precio Total</Box>
          <Typography>
            Seleccionada la habitacion: {selected.category.name}
          </Typography>
          <Button
            disabled={selected.selected ? false : true}
            variant="contained"
          >
            Reservar
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BookingPreview;
