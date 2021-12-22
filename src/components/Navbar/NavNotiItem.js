import React from 'react'
import { Avatar, Typography, IconButton, Menu } from '@mui/material'
import { MoreHoriz as MoreIcon } from '@mui/icons-material'
import user from '../../assets/user.jpg'
import {
    Done as DoneIcon,
    SettingsOutlined as SettingIcon,
    CancelPresentation as CancelIcon,
    BugReportOutlined as BugIcon
} from '@mui/icons-material'

export default function NavNotiItem({ data }) {
    const [showOptions, setShowOptions] = React.useState(false);
    const [anchorElSetting, setAnchorElSetting] = React.useState(null);
    const openSetting = Boolean(anchorElSetting);

    const handleHover = () => {
        setShowOptions(true)
    }

    const handleLeave = () => {
        setShowOptions(false)
        handleNotiSettingClose()
    }

    const handleNotiSettingClick = (e) => {
        setAnchorElSetting(e.currentTarget);
    }

    const handleNotiSettingClose = () => {
        setShowOptions(false)
        setAnchorElSetting(null);
    };

    return (
        <div className="nav-notification-item" onMouseOver={handleHover} onMouseLeave={handleLeave}>
            <div>
                <Avatar alt="avatar" src={user} sx={{ width: 56, height: 56, marginRight: '10px' }} />
            </div>
            <div>
                <Typography><b>{data.user}</b> {data.action}<b> {data.destination}</b></Typography>
                <Typography className="nav-notification-item-time">{data.date.toDateString()}</Typography>
            </div>
            {showOptions && <IconButton className="nav-notification-item-btn" onClick={handleNotiSettingClick}>
                <MoreIcon sx={{ color: '#b0b3b8' }} />
            </IconButton>
            }
            <NavNotiItemSetting
                anchorEl={anchorElSetting}
                open={openSetting}
                handleClose={handleNotiSettingClose}
            />
        </div>
    )
}

function NavNotiItemSetting({ anchorEl, open, handleClose }) {

    const iconStyles = { marginRight: '10px', width: '25px', height: '25px' }

    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            className="nav-notification-setting"
        >
            <div style={{ width: '350px' }}>
                <div className='nav-notification-setting-item'>
                    <DoneIcon sx={iconStyles} />
                    <Typography><b>Mark all as read</b></Typography>
                </div>
                <div className='nav-notification-setting-item'>
                    <SettingIcon sx={iconStyles} />
                    <Typography><b>Notification settings</b></Typography>
                </div>
                <div className='nav-notification-setting-item'>
                    <CancelIcon sx={iconStyles} />
                    <Typography><b>Open Notifications</b></Typography>
                </div>
                <div className='nav-notification-setting-item'>
                    <BugIcon sx={iconStyles} />
                    <Typography><b>Open Notifications</b></Typography>
                </div>
            </div>
        </Menu>
    )
}
