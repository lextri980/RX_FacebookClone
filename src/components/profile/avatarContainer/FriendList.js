import React from 'react'
import styled from "styled-components";
import Friend from './Friend';

const listFriends = [
    {
        "src":"https://i.pinimg.com/736x/45/ea/97/45ea9732f6d0525ab216c3cbd20e3a7c.jpg"
    },
    {
        "src":"https://media-exp1.licdn.com/dms/image/C5603AQGPE4MpUNwFsg/profile-displayphoto-shrink_400_400/0/1607738720409?e=1645056000&v=beta&t=VSCFnocziwxDtEtfrAObffeTQc6nCmEMnMgEu12WYBs"
    },
    {
        "src":"https://i.pinimg.com/736x/f5/20/f5/f520f5b137d4825be16723df70eb1c3e.jpg"
    },
    {
        "src":"https://i.pinimg.com/736x/5d/41/c8/5d41c8edd154176378ce81c7a40ebb44.jpg"
    },
    {
        "src":"https://i.pinimg.com/736x/2c/24/63/2c2463809f6ca87be67e466187f55a20.jpg"
    },
    {
        "src":"https://i.pinimg.com/736x/ff/5d/2c/ff5d2cf19ae42a04b58e447763577758.jpg"
    },
    {
        "src":"https://i.pinimg.com/736x/67/c9/0b/67c90bae3b3c1d7746c5f69ccdef1d77.jpg"
    },
    {
        "src":"https://i.pinimg.com/474x/1d/de/c5/1ddec5b5b0546e5eb1c40da955a9a70d.jpg"
    },
]

const Container = styled.div`
    margin-left: 190px;
    margin-top: 25px;
    @media (max-width: 898px) {
        margin:auto;
      }
`;

const Information = styled.div`
@media (max-width: 898px) {
    margin-top:-10px;
  }
`;

const UserName = styled.h1`
    color: #E4E6EB;
    font-size: 32px;

`;

const NumberFriend = styled.h3`
    color:#B0B3B8;
    @media (max-width: 898px) {
        text-align: center;
      }
`;

const ListFriends = styled.div`
    margin-top:10px;
    display:flex;
    @media (max-width: 898px) {
        justify-content:center;
        margin-bottom:15px;
      }
`

function FriendList() {
    return (
        <Container>
            <Information>
                <UserName>Phạm Tiến Dũng</UserName>
                <NumberFriend>337 friend</NumberFriend>
            </Information>
            <ListFriends>
                {listFriends.map((friend, index)=>(
                    <Friend src={friend.src}/>
                ))}
            </ListFriends>
        </Container>
    )
}

export default FriendList
