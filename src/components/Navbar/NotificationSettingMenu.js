import React from 'react'
import { Menu, Typography } from '@mui/material'
import './Notification.scss'
import {
    Done as DoneIcon,
    SettingsOutlined as SettingIcon,
    PhonelinkOutlined as PhonelinkIcon
} from '@mui/icons-material'

export default function NotificationSettingMenu({ anchorEl, open, handleClose }) {

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
                    <PhonelinkIcon sx={iconStyles} />
                    <Typography><b>Open Notifications</b></Typography>
                </div>
            </div>
        </Menu>
    )
}
