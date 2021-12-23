import React from "react";
import styled from "styled-components";
import EditIcon from '@mui/icons-material/Edit';

const CustomButton = styled("button")`
  background-color: #3A3B3C;
  padding: 8px 15px 8px 10px;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 15px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;
  position: absolute;
  height: 37px;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #4E4F50;
  }
`;

function EditInfoBtn() {
  return <CustomButton><EditIcon sx={{ fontSize: "20px", mr:'2px'}}/> Chỉnh sửa trang cá nhân</CustomButton>;
}

export default EditInfoBtn;
