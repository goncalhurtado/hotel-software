import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";

const Rooms = () => {
  const [rooms, setRooms] = useState({});

  const getRooms = async () => {
    try {
      const response = await axiosInstance.get("/categories");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRooms();
  }, []);

  return <div>Rooms</div>;
};

export default Rooms;
