import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { axiosInstance } from "../../config/axiosInstance";
import TableRoom from "../../components/admin/rooms/TableRoom";
import { useState } from "react";
import ModalRoom from "../../components/admin/rooms/ModalRoom";

// import { useEffect } from "react";

const AdminRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [categories, setCategories] = useState([]);
  const [action, setAction] = useState("");

  //create room
  const [modal, setModal] = useState({
    state: false,
    action: "",
    data: "",
  });
  // const handleOpen = () => setOpenModal(true);

  const getRooms = async () => {
    try {
      const response = await axiosInstance.get("/rooms");
      setRooms(response.data.rooms);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axiosInstance.get("/categories");
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRooms();
    getCategories();
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
          onClick={() => {
            setModal({ state: true, action: "create", data: "" });
          }}
        >
          create room
        </Button>
      </Box>
      <TableRoom rooms={rooms} categories={categories} setModal={setModal} />
      <ModalRoom modal={modal} setModal={setModal} />
    </>
  );
};

export default AdminRooms;
