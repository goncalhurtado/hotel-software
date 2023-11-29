import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Typography } from "@mui/material";

const FilterRoom = ({ categories }) => {
  const [selectedChip, setSelectedChip] = useState("All");

  return (
    <Box justifyContent={"center"} alignItems={"center"} display={"flex"}>
      <Typography marginRight={2}>Filter by Category</Typography>
      <Stack direction="row" spacing={1}>
        <Chip
          label="All"
          color="primary"
          variant={selectedChip === "All" ? "default" : "outlined"}
          onClick={() => setSelectedChip("All")}
        />
        {categories?.map((category) => (
          <Chip
            label={category.name}
            color="primary"
            variant={
              selectedChip === category.name || selectedChip === "All"
                ? "default"
                : "outlined"
            }
            onClick={() => setSelectedChip(category.name)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default FilterRoom;
