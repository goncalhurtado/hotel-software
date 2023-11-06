import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Item from "@mui/material/Grid";
import { Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const RoomCard = ({ room }) => {
  const capacity = Array.from({ length: room.capacity }, (_, i) => i + 1);

  return (
    <>
      <Item xs={8}>
        <Card sx={{ maxWidth: 800, marginBottom: "20px" }}>
          <CardContent>
            <Box display="flex">
              <Box>imagen</Box>
              <Box>
                <Typography gutterBottom variant="h5" component="div">
                  {room.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {room.description}
                </Typography>
                {capacity.map((person) => (
                  <PersonIcon key={person} />
                ))}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Item>
    </>
  );
};

export default RoomCard;
