import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import styled from "styled-components";
import ContentDialog from "./ContentDialog";

const UploadBtn = styled.button`
  position: absolute;
  bottom: 0px;
  left: 135px;
  background-color: #454646;
  border-radius: 50%;
  border: none;
  padding: 6px 6px 2px 6px;
  cursor: pointer;
  &:hover {
    background-color: #575859;
  }
  @media (max-width: 898px) {
    bottom: 59%;
    left: 64%;
  }
  @media (max-width: 400px) {
    bottom: 63%;
    left: 64%;
  }
`;

export default function PopupAvatar({ changeAvatar }) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <UploadBtn onClick={handleClickOpen("body")}>
        <CameraAltIcon sx={{ color: "#E8E7EC", m: "auto", fontSize: "26px" }} />
      </UploadBtn>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogContent>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <ContentDialog
              changeAvatar={changeAvatar}
              handleClose={handleClose}
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
