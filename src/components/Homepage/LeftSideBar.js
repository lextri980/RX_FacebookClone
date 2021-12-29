import React from "react";

// UI
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Styles
import "./SideBar.scss";

// Components
import Avatar from "../../assets/user.jpg";
import SideBarOption from "./SideBarOption";

const Friend = "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png";
const Messenger =
  "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png";
const Market = "https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png";

function LeftSideBar() {
  return (
    <div className="sb" id="leftSideBar">
      <SideBarOption src={Avatar} title="Username" />
      <SideBarOption src={Friend} title="Bạn bè" />
      <SideBarOption src={Messenger} title="Messenger" />
      <SideBarOption src={Market} title="Marketplace" />
      <SideBarOption Icon={ExpandMoreIcon} title="Xem thêm" />
    </div>
  );
}

export default LeftSideBar;
