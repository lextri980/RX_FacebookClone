import React from 'react'
import { Card, Typography, IconButton, CardContent } from '@mui/material'
import {
    MoreHoriz as MoreHorizIcon,
    Videocam as VideocamIcon,
    Edit as EditIcon
} from '@mui/icons-material';
import CustomizedInputBase from '../../Navbar/CustomizeInput';
import EachMessenger from './EachMessenger';


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function ListMessenger({ messengers, mainUser }) {
    return (
        <Card className="list-messenger">
            <div className="mess-header">
                <div className="top-header">
                    <Typography className="mess-h1" variant="h1">Chats</Typography>
                    <div>
                        <IconButton className="mess-btn"><MoreHorizIcon /></IconButton>
                        <IconButton className="mess-btn"><VideocamIcon /></IconButton>
                        <IconButton className="mess-btn"><EditIcon /></IconButton>
                    </div>
                </div>
                <div className="bottom-header">
                    <CustomizedInputBase
                        className="mess-main-input"
                        placeholder="Search Messenger"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                </div>
            </div>
            <CardContent className="card-content" >
                {messengers.map(m => {
                    return <EachMessenger
                        key={m.id}
                        otherUser={m.users.find(user => user !== mainUser)}
                        latest={m.messengers[m.messengers.length - 1]}
                        
                    />
                })}
            </CardContent>
        </Card>
    )
}
