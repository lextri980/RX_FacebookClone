import { Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.scss";

function ForgotPassword() {
  return (
    <div className="fgp__container">
      <div className="fgp__header">
        <div className="fgp__header--logo">Facebook</div>
        <div className="fgp__header--login">
          <TextField
            size="small"
            variant="outlined"
            label="Email or Phone"
            name="email"
          />
          <TextField
            size="small"
            type="password"
            variant="outlined"
            label="Password"
            name="password"
            className="fgp__header--login-input"
          />
          <Button variant="contained" type="submit" color="info">
            Log in
          </Button>
        </div>
      </div>
      <div className="fgp__body">
        <h2>Find Your Account</h2>
        <hr />
        <p>
          Please enter your email address or mobile number to search for your
          account.
        </p>
        <TextField
          size="small"
          variant="outlined"
          label="Email address or phone number"
          name="email"
          className="fgp__body--login-input"
          fullWidth
        />
        <hr />
        <div className="fgp__body--btn">
          <Button
            variant="contained"
            type="submit"
            className="fgp__body--btn-css"
          >
            <Link to="/login">Cancel</Link>
          </Button>
          <Button variant="contained" type="submit" color="info">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
