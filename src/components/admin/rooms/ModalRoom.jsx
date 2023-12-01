import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CreateRoomForm from "./CreateRoomForm";
import EditRoomForm from "./EditRoomForm";

const ModalRoom = ({ modal, setModal, getRooms }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleClose = () => {
    setModal((prevModal) => ({
      ...prevModal,
      state: false,
      action: "",
      data: {
        ...prevModal.data,
        room: "",
      },
    }));
  };
  // console.log(modal);
  return (
    <div>
      <Modal
        open={modal.state}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {modal.action === "create" && (
            <CreateRoomForm modal={modal} getRooms={getRooms} />
          )}
          {modal.action === "edit" && (
            <EditRoomForm data={modal.data} getRooms={getRooms} />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ModalRoom;
