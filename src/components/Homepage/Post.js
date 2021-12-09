import React from "react";

import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReplyIcon from "@mui/icons-material/Reply";

export default function Post({ image }) {
  return (
    <div className="post">
      <div className="post__head">
        <div className="post__headLeft">
          <Avatar />
          <div className="post__headLeft-info">
            <h4>Username</h4>
            <p>Timestamp</p>
          </div>
        </div>

        <MoreHorizIcon style={{ cursor: "pointer" }} />
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
        {image && <img className="post__body-image" src={image} />}
      </div>

      <div className="post__bottom">
        <div className="post__bottom-action">
          <ThumbUpOutlinedIcon className="post__bottom-icon" />
          <p>Thích</p>
        </div>

        <div className="post__bottom-action">
          <ChatBubbleOutlineOutlinedIcon className="post__bottom-icon" />
          <p>Bình luận</p>
        </div>

        <div className="post__bottom-action">
          <ReplyIcon className="post__bottom-icon" />
          <p>Chia sẻ</p>
        </div>
      </div>
    </div>
  );
}
