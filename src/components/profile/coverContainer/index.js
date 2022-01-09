import {React, useState} from 'react';
import CoverImgBtn from './CoverImgBtn';
import { styled } from "@mui/material/styles";
import ConfirmBoxCover from './ConfirmBoxCover';

const CoverImageContainer = styled('div')`
width: 940px;
height: 348px;
margin: auto;
overflow: hidden;
border-radius:0 0 15px 15px;
position: relative;
background-color:#252729;

@media (max-width: 940px){
    width:100%;
    max-width:940px;
    height:37vw;
    max-height:348px;
}
`

const Image = styled('img')`
width: 100%;
height: 110%;
color: transparent;
`

function CoverContainer() {
    const [coverImage,setCoverImage] = useState("https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/262363283_3171575486421858_460081271991288862_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_ohc=GXKXj680FRwAX_w0XXA&_nc_ht=scontent.fhan5-10.fna&oh=00_AT_raGjKZuTgOY1WdTnfbwyTGjretKaNVm0Z_xVXa--QEA&oe=61DE2996")
    const handleCoverImage = ()=>{
        
    }
    const handleChangeImage = (e)=>{
        setCoverImage(URL.createObjectURL(e.target.files[0]));
    }

    const handleChangeImgByChoose = (ele)=>{
        setCoverImage(ele)
    }

    const handleDelCover = ()=>{
        setCoverImage("");
    }
    
    return (
        <CoverImageContainer>
            <ConfirmBoxCover/>
            <Image src={coverImage} alt="cover"/>
            <CoverImgBtn handleCoverImage={handleCoverImage} handleChangeImgByChoose={handleChangeImgByChoose} handleChangeImage={handleChangeImage} handleDelCover={handleDelCover}/>
        </CoverImageContainer>
    )
}

export default CoverContainer
