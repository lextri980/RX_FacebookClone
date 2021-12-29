import React from "react";
import styled from "styled-components";
import PopupAvatar from "./PopupAvatar";

const AvatarContainer = styled.div`
  width: 177px;
  height: 177px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #2d343b;
  position: absolute;
  top: -33px;
  left: 0;
   @media (max-width: 898px){
    position:relative;
 }
`;

const Avatar = styled.img`
  width: 100%;
  height: auto;
  max-height:170px;
`;

function AvatarImage() {
  return (
    <>
      <AvatarContainer>
        <Avatar
          src="https://i.pinimg.com/564x/c7/1c/fa/c71cfa901ececa3ab8cb59968aefc0b1.jpg"
          alt="somebody"
        />
      </AvatarContainer>
        <PopupAvatar/>
    </>
  );
}

export default AvatarImage;
