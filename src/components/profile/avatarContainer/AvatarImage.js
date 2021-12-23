import React from "react";
import styled from "styled-components";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const AvatarContainer = styled.div`
  width: 177px;
  height: 177px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #2d343b;
  position: absolute;
  top: -33px;
  left: 0;
`;

const Avatar = styled.img`
  width: 100%;
  height: auto;
`;

const UploadBtn = styled.button`
  position: absolute;
  bottom: 0px;
  left: 135px;
  background-color: #454646;
  border-radius: 50%;
  border: none;
  padding: 6px 6px 2px 6px;
  cursor: pointer;
  &:hover {
    background-color: #575859;
  }
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
      <UploadBtn>
        <CameraAltIcon sx={{ color: "#E8E7EC", m: "auto", fontSize: "26px" }} />
      </UploadBtn>
    </>
  );
}

export default AvatarImage;
