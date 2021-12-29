import React from "react";
import styled, { css } from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";
import { Divider } from "@mui/material";
import { Add, Edit, CropOriginal } from "@mui/icons-material";

const imgJson = {avatar:[

],cover:[

],upload:[
  
]}

const ExitBtn = styled(CancelIcon)`
  position: absolute;
  top: -3px;
  right: -10px;
  font-size: 40px;
`;

const HeaderDialog = styled("div")`
  position: relative;
  text-align: center;
  align-item: center;
  margin-bottom: 15px;
`;

const TextHeader = styled("p")`
  font-weight: bold;
  font-size: 20px;
`;

const FunctionGroup = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const shareCssBtn = css`
  width: 46%;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 0;
  border: none;
  border-radius: 5px;
  cursor:pointer;
`;

const UploadBtn = styled("button")`
  ${shareCssBtn}
  color:#4294FF;
  background-color: #263951;
  &:hover {
    background-color: #3c4d63;
  }
`;

const AddFrameBtn = styled("button")`
  ${shareCssBtn}
  color:white;
  background-color: #3a3b3c;
  &:hover {
    background-color: #4e4f50;
  }
`;

const EditImgBtn = styled("button")`
  padding: 5px 5px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #3a3b3c;
  &:hover {
    background-color: #4e4f50;
  }
`;

const shareCssImg = css`
  width: 105px;
  height: 105px;
`;

const RecommendImg = styled("div")``;

const UploadedImg = styled("div")``;

const AvatarImg = styled("div")``;

const CoverImg = styled("div")``;

function ContentDialog() {
  return (
    <div>
      <HeaderDialog>
        <TextHeader>Cập nhật ảnh đại diện</TextHeader>
        <ExitBtn />
      </HeaderDialog>
      <Divider sx={{ width: "100%" }} />
      <FunctionGroup>
        <UploadBtn>
          <Add />
          Tải ảnh lên
        </UploadBtn>
        <AddFrameBtn>
          <CropOriginal />
          Thêm khung
        </AddFrameBtn>
        <EditImgBtn>
          <Edit />
        </EditImgBtn>
      </FunctionGroup>
      <RecommendImg>

      </RecommendImg>
      <UploadedImg>
          
      </UploadedImg>
      <AvatarImg>

      </AvatarImg>
      <CoverImg>

      </CoverImg>
    </div>
  );
}

export default ContentDialog;
