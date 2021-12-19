import React from 'react'
import styled from "styled-components";

const FriendEle = styled.div`
    width: 36px;
    height:36px;
    border-radius:50%;
    overflow: hidden;
    border: 3px solid #242526;
    margin-left:-10px;
    cursor:pointer;
`
const Image = styled.img`
    width: 100%;
    height:auto;
`
function Friend({src}) {
    return (
        <FriendEle>
            <Image src={src} alt="avatar" />
        </FriendEle>
    )
}

export default Friend
