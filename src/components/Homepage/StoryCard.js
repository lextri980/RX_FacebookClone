import React from "react";

// UI
import { Avatar } from "@mui/material";

// Components
import { StyledBadge } from "./StyledBadge";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
export default function StoryCard({ avatar, image, name, index, data }) {
  const navigate = useNavigate();

  const handleChangeRoute = () => {
    navigate(`/stories/${index}`,
      { replace: false, state: { data: data } });
  }

  return (
    <div className="story__card" onClick={handleChangeRoute}>
      <img src={image} className="story__cardImage" alt='' />
      {avatar ? (
        <StyledBadge
          className="story__cardProfile"
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            alt="Remy Sharp"
            src={avatar}
            className="story__cardProfile-avatar"
          />
        </StyledBadge>
      ) : (
        <Avatar className="story__cardProfile story__cardProfile-avatar" />
      )}
      <h4>{name}</h4>
      <div
        style={{
          backgroundImage: "linear-gradient(0deg,#18191a,transparent)",
          width: "200%",
          height: "200%",
          position: "absolute",
          top: 0,
          zIndex: 1,
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
}
