import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import GuestInfo from "./GuestInfo";
const ModalBookings = ({ setModal, modal }) => {
  console.log(modal.data);
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
          {/* {modal.action === "create" && (
                <CreateRoomForm modal={modal} getRooms={getRooms} />
              )}
              {modal.action === "edit" && (
                <EditRoomForm data={modal.data} getRooms={getRooms} />
              )} */}
          <GuestInfo data={modal.data} />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalBookings;
