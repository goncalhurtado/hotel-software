import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

const RoomCard = ({ room }) => {
  const capacity = Array.from({ length: room.capacity }, (_, i) => i + 1);

  return (
    <>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          sx={{
            maxWidth: 800,
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <CardContent>
            <Box display="flex">
              {room ? (
                <Box
                  sx={{
                    width: { xs: "50%", sm: 300, lg: 350 },
                    height: { xs: "120px", sm: 200, lg: 233 },
                    marginRight: "20px",
                  }}
                  component="img"
                  alt={room.name}
                  src={room.image}
                />
              ) : (
                <Skeleton
                  sx={{
                    width: { xs: "50%", sm: 300, lg: 350 },
                    height: { xs: "120px", sm: 200, lg: 233 },
                    marginRight: "20px",
                  }}
                  variant="rectangular"
                />
              )}
              <Box sx={{ width: "100%" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {room ? room.name : <Skeleton />}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {room ? room.description : <Skeleton />}
                </Typography>
                {room ? (
                  <>
                    {capacity.map((person) => (
                      <PersonIcon key={person} />
                    ))}{" "}
                  </>
                ) : (
                  <>
                    <Skeleton height={100} />
                    <Skeleton />
                  </>
                )}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default RoomCard;
