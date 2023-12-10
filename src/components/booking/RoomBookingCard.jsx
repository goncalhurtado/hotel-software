import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Grid from "@mui/material/Grid";

const RoomBookingCard = ({ category, setSelected }) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      sx={{
        display: { xs: "flex", sm: "flex", md: "initial" },
        justifyContent: { xs: "center", sm: "center", md: "initial" },
      }}
    >
      <Card
        sx={{
          width: {
            xs: "90%",
            sm: "90%",
            md: "90%",
          },
          marginBottom: "20px",
        }}
      >
        <CardContent>
          <Box display="flex">
            <Box>
              <Box
                sx={{
                  width: { xs: "120px", sm: 300, lg: 350 },
                  height: { xs: "120px", sm: 200, lg: 233 },
                  marginRight: "20px",
                }}
                component="img"
                alt={category.name}
                src={category.image}
              />
            </Box>
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
                    price: category.price * prevSelected.nights,
                  }))
                }
                sx={{ marginTop: "10px" }}
              >
                Seleccionar
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RoomBookingCard;
