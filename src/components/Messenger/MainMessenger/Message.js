import React, { useRef, useEffect, useState } from 'react'
import { Avatar, Typography, IconButton } from '@mui/material'
import {
    MoreVert as MoreVertIcon,
    Reply as ReplyIcon,
    SentimentSatisfiedAlt as SmileIcon
} from '@mui/icons-material';
import ava from '../../../assets/user.jpg'

export default function Message({ mainUser, messages, currentMessage, index, theme }) {

    const messageCover = useRef(null);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {

        return () => {
        }
    }, [])

    const getClassNameForMessage = () => {
        let className = ""
        if (currentMessage.user === mainUser) {
            className += "message-user-side "
        } else {
            className += "message-other-side "
        }

        if (checkNextMessage(index)) {
            className += "message-same-break "
        } else {
            className += "message-diff-break "
        }
        return className
    }

    const checkNextMessage = () => {
        const currentMessageUser = messages[index].user;
        const nextMessageUser = messages[index + 1]?.user;
        return currentMessageUser === nextMessageUser;
    }

    return (
        <div className={`messenger-messasge-cover ${getClassNameForMessage(currentMessage, index)}`} ref={messageCover}
            onMouseEnter={() => setIsShow(true)}
            onMouseLeave={() => setIsShow(false)}
        >
            {(!checkNextMessage(index) && currentMessage.user !== mainUser) &&
                <Avatar className="avatar"
                    src={ava} alt="ava"
                    sx={{ width: '28px', height: '28px', borderRadius: '100%', objectFit: 'cover', marginRight: '8px', marginBottom: '5px' }}
                />
            }
            {
                (checkNextMessage(index) && currentMessage.user !== mainUser)
                &&
                <div style={{ width: '28px', height: '28px', marginRight: '8px' }}></div>
            }
            <Typography className="messenger-messasge"
                style={{
                    fontSize: '1.2em',
                    backgroundColor: getClassNameForMessage(currentMessage, index).includes("message-user-side") && theme
                }}>
                {currentMessage.content}
            </Typography>
            {isShow && <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                <IconButton className="message-function-button"><MoreVertIcon className="message-function-icon" /></IconButton>
                <IconButton className="message-function-button"><ReplyIcon className="message-function-icon" /></IconButton>
                <IconButton className="message-function-button"><SmileIcon className="message-function-icon" /></IconButton>
            </div>}
        </div>
    )
}
