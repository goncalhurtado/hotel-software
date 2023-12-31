import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const BookingPreview = ({ selected, setSelected }) => {
  return (
    <Grid item lg={12}>
      <Card sx={{ width: { xs: "250px", sm: "250px", md: "250px" } }}>
        <CardContent>
          {selected.selected ? (
            <>
              {" "}
              <Typography>Nights: {selected.nights}</Typography>
              <Typography>
                Category: {selected.selected ? selected.category.name : ""}
              </Typography>
              <Typography>
                Price Per Night: $
                {selected.selected ? selected.category.price : ""}
              </Typography>
              <Typography variant="h6">
                Total: ${selected.selected ? selected.price : ""}
              </Typography>
              <Button
                disabled={!selected.selected}
                variant="contained"
                onClick={() => setSelected({ ...selected, booked: true })}
                sx={{ display: "flex", margin: "auto" }}
              >
                Book
              </Button>{" "}
            </>
          ) : (
            <Box display={"flex"} alignItems={"center"}>
              <InfoOutlinedIcon color="info" />
              <Typography variant="body2" marginLeft={"10px"}>
                First search, then select a category
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BookingPreview;
