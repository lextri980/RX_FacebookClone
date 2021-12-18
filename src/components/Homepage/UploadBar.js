import React, { useState } from "react";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

import CustomDialog from "./CustomDialog";

export default function UploadBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  return (
    <div className="uploadBar">
      <div className="uploadBar__top">
        <Avatar />
        <div className="uploadBar__button" onClick={handleOpenDialog}>
          Bạn đang nghĩ gì?
        </div>
      </div>

      <div className="uploadBar__bot">
        <div className="uploadBar__option" style={{ color: "#F3425F" }}>
          <VideocamIcon className="uploadBar__option-icon" />
          <p>Video trực tiếp</p>
        </div>

        <div className="uploadBar__option" style={{ color: "#45BD62" }}>
          <PhotoLibraryIcon className="uploadBar__option-icon" />
          <p>Ảnh/Video</p>
        </div>

        <div className="uploadBar__option" style={{ color: "#F7B928" }}>
          <InsertEmoticonIcon className="uploadBar__option-icon" />
          <p>Cảm xúc/Hoạt động</p>
        </div>
      </div>

      <CustomDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
