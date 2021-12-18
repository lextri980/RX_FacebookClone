import React, { useState } from "react";
import Icon from "./Icon";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

export default function ReactionBar() {
  const images = [
    {
      id: "like",
      description: "Thích",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b2c16246101945.5847ebcf25be0.png",
    },
    {
      id: "love",
      description: "Yêu thích",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0f2e8946101945.5847ebcf27535.png",
    },
    {
      id: "haha",
      description: "Haha",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ceae3e46101945.5847ebcf26761.png",
    },
    {
      id: "wow",
      description: "Wow",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e0150f46101945.5847ebcf26131.png",
    },
    {
      id: "sad",
      description: "Buồn",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6c1e7d46101945.5847ebcf27051.png",
    },
    {
      id: "angry",
      description: "Phẫn nộ",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/db294e46101945.5847ebcf27c57.png",
    },
  ];

  const [open, setOpen] = useState(false);
  const [reaction, setReaction] = useState({
    label: "Thích",
    id: "",
    active: false,
    selected:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b2c16246101945.5847ebcf25be0.png",
  });

  const classReactIconDefault = `post__bottom-icon ${
    reaction.active ? "hidden" : "inactive"
  }`;
  const classReactIcon = `${reaction.active ? "" : "hidden"}`;

  const toggleOpen = (isOpened) => {
    setOpen(isOpened);
  };

  const handleReaction = (reaction) => {
    setReaction({ ...reaction, reaction });
  };

  const handleClick = () => {
    if (reaction.active) {
      setReaction({
        ...reaction,
        label: "Thích",
        id: "",
        active: false,
        selected:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b2c16246101945.5847ebcf25be0.png",
      });
    } else {
      setReaction({ ...reaction, id: "like", active: true });
    }
  };

  const ul_styles = {
    visibility: open ? "visible" : "hidden",
    opacity: open ? 1 : 0,
  };

  return (
    <div
      className="post__reaction"
      onMouseEnter={() => toggleOpen(true)}
      onMouseLeave={() => toggleOpen(false)}
    >
      <ul className="post__reaction-bar" style={ul_styles}>
        {images.map((image, index) => (
          <Icon
            key={image.id}
            id={image.id}
            index={index}
            img={image.img}
            title={image.description}
            open={open}
            handleReaction={handleReaction}
          />
        ))}
      </ul>
      <div className="post__bottom-action" onClick={handleClick}>
        <ThumbUpOutlinedIcon className={classReactIconDefault} />
        <img
          className={classReactIcon}
          src={reaction.selected}
          style={{ width: "25px", marginRight: "5px" }}
          alt=''
        />
        <p className={reaction.id}>{reaction.label}</p>
      </div>
    </div>
  );
}
