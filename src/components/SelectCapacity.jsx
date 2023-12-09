import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectCapacity = ({ capacity, setCapacity }) => {
  const handleChange = (event) => {
    setCapacity(event.target.value);
  };

  return (
    <div>
      <InputLabel id="">Guest</InputLabel>
      <Select value={capacity} label="Adults" onChange={handleChange}>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
    </div>
  );
};

export default SelectCapacity;
