import React, { useRef, useEffect } from 'react'
import { Avatar, Typography, IconButton, InputBase } from '@mui/material';
import {
    LocalPhone as LocalPhoneIcon,
    Videocam as VideocamIcon,
    Info as InfoIcon,
    AddCircle as AddCircleIcon,
    PhotoLibrary as PhotoLibraryIcon,
    StickyNote2 as StickyNote2Icon,
    ThumbUp as ThumbUpIcon
} from '@mui/icons-material';
import ava from '../../../assets/user.jpg'
import Message from './Message';
export default function ChatSession({ mainUser, messageFromID, setOpenSetting }) {

    const themeColor = messageFromID.theme
    const buttonsHeaderStyle = { width: '28px', height: '28px', color: themeColor }
    const buttonsFooterStyle = { color: themeColor }
    const messasgeBody = useRef(null);

    useEffect(() => {
        let height = messasgeBody.current.scrollHeight;
        messasgeBody.current.scrollTo(0, height);
        return () => {
        }
    }, [messageFromID])

    console.log({ messageFromID })

    return (
        <div className={`messenger-chat-session `} >
            <div className="messenger-chat-session-header">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <Avatar
                            className="avatar"
                            src={ava} alt="ava"
                            sx={{ width: '40px', height: '40px', borderRadius: '100%', objectFit: 'cover', marginRight: '12px' }}
                        />
                        <div className="online-active-icon" style={{ right: '10px', bottom: '0' }}></div>
                    </div>
                    <div >
                        <Typography sx={{ fontWeight: 'bold' }}>{messageFromID.users.find(user => user !== mainUser)}</Typography>
                        <Typography className="message-status-text">Active now</Typography>
                    </div>
                </div>
                <div>
                    <IconButton className="chat-session-header-button"><LocalPhoneIcon sx={buttonsHeaderStyle} /></IconButton>
                    <IconButton className="chat-session-header-button"><VideocamIcon sx={buttonsHeaderStyle} /></IconButton>
                    <IconButton className="chat-session-header-button" onClick={() => { setOpenSetting(prevState => { return !prevState }) }}>
                        <InfoIcon sx={buttonsHeaderStyle} />
                    </IconButton>
                </div>
            </div>
            <div className="messenger-chat-session-body" ref={messasgeBody}>
                {messageFromID.messengers.map((m, index) => {
                    return <Message
                        mainUser={mainUser} key={m.id}
                        messages={messageFromID.messengers}
                        currentMessage={m} index={index}
                        theme={messageFromID.theme}
                    />
                })}
            </div>
            <div className="messenger-chat-session-footer">
                <IconButton className="chat-session-footer-button"><AddCircleIcon sx={buttonsFooterStyle} /></IconButton>
                <IconButton className="chat-session-footer-button"><PhotoLibraryIcon sx={buttonsFooterStyle} /></IconButton>
                <IconButton className="chat-session-footer-button"><StickyNote2Icon sx={buttonsFooterStyle} /></IconButton>
                <IconButton className="chat-session-footer-button">
                    <svg x="0px" y="0px" viewBox="0 0 16 16" height="20px" width="20px" className="a8c37x1j ms05siws hr662l2t b7h9ocf4 crt8y2ji"><path d="M.783 12.705c.4.8 1.017 1.206 1.817 1.606 0 0 1.3.594 2.5.694 1 .1 1.9.1 2.9.1s1.9 0 2.9-.1 1.679-.294 2.479-.694c.8-.4 1.157-.906 1.557-1.706.018 0 .4-1.405.5-2.505.1-1.2.1-3 0-4.3-.1-1.1-.073-1.976-.473-2.676-.4-.8-.863-1.408-1.763-1.808-.6-.3-1.2-.3-2.4-.4-1.8-.1-3.8-.1-5.7 0-1 .1-1.7.1-2.5.5s-1.417 1.1-1.817 1.9c0 0-.4 1.484-.5 2.584-.1 1.2-.1 3 0 4.3.1 1 .2 1.705.5 2.505zm10.498-8.274h2.3c.4 0 .769.196.769.696 0 .5-.247.68-.747.68l-1.793.02.022 1.412 1.252-.02c.4 0 .835.204.835.704s-.442.696-.842.696H11.82l-.045 2.139c0 .4-.194.8-.694.8-.5 0-.7-.3-.7-.8l-.031-5.631c0-.4.43-.696.93-.696zm-3.285.771c0-.5.3-.8.8-.8s.8.3.8.8l-.037 5.579c0 .4-.3.8-.8.8s-.8-.4-.8-.8l.037-5.579zm-3.192-.825c.7 0 1.307.183 1.807.683.3.3.4.7.1 1-.2.4-.7.4-1 .1-.2-.1-.5-.3-.9-.3-1 0-2.011.84-2.011 2.14 0 1.3.795 2.227 1.695 2.227.4 0 .805.073 1.105-.127V8.6c0-.4.3-.8.8-.8s.8.3.8.8v1.8c0 .2.037.071-.063.271-.7.7-1.57.991-2.47.991C2.868 11.662 1.3 10.2 1.3 8s1.704-3.623 3.504-3.623z" fill={themeColor} fillRule="nonzero"></path></svg>
                </IconButton>
                <InputBase
                    className="messenger-chat-input"
                    placeholder="Aa"
                    sx={{ marginLeft: '4px', width: '100%' }}
                />
                <IconButton className="chat-session-footer-button"><ThumbUpIcon sx={buttonsFooterStyle} /></IconButton>

            </div>
        </div>
    )
}
