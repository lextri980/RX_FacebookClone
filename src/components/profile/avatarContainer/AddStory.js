import React from "react";
import { styled } from "@mui/material/styles";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

const CustomButton = styled("button")`
  background-color: #007fff;
  padding: 15px 15px 15px 10px;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 15px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;
  height: 40px;
  position: absolute;
  bottom: 0;
  right: 200px;
  display:flex;
  align-items: center;

  &:hover {
    background-color: #0059b2;
  }
`;
function AddStory() {
  return (
    <CustomButton>
      <AddCircleOutlineRoundedIcon sx={{ fontSize: "20px" ,mr:"10px"}}/>
      Thêm vào tin
    </CustomButton>
  );
}

export default AddStory;
