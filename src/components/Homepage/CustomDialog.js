import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  Divider,
  Button,
  IconButton,
  Avatar,
} from "@mui/material/";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

const CustomDialog = ({ isOpen, setIsOpen }) => {
  const [inputText, setInputText] = useState("");
  const [file, setFile] = useState(null);

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  const handleImgChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleCloseDialog}>
      <DialogTitle sx={{ textAlign: "center" }}>Tạo bài viết</DialogTitle>
      <Divider />
      <div className="upload__dialog">
        <div className="upload__dialog-top">
          <Avatar sx={{ marginRight: "5px" }} />
          <p>Username</p>
        </div>

        <div className="upload__dialog-body">
          <div style={{ overflow: 'auto' }}>
            <textarea
              className="upload__dialog-input"
              placeholder="Bạn đang nghĩ gì?"
              rows={4}
              value={inputText}
              onChange={(e) => setInputText(e.currentTarget.value)}
            />
            {file && <img style={{ width: "100%" }} src={file} />}
          </div>
        </div>

        <div className="upload__dialog-bottom">
          <div className="upload__dialog-options">
            <div
              className="upload__optionsRight"
              style={{ fontWeight: "bold" }}
            >
              Thêm vào bài viết
            </div>
            <div className="upload__optionsLeft">
              <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                style={{ display: "none" }}
                onChange={handleImgChange}
              />
              <label htmlFor="icon-button-file">
                <IconButton color="primary" component="span">
                  <PhotoLibraryIcon />
                </IconButton>
              </label>
              <IconButton>
                <PhotoLibraryIcon sx={{ color: "#45BD62" }} />
              </IconButton>
              <IconButton type="file">
                <PhotoLibraryIcon sx={{ color: "#45BD62" }} />
              </IconButton>
              <IconButton>
                <InsertEmoticonIcon sx={{ color: "#F7B928" }} />
              </IconButton>
              <IconButton>
                <PhotoLibraryIcon sx={{ color: "#45BD62" }} />
              </IconButton>
              <IconButton>
                <MoreHorizIcon sx={{ color: "white" }} />
              </IconButton>
            </div>
          </div>
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            disabled={!inputText}
          >
            Đăng
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default CustomDialog;
