import React from "react";
import { Avatar } from "@mui/material";
import { StyledBadge } from "./StyledBadge";

export default function SideBarOption({ src, Icon, title, avatar }) {
  return (
    <div className="sb__option">
      {src && (
        <Avatar src={src} sx={{ width: 28, height: 28, marginRight: "10px" }} />
      )}

      {avatar && (
        <StyledBadge
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
      )}

      {Icon && (
        <Icon
          sx={{ bgcolor: "#242526", borderRadius: "50%" }}
        />
      )}

      <p className='sb__title'>{title}</p>
    </div>
  );
}
