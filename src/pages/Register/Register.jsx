import React, { useState } from "react";
import { Modal } from "@mui/material";
import RegisterBox from "../../components/Register/RegisterBox";

function Register({ openModal,setOpenModal, handleCloseModal }) {
  //Local State
  const [regInfo, setRegInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    date: "",
    month: "",
    year: "",
    gender: "Male",
  });

  //onChangeReg()----------
  const onChangeReg = (e) => {
    setRegInfo({
      ...regInfo,
      [e.target.name]: e.target.value,
    });
  };

  //onSubmit()----------
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(regInfo);
    setOpenModal(false)
  };

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <RegisterBox
        regInfo={regInfo}
        setRegInfo={setRegInfo}
        onChangeReg={onChangeReg}
        onSubmit={onSubmit}
      />
    </Modal>
  );
}

export default Register;
