import React from "react";
import styled from "styled-components";
import { Button, Popover, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {Link} from "react-router-dom"
import MoreBtn from "./MoreBtn";


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

const showNavbar = {main:[
  { vn: "Bài viết", eng: "" },
  { vn: "Giới thiệu", eng: "about" },
  { vn: "Bạn bè", eng: "friends" },
  { vn: "Ảnh", eng: "photos" },
  { vn: "Kho lưu trữ", eng: "archive" },
  { vn: "Video", eng: "videos" }
], hid:[]};
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

const FlexDiv = styled("div")`
  display:flex;
  align-items:center;
`

const widthWin = window.innerWidth;
if(widthWin < 430){
  const temp = showNavbar.main.splice(2,4);
  showNavbar.hid = showNavbar.hid.concat(temp);
}
else if(widthWin < 500){
  const temp = showNavbar.main.splice(3,3);
  showNavbar.hid = showNavbar.hid.concat(temp);
}
else if(widthWin < 590){
  const temp = showNavbar.main.splice(4,2);
  showNavbar.hid = showNavbar.hid.concat(temp);
}
else if(widthWin < 655){
  const temp = showNavbar.main.pop();
  showNavbar.hid.push(temp)
}

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
      <FlexDiv>
        {showNavbar.main.map((ele)  => (
          <CusLink to={`/profile/${ele.eng}`} key={ele.vn}>
            <TextNav>{ele.vn}</TextNav>
          </CusLink>
        ))}
        <MoreBtn hid = {showNavbar.hid} />
      </FlexDiv>
      <div>
        <CusNavButton
        sx={{mt:'8px'}}
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
