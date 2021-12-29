/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, FormControl, TextField } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import eyeIco from "../../assets/view.png";
import eyeHiddenIco from '../../assets/hidden.png'
import Register from "../Register/Register";
import { AuthContext } from "./AuthContext";
import "./Login.scss";

function Login() {
  //Context
  const userData = useContext(AuthContext);

  //Local State
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [valInput, setValInput] = useState(false);
  const [revealPw, setRevealPw] = useState("password");
  const [revealImg, setRevealImg] = useState("block");
  const [hiddenImg, setHiddenImg] = useState("none");
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const { username, password } = userInfo;

  //UseEffect
  useEffect(() => {
    setUsers(userData);
  }, []);

  //Navigate router
  const navigate = useNavigate();

  //handleOpenModal()----------
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  //handleCloseModal()----------
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  //handleRevealPassword()----------
  const handleRevealPassword = () => {
    if (revealPw === 'password'){
      setRevealPw('text')
      setRevealImg('none')
      setHiddenImg('block')
    }
  };

  //handleHiddenPassword()----------
  const handleHiddenPassword = () => {
    if (revealPw === 'text'){
      setRevealPw('password')
      setRevealImg('block')
      setHiddenImg('none')
    }
  };

  //onChangeUser()----------
  const onChangeUser = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  //onSubmitLogin()----------
  const onSubmitLogin = (e) => {
    e.preventDefault();
    users.map((user) => {
      if (!username || !password) {
        setValInput(true);
        console.log("Missing information");
      } else if (username === user.username && password === user.password) {
        navigate("/");
      }
    });
  };

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
          <form onSubmit={onSubmitLogin}>
            <FormControl sx={{ m: 1, width: "50ch" }}>
              <TextField
                error={valInput}
                className="login__form--textfield-username"
                label="Email address or phone number"
                variant="outlined"
                name="username"
                value={username}
                onChange={onChangeUser}
              />

              <TextField
                type={revealPw}
                error={valInput}
                className="login__form--textfield-password"
                label="Password"
                variant="outlined"
                name="password"
                value={password}
                onChange={onChangeUser}
              />
              <img
                src={eyeIco}
                alt="eye"
                className="login__form--textfield-password-reveal"
                style={{display: `${revealImg}`}}
                onClick={handleRevealPassword}
              />
              <img
                src={eyeHiddenIco}
                alt="eyeH"
                style={{display: `${hiddenImg}`}}
                className="login__form--textfield-password-hidden"
                onClick={handleHiddenPassword}
              />
              <Button
                type="submit"
                className="login__form--btn"
                variant="contained"
              >
                Login
              </Button>
              <div className="login__form--footer">
                <Link to="/forgot-password">Forgot password?</Link>
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
          </form>
        </div>
      </div>
      <Register openModal={openModal} handleCloseModal={handleCloseModal} />
    </>
  );
}

export default Login;
