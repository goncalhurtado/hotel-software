import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { axiosInstance } from "../../../config/axiosInstance";
import { useEffect } from "react";
import { useState } from "react";
import { Typography } from "@mui/material";

const FilterRoom = () => {
  const [categories, setCategories] = useState([]);
  const [selectedChip, setSelectedChip] = useState("All");

  const getCategories = async () => {
    try {
      const response = await axiosInstance.get("/categories");
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, [categories]);

  return (
    <Box justifyContent={"center"} alignItems={"center"} display={"flex"}>
      <Typography marginRight={2}>Filter </Typography>
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
