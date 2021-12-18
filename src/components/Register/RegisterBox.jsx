import React from "react";
import {
  Box,
  Typography,
  FormControl,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import "../../pages/Register/Register.scss";

function RegisterBox() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "white",
    borderRadius: 1,
    fontFamily: "Helvetica, Arial, sans-serif",
    boxShadow: 24,
    p: 4,
  };

  const styleTypo = {
    color: "black",
  };

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h4" sx={styleTypo}>
        Sign Up
      </Typography>
      <Typography id="modal-modal-description" sx={styleTypo}>
        It's quick and easy.
      </Typography>
      <hr />
      <FormControl className="register__form">
        <TextField
          className="register__form--text1"
          size="small"
          variant="outlined"
          label="First name"
        />
        <TextField
          className="register__form--text2"
          size="small"
          variant="outlined"
          label="Last name"
        />
        <TextField
          className="register__form--text-long"
          size="small"
          variant="outlined"
          label="Mobile number or Email address"
        />
        <TextField
          className="register__form--text-long"
          size="small"
          variant="outlined"
          label="Password"
        />
        <span className="register__form--span">Date of birth</span>
        <TextField
          className="register__form--date"
          size="small"
          variant="outlined"
        />
        <TextField
          className="register__form--date mid"
          size="small"
          variant="outlined"
        />
        <TextField
          className="register__form--date"
          size="small"
          variant="outlined"
        />
        <span className="register__form--span">Gender</span>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Gender"
          className="register__form--select"
          size="small"
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
        <span className="register__form--span">
          By clicking Sign Up, you agree to our Terms, Data Policy and Cookie
          Policy. You may receive SMS notifications from us and can opt out at
          any time.
        </span>
        <Button color='success' variant='contained' className="register__form--btn-signup">Sign Up</Button>
      </FormControl>
    </Box>
  );
}

export default RegisterBox;
