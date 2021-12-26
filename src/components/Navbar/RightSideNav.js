import React, { useState } from "react";
import { Avatar, IconButton, Popover, Typography, Badge } from "@mui/material";
import user from "../../assets/user.jpg";
import {
  Apps as AppsIcon,
  Notifications as NotificationsIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material";
import NavNotificationMenu from "./NavNotificationMenu";
import { styled } from "@mui/material/styles";

import Messenger from "./PopupMessenger/Messenger";
export default function RightSideNav() {
  const [anchorElNoti, setAnchorElNoti] = useState(null);
  const openNoti = Boolean(anchorElNoti);

  const [popup, setPopup] = useState(null);

  const handleClick = (e) => {
    setPopup(e.currentTarget);
  };

  const handleClose = () => {
    setPopup(null);
  };

  const handleNotiClick = (e) => {
    setAnchorElNoti(e.currentTarget);
  };

  const handleNotiClose = () => {
    setAnchorElNoti(null);
  };

  const open = Boolean(popup);
  const id = open ? "popup-messenger" : undefined;
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -5,
      top: -5,
      padding: "0 4px",
      backgroundColor: "#e41e3f",
    },
  }));

  return (
    <div className="right-nav flex-center">
      <a
        href="/"
        className="nav-avatar-area flex-center"
        style={{ marginRight: "12px" }}
      >
        <Avatar
          alt="avatar"
          src={user}
          sx={{ width: 28, height: 28, marginRight: "5px" }}
        />
        <Typography style={{ fontSize: "1.17em" }}>User</Typography>
      </a>
      <IconButton className="right-nav-btn">
        <AppsIcon />
      </IconButton>

      <IconButton
        className="right-nav-btn"
        aria-describedby={id}
        onClick={handleClick}
      >
        <svg
          viewBox="0 0 28 28"
          alt=""
          className="p361ku9c"
          height="20"
          width="20"
        >
          <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
        </svg>
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={popup}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Messenger />
      </Popover>
      <IconButton className="right-nav-btn" onClick={handleNotiClick}>
        <StyledBadge color="secondary" badgeContent={21} max={20}>
          <NotificationsIcon />
        </StyledBadge>
      </IconButton>

      <IconButton className="right-nav-btn">
        <ArrowDropDownIcon />
      </IconButton>
      <NavNotificationMenu
        anchorEl={anchorElNoti}
        open={openNoti}
        handleClose={handleNotiClose}
      />
    </div>
  );
}
