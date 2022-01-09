import {
  Backpack as BackpackIcon,
  PlayForWork as PlayForWorkIcon,
  School as SchoolIcon,
  WatchLater as WatchLaterIcon,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import NormalBtn from "../../customButton/NormalBtn";
import './IntroPost.scss'

const IntroContainer = styled("div")`
  width: 350px;
  background-color: #242526;
  border-radius: 10px;
  padding-left: 17.5px;
  padding-top: 15px;
`;
const TitlePost = styled("h1")`
  margin-bottom: 15px;
`;

function IntroPosts() {
  return (
    <IntroContainer className="profile__intro-posts">
      <TitlePost>Giới thiệu</TitlePost>
      <NormalBtn text="Thêm tiểu sử" />
      <p>
        <BackpackIcon />
        <span className="profile__intro-posts__span-text">Đại học Hà Nội</span>
      </p>
      <p>
        <SchoolIcon />
        <span className="profile__intro-posts__span-text">Đã từng học tại THPT Thanh Hà</span>
      </p>
      <p>
        <PlayForWorkIcon />
        <span className="profile__intro-posts__span-text">Đến từ Hải Dương</span>
      </p>
      <p>
        <WatchLaterIcon />
        <span className="profile__intro-posts__span-text">Tham gia vào Tháng 7 năm 2013</span>
      </p>
      <NormalBtn text="Chỉnh Sửa chi tiết" />
    </IntroContainer>
  );
}

export default IntroPosts;
