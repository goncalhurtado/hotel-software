import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Typography } from "@mui/material";

const FilterRoom = ({ categories }) => {
  const [selectedChip, setSelectedChip] = useState({ name: "All", id: "" });

  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      padding={1}
    >
      <Typography marginRight={2}>Filter by Category</Typography>
      <Stack direction="row" spacing={1}>
        <Chip
          label="All"
          color="primary"
          variant={selectedChip.name === "All" ? "default" : "outlined"}
          onClick={() => setSelectedChip({ name: "All", id: "" })}
        />
        {categories?.map((category) => (
          <Chip
            label={category.name}
            color="primary"
            variant={
              selectedChip.name === category.name || selectedChip.name === "All"
                ? "default"
                : "outlined"
            }
            onClick={() =>
              setSelectedChip({ name: category.name, id: category._id })
            }
          />
        ))}
      </Stack>
    </Box>
  );
};

export default FilterRoom;
