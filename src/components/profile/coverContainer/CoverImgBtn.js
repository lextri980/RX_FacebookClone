import { Button, Popover, Typography } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { React, useState } from "react";
import { styled } from "@mui/material/styles";
import PopoverCover from "./PopoverCover";

const CoverImageBtn = styled("div")`
  position: absolute;
  bottom: 20px;
  right: 40px;
`;

const CusButton = styled(Button)`
  font-weight: bold;
  :hover {
    background-color: #e3e9ef;
  }
  @media (max-width: 898px){
    font-size:0;
    padding-right:0;
 }
`;

function CoverImgBtn({ handleChangeImage, handleDelCover,handleChangeImgByChoose }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <CoverImageBtn>
      <CusButton
        sx={{
          py: "6px",
          bgcolor: "#F2F2F2",
          color: "#313237",
          borderRadius: "7px",
          textTransform: "none",
        }}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        // onKeyDown={handleKeyDown}
      >
        <CameraAltIcon sx={{ mr: "10px", ml: "-5px" }} />
        Chỉnh sửa ảnh bìa
      </CusButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Typography>
          <PopoverCover handleChangeImage={handleChangeImage} handleDelCover={handleDelCover} handleChangeImgByChoose={handleChangeImgByChoose}/>
        </Typography>
      </Popover>
    </CoverImageBtn>
  );
}

export default CoverImgBtn;
