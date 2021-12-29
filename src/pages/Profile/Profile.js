import React from "react";
import { Routes, Route } from "react-router-dom";
import { styled } from "@mui/material/styles";

import AvatarContainer from "../../components/profile/avatarContainer";
import CoverContainer from "../../components/profile/coverContainer";
import NavProfile from "../../components/profile/navbarContainer";
import PostsProfile from "../../components/profile/PostsProfile";
import InfoProfile from "../../components/profile/InfoProfile";
import FriendsProfile from "../../components/profile/FriendsProfile";

const ProfileContainer = styled("div")`
  background: rgb(4, 46, 91);
  background: linear-gradient(
    180deg,
    rgba(4, 46, 91, 1) 0%,
    rgba(75, 98, 122, 1) 50%,
    rgba(40, 43, 47, 1) 71%,
    rgba(36, 37, 38, 1) 100%
  );
  width: 100%;
  height: 573.5px;
  position:relative;
  @media (max-width: 898px){
    height:calc(360px + 35vw);
 }
 @media (max-width: 600px){
   height: calc(400px + 30vw);
 }
 @media (max-width: 400px){
  height: calc(435px + 30vw);
}
`;

function Profile() {
  return (
    <>
      <ProfileContainer>
        <CoverContainer />
        <AvatarContainer />
        <NavProfile />
      </ProfileContainer>
      <Routes>
        <Route path="/" element={<PostsProfile/>} />
        <Route path="/about" element={<InfoProfile/>} />
        <Route path="/friends" element={<FriendsProfile/>} />
      </Routes>
    </>
  );
}

export default Profile;
