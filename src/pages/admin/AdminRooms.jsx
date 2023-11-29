import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { axiosInstance } from "../../config/axiosInstance";
import TableRoom from "../../components/admin/rooms/TableRoom";
import { useState } from "react";

// import { useEffect } from "react";

const AdminRooms = () => {
  const [rooms, setRooms] = useState([]);
  const getRooms = async () => {
    try {
      const response = await axiosInstance.get("/rooms");
      setRooms(response.data.rooms);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <>
      <Box display={"flex"}>
        <Typography variant="h4" sx={{ marginLeft: "15px" }}>
          Rooms
        </Typography>

        <Button
          sx={{
            marginLeft: "auto",
            marginRight: "112px",
            marginTop: "8px",
          }}
          variant="contained"
        >
          create room
        </Button>
      </Box>
      <TableRoom rooms={rooms} />
    </>
  );
};

export default AdminRooms;
