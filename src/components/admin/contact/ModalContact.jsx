import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import RespondContactForm from "./RespondContactForm";

const ModalContact = ({ modal, setModal }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const handleClose = () => {
    setModal((prevModal) => ({
      ...prevModal,
      state: false,
      action: "",
      data: "",
    }));
  };

  return (
    <div>
      {" "}
      <Modal
        open={modal.state}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <RespondContactForm data={modal.data} />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalContact;
