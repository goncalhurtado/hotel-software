import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CreateRoomForm from "./CreateRoomForm";
import EditRoomForm from "./EditRoomForm";

const ModalRoom = ({ modal, setModal }) => {
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

  const handleClose = () => setModal({ state: false, action: "", data: "" });

  return (
    <div>
      <Modal
        open={modal.state}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {modal.action === "create" && <CreateRoomForm />}
          {modal.action === "edit" && <EditRoomForm data={modal.data} />}
        </Box>
      </Modal>
    </div>
  );
};

export default ModalRoom;
