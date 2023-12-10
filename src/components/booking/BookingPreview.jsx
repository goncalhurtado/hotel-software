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
        <CardContent>
          <Typography>Nights: {selected.nights}</Typography>
          <Typography>
            Category: {selected.selected ? selected.category.name : ""}
          </Typography>
          <Typography>
            Price Per Night: ${selected.selected ? selected.category.price : ""}
          </Typography>
          <Typography variant="h6">
            Total: $
            {selected.selected ? selected.category.price * selected.nights : ""}
          </Typography>
          <Button
            disabled={!selected.selected}
            variant="contained"
            onClick={() => setSelected({ ...selected, booked: true })}
          >
            Book
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BookingPreview;
