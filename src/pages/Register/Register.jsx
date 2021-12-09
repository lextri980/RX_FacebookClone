import React from "react";
import { Modal } from "@mui/material";
import RegisterBox from "../../components/Register/RegisterBox";

function Register({ openModal, handleCloseModal }) {
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <RegisterBox />
    </Modal>
  );
}

export default Register;
