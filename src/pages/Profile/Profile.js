import React from "react";
import { styled } from "@mui/material/styles";
import AvatarContainer from "../../components/profile/avatarContainer";
import CoverContainer from "../../components/profile/coverContainer";

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
  height: 590px;
`;
function Profile() {
  return (
    <ProfileContainer>
      <CoverContainer />
      <AvatarContainer />
    </ProfileContainer>
  );
}

export default Profile;
