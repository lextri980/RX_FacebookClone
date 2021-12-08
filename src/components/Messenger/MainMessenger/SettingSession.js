import React from 'react'
import { Avatar, Typography, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material'
import {
    ExpandLess,
    ExpandMore,
    Circle as CircleIcon,
    PhotoLibraryOutlined as PhotoLibraryIcon,
    FileCopyOutlined as FileIcon,
    Link as LinkIcon,
    NotificationsNoneOutlined as NotificationIcon,
    CancelPresentation as CancelIcon,
    Block as BlockIcon,
    WarningAmber as WarningIcon,
    ThumbUp as ThumbUpIcon,
    TextFields as TextIcon,
    Search as SearchIcon
} from '@mui/icons-material'
import ava from '../../../assets/user.jpg'

export default function SettingSession({ mainUser, messageFromID, openSetting }) {

    console.log({ messageFromID })

    const [openCustomize, setOpenCustomize] = React.useState(true);
    const [openMedia, setOpenMedia] = React.useState(true);
    const [openPrivacy, setOpenPrivacy] = React.useState(true);
    const { theme } = messageFromID

    return (
        <div className={`messenger-setting-session ${!openSetting && 'setting-display-none'}`}>
            <div className="messenger-setting-header">
                <Avatar
                    className="avatar"
                    src={ava} alt="ava"
                    sx={{ width: '80px', height: '80px', borderRadius: '100%', objectFit: 'cover', marginBottom: '5px' }}
                />
                <Typography sx={{ fontWeight: 'bold' }}>{messageFromID.users.find(user => user !== mainUser)}</Typography>
                <Typography className="message-status-text">Active Now</Typography>
            </div>
            <div>
                <List
                    sx={{ width: '100%', bgcolor: 'inherit' }}
                    component="nav"
                >
                    <ListItemButton className="message-setting-list-btn" onClick={() => { setOpenCustomize(!openCustomize); }}>
                        <Typography >Customize chat</Typography>
                        {openCustomize ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openCustomize} timeout="auto" unmountOnExit sx={{ padding: '0' }}>
                        <List className="message-setting-list-inner" component="div" disablePadding>
                            <ListItemButton className="message-setting-inner-each">
                                <CircleIcon sx={{ width: '24px', height: '24px', marginRight: '12px', color: theme }} />
                                <Typography >Change theme</Typography>
                            </ListItemButton>
                        </List>
                        <List className="message-setting-list-inner" component="div" disablePadding>
                            <ListItemButton className="message-setting-inner-each">
                                <ThumbUpIcon sx={{ width: '24px', height: '24px', marginRight: '12px', color: theme }} />
                                <Typography >Change emoji</Typography>
                            </ListItemButton>
                        </List>
                        <List className="message-setting-list-inner" component="div" disablePadding>
                            <ListItemButton className="message-setting-inner-each">
                                <TextIcon sx={{ width: '24px', height: '24px', marginRight: '12px' }} />
                                <Typography >Edit nicknames</Typography>
                            </ListItemButton>
                        </List>
                        <List className="message-setting-list-inner" component="div" disablePadding>
                            <ListItemButton className="message-setting-inner-each">
                                <SearchIcon sx={{ width: '24px', height: '24px', marginRight: '12px' }} />
                                <Typography >Search in conversation</Typography>
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItemButton className="message-setting-list-btn" onClick={() => { setOpenMedia(!openMedia); }}>
                        <Typography >Media, files and links</Typography>
                        {openMedia ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openMedia} timeout="auto" unmountOnExit sx={{ padding: '0' }}>
                        <List className="message-setting-list-inner" component="div" disablePadding>
                            <ListItemButton className="message-setting-inner-each">
                                <PhotoLibraryIcon sx={{ width: '24px', height: '24px', marginRight: '12px' }} />
                                <Typography >Media</Typography>
                            </ListItemButton>
                        </List>
                        <List className="message-setting-list-inner" component="div" disablePadding>
                            <ListItemButton className="message-setting-inner-each">
                                <FileIcon sx={{ width: '24px', height: '24px', marginRight: '12px' }} />
                                <Typography >Files</Typography>
                            </ListItemButton>
                        </List>
                        <List className="message-setting-list-inner" component="div" disablePadding>
                            <ListItemButton className="message-setting-inner-each">
                                <LinkIcon sx={{ width: '24px', height: '24px', marginRight: '12px' }} />
                                <Typography >Links</Typography>
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton className="message-setting-list-btn" onClick={() => { setOpenPrivacy(!openPrivacy); }}>
                        <Typography >Privacy & support</Typography>
                        {openPrivacy ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openPrivacy} timeout="auto" unmountOnExit sx={{ padding: '0' }}>
                        <List className="message-setting-list-inner" component="div" disablePadding>
                            <ListItemButton className="message-setting-inner-each">
                                <NotificationIcon sx={{ width: '24px', height: '24px', marginRight: '12px' }} />
                                <Typography >Mute Notifications</Typography>
                            </ListItemButton>
                        </List>
                        <List className="message-setting-list-inner" component="div" disablePadding>
                            <ListItemButton className="message-setting-inner-each">
                                <CancelIcon sx={{ width: '24px', height: '24px', marginRight: '12px' }} />
                                <Typography >Ignore messages</Typography>
                            </ListItemButton>
                        </List>
                        <List className="message-setting-list-inner" component="div" disablePadding>
                            <ListItemButton className="message-setting-inner-each">
                                <BlockIcon sx={{ width: '24px', height: '24px', marginRight: '12px' }} />
                                <Typography >Block</Typography>
                            </ListItemButton>
                        </List>
                        <List className="message-setting-list-inner" component="div" disablePadding>
                            <ListItemButton className="message-setting-inner-each">
                                <WarningIcon sx={{ width: '24px', height: '24px', marginRight: '12px' }} />
                                <Typography >Something's Wrong</Typography>
                            </ListItemButton>
                        </List>
                    </Collapse>

                </List>
            </div>
        </div>
    )
}
