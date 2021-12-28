import React from "react";
import { IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";

const Comment = () => {
  return (
    <>
      <div className="comment__container">
        <Avatar
          alt="Remy Sharp"
          src="https://images.unsplash.com/profile-1581969924925-91f6482dfb23image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
          className="story__cardProfile-avatar"
          sx={{ width: "35px", height: "35px", marginRight: "5px" }}
        />

        <div className="comment__right">
          <div className="comment__rightTop">
            <div className="comment__content">
              <div className="comment__userName">Sinitta Leunen</div>
              <div className="comment__text">So beautiful!</div>
            </div>
            <IconButton>
              <MoreHorizIcon style={{ cursor: "pointer", color: "white" }} />
            </IconButton>
          </div>

          <ul className="comment__actions">
            <li className="comment__actionLike">Thích</li>
            <li className="comment__actionLike">&nbsp;·&nbsp;</li>
            <li className="comment__actionLike">Phản hồi</li>
            <li className="comment__actionLike">&nbsp;·&nbsp;</li>
            <li className="comment__actionLike">2h trước</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Comment;
