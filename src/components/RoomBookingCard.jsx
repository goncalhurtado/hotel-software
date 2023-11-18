import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Grid from "@mui/material/Grid";

const RoomBookingCard = ({ category, setSelected, availables }) => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Card sx={{ maxWidth: 800, marginBottom: "20px" }}>
        <CardContent>
          <Box display="flex">
            <Box>imagen</Box>
            <Box>
              <Typography gutterBottom variant="h5" component="div">
                {category.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {category.description}
              </Typography>
              <Button
                variant="contained"
                onClick={() =>
                  setSelected((prevSelected) => ({
                    ...prevSelected,
                    selected: true,
                    category: category,
                  }))
                }
                disabled={availables.rooms.length != 0 ? false : true}
              >
                {availables.rooms.length != 0
                  ? "Seleccionar"
                  : "No hay habitaciones disponibles"}
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RoomBookingCard;
