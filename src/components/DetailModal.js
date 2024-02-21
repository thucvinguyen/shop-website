import React from "react";
import { Modal, Box } from "@mui/material";
import DetailPage from "../pages/DetailPage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  border: "none",
  width: 400,
  p: 4,
};

const DetailModal = ({ job, onClose }) => {
  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <DetailPage />
      </Box>
    </Modal>
  );
};

export default DetailModal;
