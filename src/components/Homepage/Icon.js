import React, { useState } from "react";

export default function Icon({ index, img, id, title, open, handleReaction }) {
  const [hover, setHover] = useState(false);
  const delay = index / 20 + 0.2;

  const divStyles = {
    transition: `transform 0.2s ${delay}s cubic-bezier(.76,.26,.28,1.4), opacity 0.1s ${delay}s`,
    transform: open
      ? "translateY(0px) scale(1)"
      : "translateY(30px) scale(0.8)",
    opacity: open ? 1 : 0,
  };

  const iconStyles = {
    display: 'flex',
    transition: "all 0.2s",
    transform: hover
      ? "translateY(-2px) scale(1.2)"
      : "translateY(0px) scale(1)",
    transformOrigin: "bottom",
    width: '50px',
    // margin: "2px",
  };

  const handleHover = (isHover) => {
    setHover(isHover);
  };

  return (
    <li
      className="post__rection-iconContainer"
      style={divStyles}
      onClick={() => handleReaction({ label: title, id: id, active: true, selected: img })}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <img
        className="post__rection-icon"
        style={iconStyles}
        src={img}
        alt={title}
      />
    </li>
  );
}
