import React from "react";
import AvatarImage from "./AvatarImage";
import styled from "styled-components";
import FriendList from "./FriendList";
import AddStoryBtn from "./AddStoryBtn";
import EditInfoBtn from "./EditInfoBtn";

const ProfileAvatar = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  width: 870px;
  margin: auto;
  position: relative;
  display: flex;
  @media (max-width: 898px) {
    position: absolute;
    left: 50%;
    width:auto;
    transform: translateX(-50%);
    top: 30vw;
  }
`;
const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`;
const WrapperBtn = styled("div")`
  display:flex;
  justify-content:center;
@media (max-width: 400px){
  flex-wrap: wrap;
}

`;

function AvatarContainer() {
  return (
    <ProfileAvatar>
      <Wrapper>
        <AvatarImage />
        <FriendList />
        <WrapperBtn>
            <AddStoryBtn />
            <EditInfoBtn />
        </WrapperBtn>
      </Wrapper>
    </ProfileAvatar>
  );
}

export default AvatarContainer;
