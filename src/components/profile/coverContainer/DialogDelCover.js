import React from "react";
import {
  Dialog,
  Slide,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styled, { css } from "styled-components";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

const shareCssButton = css`
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor:pointer;
  font-weight:600;
`;
const CustomButtonCancelDel = styled("button")`
  ${shareCssButton}
  background-color: transparent;
  color: #007fff;
  &:hover{
    background-color:#3A3B3C;
  }
`;

const CustomButtonDel = styled("button")`
  ${shareCssButton}
  background-color: #007fff;
  margin-right: 15px;
  color:white;
  &:hover{
    background-color: #0059b2;
  }
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DialogDelCover({handleDelCover}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDel = ()=>{
    setOpen(false);
    handleDelCover()
  }
  return (
    <div>
      <ListItemButton sx={{ px: 2, py: 0 }} onClick={handleClickOpen}>
        <ListItemIcon sx={{ my: 0, minWidth: "35px" }}>
          <DeleteIcon sx={{ color: "#E7E9ED" }} />
        </ListItemIcon>
        <ListItemText primary="Gỡ" />
      </ListItemButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ fontWeight: "600" }}>{"Gỡ Ảnh Bìa"}</DialogTitle>
        <Divider sx={{ width: "100%", bgcolor: "gray", m: "auto" }} />
        <DialogContent>
          <DialogContentText
            sx={{ color: "white" }}
            id="alert-dialog-slide-description"
          >
            Bạn có chắc chắn muốn gỡ ảnh bìa không?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CustomButtonCancelDel onClick={handleClose}>
            Hủy
          </CustomButtonCancelDel>
          <CustomButtonDel onClick={handleDel}>Xác nhận</CustomButtonDel>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogDelCover;
