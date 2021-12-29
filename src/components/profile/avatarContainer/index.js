import React, {useState} from 'react'
import AvatarImage from './AvatarImage';
import styled from "styled-components";
import FriendList from './FriendList';
import AddStoryBtn from './AddStoryBtn';
import EditInfoBtn from './EditInfoBtn';


const ProfileAvatar = styled.div`
font-family: Helvetica, Arial, sans-serif;
    width: 870px;
    margin: auto;
    position: relative;
    display:flex;
    
`

function AvatarContainer() {
    
    return (
        <ProfileAvatar>
            <AvatarImage/>
            <FriendList/>
            <AddStoryBtn/>
           <EditInfoBtn/>
        </ProfileAvatar>
    )
    
}

export default AvatarContainer
