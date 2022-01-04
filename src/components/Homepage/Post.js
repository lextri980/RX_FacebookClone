import React, { useState } from "react";

import { Avatar, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReplyIcon from "@mui/icons-material/Reply";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import ReactionBar from "./ReactionBar";
import Comment from "./Comment";

export default function Post({ image }) {
  const [commentOpened, setCommentOpened] = useState(false);

  return (
    <div className="post">
      <div className="post__head">
        <div className="post__headLeft">
          <Avatar />
          <div className="post__headLeft-info">
            <h4>Username</h4>
            <p style={{ color: "#b0b3b8" }}>Timestamp</p>
          </div>
        </div>

        <IconButton>
          <MoreHorizIcon style={{ cursor: "pointer", color: "white" }} />
        </IconButton>
      </div>

      <div className="post__body">
        <p className="post__body-caption">
          i’m done with school this semester phew… finals were the same as
          always; a beast to overcome but i’m happy with the results. i’ll be
          posting the whenever i get around to it. this poster was actually
          apart of one of them: the concept was to create a campaign that
          branded itself around protest slogans. i didn’t initially plan on
          posting this but people seemed to like it so hey here we are: number
          92
        </p>
        {image && <img className="post__body-image" src={image} alt="" />}
      </div>

      <div
        className="post__bottom"
        style={{
          borderTop: !image && "1px solid #3e4042",
          borderBottom: commentOpened && "1px solid #3e4042",
        }}
      >
        <ReactionBar />

        <div
          className="post__bottom-action"
          onClick={() => setCommentOpened(true)}
        >
          <ChatBubbleOutlineOutlinedIcon className="post__bottom-icon" />
          <p>Bình luận</p>
        </div>

        <div className="post__bottom-action">
          <ReplyIcon className="post__bottom-icon" />
          <p>Chia sẻ</p>
        </div>
      </div>

      <div
        className="post__comment"
        style={{ display: !commentOpened ? "none" : "block" }}
      >
        <div className="comment__option">
          <div className="comment__optionTitle">Tất cả bình luận</div>
          <ArrowDropDownIcon />
        </div>
        <Comment />
        <Comment />

        <div className="comment__input">
          <Avatar
            alt="Remy Sharp"
            className="story__cardProfile-avatar"
            sx={{ width: "35px", height: "35px", marginRight: "5px" }}
          />

          <div className="comment__inputBar">
            <input type="text" placeholder="Viết bình luận..."/>
          </div>
        </div>
      </div>
    </div>
  );
}
