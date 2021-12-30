import * as React from "react";
import PropTypes from "prop-types";
import { Button, Dialog } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from '@mui/icons-material/Image';
import myStyled, { css } from "styled-components";

// data
const imgJson = {avatar:[
    "https://images.wallpaperscraft.com/image/single/travel_map_compass_123078_1280x720.jpg",
  ],cover:[
    "https://images.wallpaperscraft.com/image/single/camera_photographer_smoke_126548_1280x720.jpg",
    "https://images.wallpaperscraft.com/image/single/cockpit_panel_display_169481_1280x720.jpg"
  ]}

//   css (styled-component)
const HeaderText = myStyled('h4')`
    text-align:center;
`
const TextContent = myStyled('p')`
    font-size: 17px;
`

const Image = myStyled('img')`
  width: 165px;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
`
// MUI
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

// main function
export default function DialogChooseImg({handleChangeImgByChoose}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onChangeImage = (ele)=>{
    handleChangeImgByChoose(ele);
    handleClose();
  }

  return (
    <div>
      <ListItemButton sx={{ px: 2, py: 0, my: "5px" }} variant="outlined" onClick={handleClickOpen}>
        <ListItemIcon sx={{ my: 0, minWidth: "35px" }}>
          <ImageIcon sx={{ color: "#E7E9ED" }} />
        </ListItemIcon>
        <ListItemText primary="Chọn Ảnh" />
      </ListItemButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <HeaderText>Chọn ảnh</HeaderText>
        </BootstrapDialogTitle>
        <Divider sx={{ width: "100%", bgcolor: "gray", m: "auto" }} />
        <DialogContent>
            <TextContent>Ảnh Gần Đây</TextContent>
            <div>
                {imgJson.avatar.map(ele=><Image key={ele} src={ele} onClick={()=>onChangeImage(ele)}/>)}
                {imgJson.cover.map(ele=><Image key={ele} src={ele} onClick={()=>onChangeImage(ele)}/>)}
            </div>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
