import { React } from "react";
import { Box, List } from "@mui/material";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import DialogDelCover from "./DialogDelCover";
import DialogChooseImg from "./DialogChooseImg";

function PopoverCover({ handleChangeImage, handleDelCover,handleChangeImgByChoose }) {
  return (
    <Box
      sx={{
        width: "300px",
        bgcolor: "#212223",
        color: "#E7E9ED",
        border: "1px solid #3A3B3C",
      }}
    >
      <List component="nav" aria-label="main mailbox folders">
        <DialogChooseImg handleChangeImgByChoose={handleChangeImgByChoose}/>
        <label htmlFor="upload-photo">
          <input
            style={{ display: "none" }}
            id="upload-photo"
            name="upload-photo"
            type="file"
            onChange={handleChangeImage}
          />
          <ListItemButton sx={{ px: 2, py: 0 , my: "5px"}}>
            <ListItemIcon sx={{ my: 0, minWidth: "35px" }}>
              <UploadIcon sx={{ color: "#E7E9ED" }} />
            </ListItemIcon>
            <ListItemText primary="Tải ảnh lên" />
          </ListItemButton>
        </label>
        <Divider sx={{ width: "88%", bgcolor: "gray", m: "auto" }} />

        <DialogDelCover handleDelCover={handleDelCover} />
      </List>
    </Box>
  );
}

export default PopoverCover;
