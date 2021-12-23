import { React } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import UploadIcon from "@mui/icons-material/Upload";
import DeleteIcon from "@mui/icons-material/Delete";

function PopoverCover
({handleChangeImage}) {
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
        <label htmlFor="upload-photo">
          <input
            style={{ display: "none" }}
            id="upload-photo"
            name="upload-photo"
            type="file"
            onChange={handleChangeImage}
          />
          <ListItemButton sx={{ px: 2, py: 0 }}>
            <ListItemIcon sx={{ my: 0, minWidth: "35px" }}>
              <UploadIcon sx={{ color: "#E7E9ED" }} />
            </ListItemIcon>
            <ListItemText primary="Tải ảnh lên" />
          </ListItemButton>
        </label>
        <Divider sx={{ width: "88%", bgcolor: "gray", m: "auto" }} />
        <ListItemButton sx={{ px: 2, py: 0 }}>
          <ListItemIcon sx={{ my: 0, minWidth: "35px" }}>
            <DeleteIcon sx={{ color: "#E7E9ED" }} />
          </ListItemIcon>
          <ListItemText primary="Gỡ" />
        </ListItemButton>
      </List>
    </Box>
  );
}

export default PopoverCover
;
