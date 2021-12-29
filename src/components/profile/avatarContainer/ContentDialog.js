import React from "react";
import styled, { css } from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";
import { Divider } from "@mui/material";
import { Add, Edit, CropOriginal } from "@mui/icons-material";

const imgJson = {avatar:[
  "https://i.pinimg.com/736x/f4/07/f6/f407f63c6b84f8eed9f68c04b95b8f0e.jpg",
  "https://i.pinimg.com/736x/af/37/fb/af37fb5272133c7b58f5cfbdd2abaf6a.jpg",
  "https://i.pinimg.com/736x/cf/95/81/cf958121d7b80d89fd8a5d8e46eed689.jpg"
],cover:[
  "https://i.pinimg.com/564x/03/ab/b5/03abb5d5641714b9f2401db650704abc.jpg",
  "https://i.pinimg.com/564x/8d/8b/2b/8d8b2b2b82147f70ba862f4f182505d5.jpg"
],upload:[
  "https://i.pinimg.com/736x/a3/88/2b/a3882bd16f16e786aaa2a70750173262.jpg",
  "https://i.pinimg.com/736x/0c/40/21/0c40210dab5427b605fc595d0e8b8c7c.jpg",
]}

const ExitBtn = styled(CancelIcon)`
  position: absolute;
  top: -3px;
  right: -10px;
  font-size: 40px;
  @media (max-width:400px){
    font-size: 35px;
  }
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
  @media (max-width:400px){
    font-size: 16px;
  }
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
  @media (max-width:400px){
    margin-left: -15px;
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
  @media (max-width:400px){
    margin-right: -15px;
  }
`;

const Image = styled("img")`
  width: 105px;
  height: 105px;
  border-radius: 7px;
  margin-right: 10px;
  cursor: pointer;
  &:hover{
    opacity:0.5;
  }
  @media (max-width:400px){
    width: 70px;
    height: 70px;
  }
`;

const RecommendImg = styled("div")`
margin-top:15px;
`;

const UploadedImg = styled("div")`
margin-top:15px;
`;

const AvatarImg = styled("div")`
margin-top:15px;
`;

const CoverImg = styled("div")`
margin-top:15px;
`;

const TextH4 = styled('h4')`
  margin-bottom: 10px;
`

function ContentDialog({changeAvatar,handleClose}) {

  const handleOnClick = (link)=>{
    changeAvatar(link);
    handleClose();
  }

  return (
    <div>
      <HeaderDialog>
        <TextHeader>Cập nhật ảnh đại diện</TextHeader>
        <ExitBtn onClick={handleClose}/>
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
      <TextH4>Ảnh gợi ý</TextH4>
      {imgJson.cover.map(ele=><Image key={ele} src={ele} onClick={(e)=>handleOnClick(e.target.getAttribute('src'))}/>)}
      {imgJson.upload.map(ele=><Image key={ele} src={ele} onClick={(e)=>handleOnClick(e.target.getAttribute('src'))} />)}
      </RecommendImg>
      <UploadedImg>
          <TextH4>Ảnh đã tải lên</TextH4>
      {imgJson.upload.map(ele=><Image key={ele} src={ele} onClick={(e)=>handleOnClick(e.target.getAttribute('src'))}/>)}
      </UploadedImg>
      <AvatarImg>
      <TextH4>Ảnh đại diện</TextH4>
      {imgJson.avatar.map(ele=><Image key={ele} src={ele} onClick={(e)=>handleOnClick(e.target.getAttribute('src'))}/>)}
      </AvatarImg>
      <CoverImg>
      <TextH4>Ảnh bìa</TextH4>
      {imgJson.cover.map(ele=><Image key={ele} src={ele} onClick={(e)=>handleOnClick(e.target.getAttribute('src'))}/>)}
      </CoverImg>
    </div>
  );
}

export default ContentDialog;
