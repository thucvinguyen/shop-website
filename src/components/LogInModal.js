import Modal from "@mui/material/Modal";
import LogInForm from "./LogInForm";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  border: "none",
  width: 800,
  color: "black",
};

function LogInModal({ isOpen, onClose }) {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LogInForm />
          <Button
            onClick={onClose}
            sx={{
              position: "absolute",
              top: "5px",
              right: "5px",
              bgcolor: "black",
              color: "white",
              "&:hover": {
                bgcolor: "#333",
              },
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>

      {/* <Modal open={isOpen} onClose={onClose}>
        <Box sx={style}>
          <LogInForm />
        </Box>

        <Button onClick={onClose}>Close</Button>
        <Button onClick={onClose} variant="contained" color="primary">
          Sign In
        </Button>
      </Modal> */}
    </div>
  );
}

export default LogInModal;
