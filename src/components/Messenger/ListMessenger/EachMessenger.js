import React from 'react'
import ava from '../../../assets/user.jpg'
import { Avatar, Typography } from '@mui/material'

export default function EachMessenger({ otherUser, latest }) {


    return (
        <div className="each-mess">
            <Avatar
                className="avatar"
                src={ava} alt="ava"
                sx={{ width: '56px', height: '56px', borderRadius: '100%', objectFit: 'cover' }}
            />
            <div className="each-mess-content">
                <Typography className="user-name">{otherUser}</Typography>
                <Typography className="latest-mess">
                    {(otherUser === latest.user)
                        ? <span className="truncate-one grey-color"> {latest.content}</span>
                        : <span className="truncate-one grey-color"> You: {latest.content}&#32;</span>
                    }
                    <span className="grey-color" style={{ padding: '0 3px' }}> · </span>
                    <span className="grey-color"> {latest.time} </span>
                </Typography>
            </div>
        </div >
    )
}
