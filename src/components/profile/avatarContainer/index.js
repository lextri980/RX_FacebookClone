import React from 'react'
import AvatarImage from './AvatarImage';
import styled from "styled-components";
import FriendAsc from './FriendList';
import AddStory from './AddStory';


const ProfileAvatar = styled.div`
    width: 870px;
    margin: auto;
    position: relative;
    display:flex;
`

function AvatarContainer() {
    return (
        <ProfileAvatar>
            <AvatarImage/>
            <FriendAsc/>
            <AddStory/>
        </ProfileAvatar>
    )
}

export default AvatarContainer
