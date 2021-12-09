/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Login.scss";
import { FormControl, TextField, Button } from "@mui/material";
import Register from "../Register/Register";

function Login() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <>
      <div className="login">
        <div className="login__title">
          facebook
          <p>
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="login__form">
          <FormControl sx={{ m: 1, width: "50ch" }}>
            <TextField
              className="login__form--textfield-username"
              label="Email address or phone number"
              variant="outlined"
            />
            <TextField
              className="login__form--textfield-password"
              label="Password"
              variant="outlined"
            />
            <Button className="login__form--btn" variant="contained">
              Login
            </Button>
            <div className="login__form--fotter">
              <a href="#">Forgot password?</a>
              <hr />
              <Button
                className="login__form--btn login__form--btn-register"
                variant="contained"
                onClick={handleOpenModal}
              >
                Create new account
              </Button>
            </div>
          </FormControl>
        </div>
      </div>
      <Register openModal={openModal} handleCloseModal={handleCloseModal}/>
    </>
  );
}

export default Login;
