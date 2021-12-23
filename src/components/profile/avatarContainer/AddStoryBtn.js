import React from "react";
import { styled } from "@mui/material/styles";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

const CustomButton = styled("button")`
  background-color: #007fff;
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
  right: 230px;
  display:flex;
  align-items: center;

  &:hover {
    background-color: #0059b2;
  }
`;
function AddStoryBtn() {
  return (
    <CustomButton>
      <AddCircleOutlineRoundedIcon sx={{ fontSize: "20px" ,mr:"5px"}}/>
      Thêm vào tin
    </CustomButton>
  );
}

export default AddStoryBtn;
