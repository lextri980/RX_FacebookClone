import {React, useState} from 'react';
import CoverImgBtn from './CoverImgBtn';
import { styled } from "@mui/material/styles";

const CoverImageContainer = styled('div')`
width: 940px;
height: 58%;
margin: auto;
overflow: hidden;
border-radius:0 0 15px 15px;
position: relative;
`

const Image = styled('img')`
width: 100%;
height: 110%;
`

function CoverContainer() {
    const [coverImage,setCoverImage] = useState("https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/262363283_3171575486421858_460081271991288862_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_ohc=IetDE_X2R-IAX_rlLIe&tn=e_caVoF4nqMJtuev&_nc_ht=scontent.fhan5-10.fna&oh=00_AT-IJg7fF3TrFD9gczvK8kOhk6pjAkrrdlwGiVqEXeDS9Q&oe=61C47456")
    const handleCoverImage = ()=>{
        
    }
    const handleChangeImage = (e)=>{
        setCoverImage(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <CoverImageContainer>
            <Image src={coverImage} alt="cover"/>
            <CoverImgBtn handleCoverImage={handleCoverImage} handleChangeImage={handleChangeImage}/>
  
        </CoverImageContainer>
    )
}

export default CoverContainer
