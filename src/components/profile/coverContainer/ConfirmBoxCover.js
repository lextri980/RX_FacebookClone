import React from 'react'
import styled, { css } from "styled-components";
import PublicIcon from '@mui/icons-material/Public';

const ConfirmBoxContainer = styled('div')`
    background-color:#28292A;
    opacity:0.7;
    position:fixed;
    top:56px;
    left:0;
    width:100%;
    height:65px;
    display:none;
    justify-content:space-between;
    align-items:center;
    padding: 0 10px;
`
const Text = styled('div')`
display:flex;
justify-content:space-between;
align-items:center;
color:white;
font-size:17px;
`

const shareCssButton = css`
color:white;
  border: none;
  padding: 8px 35px;
  border-radius: 5px;
  margin:5px 5px 0 10px;
  cursor:pointer;
  font-weight:600;
`;

const ButtonCancel = styled('button')`
${shareCssButton}
background-color:#717171;
&:hover{
    background-color:#3A3B3C;
  }
`

const ButtonConfirm = styled('button')`
background-color:#3982E4;
${shareCssButton}
&:hover{
    background-color: #0059b2;
  }
`

function ConfirmBoxCover() {

    const handleCancelChange = ()=>{
        document.querySelector('.confirm-box-profile-dung').style.display = "none";
    }

    const handleConfirmChange = ()=>{
        document.querySelector('.confirm-box-profile-dung').style.display = "none";
    }

    return (
        <ConfirmBoxContainer className='confirm-box-profile-dung'>
            <Text>
            <PublicIcon sx={{mx:'10px'}}/>
            Ảnh bìa của bạn hiển thị công khai.
            </Text>
            <div>
            <ButtonCancel onClick={handleCancelChange}>Hủy</ButtonCancel>
            <ButtonConfirm onClick={handleConfirmChange}>Lưu thay đổi</ButtonConfirm>
            </div>
        </ConfirmBoxContainer>
    )
}

export default ConfirmBoxCover
