import HomeIcon from "@mui/icons-material/Home";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PeopleIcon from "@mui/icons-material/People";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function MidNav() {
  return (
    <div className="nav-center flex-center" style={{ width: "100%" }}>
      <IconButton className="mid-nav-btn">
        <Link to="/">
          <HomeIcon className="mid-nav-icon" />
        </Link>
      </IconButton>
      <IconButton className="mid-nav-btn">
        <LiveTvIcon className="mid-nav-icon" />
      </IconButton>
      <IconButton className="mid-nav-btn">
        <StorefrontIcon className="mid-nav-icon" />
      </IconButton>
      <IconButton className="mid-nav-btn">
        <PeopleIcon className="mid-nav-icon" />
      </IconButton>
      <IconButton className="mid-nav-btn">
        {" "}
        <SportsEsportsIcon className="mid-nav-icon" />
      </IconButton>
    </div>
  );
}
