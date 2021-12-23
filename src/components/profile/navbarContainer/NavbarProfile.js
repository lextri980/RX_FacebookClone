import React from "react";
import styled from "styled-components";
import { Button, Popover, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {Link} from "react-router-dom"


const MainNavbar = styled("div")`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`;

const CusLink = styled(Link)`
  font-size: 15px;
  font-weight: 600;
  padding: 19px 14px 17px 14px;
  display: inline-block;
  border-radius: 7px;
  text-align: center;
  border-bottom: 5px solid red;
  &:hover {
    background-color: #3a3b3c;
  }
`;
const TextNav = styled("p")`
  color: #a1a3a6;
`;
// const UnderLine = styled("div")`
//   position: absolute;
//   bottom: -3px;
//   left: 0;
//   background-color: red;
//   height: 3px;
//   width: 100%;
// `;

const CusNavButton = styled(Button)`
  background-color: #373838;
  width: 50px;
  min-width: 0;
  max-height: 35px;
  border-radius: 7px;
  text-align: center;
  font-weight: bold;
  :hover {
    background-color: #4e4f50;
  }
`;

const showNavbar = [
  { vn: "Bài viết", eng: "" },
  { vn: "Giới thiệu", eng: "about" },
  { vn: "Bạn bè", eng: "friends" },
  { vn: "Ảnh", eng: "photos" },
  { vn: "Kho lưu trữ", eng: "archive" },
  { vn: "Video", eng: "videos" },
];
const hiddenNavbar = [
  "Check in",
  "Thể thao",
  "Âm nhạc",
  "Phim",
  "Sách",
  "Chương trình TV",
  "Thích",
  "Sự kiện",
  "Nhóm",
  "Ứng dụng và trò chơi",
];

function NavbarProfile() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <MainNavbar>
      <div>
        {showNavbar.map((ele) => (
          <CusLink to={`/profile/${ele.eng}`} key={ele.vn}>
            <TextNav>{ele.vn}</TextNav>
            {/* <UnderLine /> */}
          </CusLink>
        ))}
        <Button >
          <TextNav>Xem Thêm</TextNav>
          {/* <UnderLine /> */}
        </Button>
      </div>
      <div>
        <CusNavButton
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </CusNavButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Typography>...</Typography>
        </Popover>
      </div>
    </MainNavbar>
  );
}

export default NavbarProfile;
