import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { Typography } from "@mui/material";

const CarouselHome = () => {
  const items = [
    {
      description: "Image Buenos Aires",
      image:
        "https://res.cloudinary.com/dr2iqnauy/image/upload/v1704309855/hotel-software/hsdmj1btsol8dx1q6jhg.jpg",
    },
    {
      description: "Image Caminito!",
      image:
        "https://res.cloudinary.com/dr2iqnauy/image/upload/v1704309855/hotel-software/eonx7kubmxl52vljtddu.jpg",
    },
    {
      description: "Image Hotel Goncal",
      image:
        "https://res.cloudinary.com/dr2iqnauy/image/upload/v1704309855/hotel-software/vyn2la9y4jwmgeuy0d5b.jpg",
    },
  ];

  return (
    <Carousel animation={"fade"} interval={4000} indicators={false}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
  function Item(props) {
    return (
      <Paper style={{ position: "relative" }}>
        <img
          src={props.item.image}
          alt={props.item.description}
          style={{ width: "100%", height: "700px", filter: "brightness(50%)" }}
        />
        <Typography
          variant="h2"
          component="div"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            fontWeight: "bold",
            transform: "translate(-50%, -50%)",
            color: "white",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          HOTEL GONCAL
        </Typography>
      </Paper>
    );
  }
};

export default CarouselHome;
