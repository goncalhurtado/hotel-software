import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, Button } from "@mui/material";

const BookingPreview = ({ selected, setSelected }) => {
  return (
    <Grid item lg={12}>
      <Card>
        {/* <CardContent>
          <Typography>Cantidad de Noches: </Typography>
          <Typography>
            Tipo de Habitacion:{" "}
            {selected.selected ? selected.category.name : ""}
          </Typography>
          <Typography>
            Precio: ${selected.selected ? selected.category.price : ""}
          </Typography>
          <Button
            disabled={selected.selected ? false : true}
            variant="contained"
            onClick={() => setSelected({ ...selected, booked: true })}
          >
            Reservar
          </Button>
        </CardContent> */}
      </Card>
    </Grid>
  );
};

export default BookingPreview;
