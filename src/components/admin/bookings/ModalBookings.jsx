import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import GuestInfo from "./GuestInfo";
const ModalBookings = ({ setModal, modal }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  const handleClose = () => {
    setModal(false);
  };
  return (
    <div>
      <Modal
        open={modal.action}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <GuestInfo data={modal.data} />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalBookings;
