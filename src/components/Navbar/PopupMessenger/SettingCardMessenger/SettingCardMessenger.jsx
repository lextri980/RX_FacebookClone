import React, { useState, useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem';
import CheckIcon from '@mui/icons-material/Check';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import './SettingCardMessengerStyle.scss'
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';

const SettingCardMessenger = () => {
    // const [notificationOnOff, setNotificationOnOff] = useState(false)

    // const changeNoti = () => {
    //     setNotificationOnOff(true)
    // }

    // useEffect(() => {
    //     changeNoti;
    //     console.log('re-rènder');
    // }, [notificationOnOff])


    return (
        <div className='Menu__Items'>
            <MenuItem className='Item'>
                <CheckIcon />
                <h4>Mark as unread</h4>
            </MenuItem>
            <MenuItem className='Item'>
                <MessageIcon />
                <h4>Open in Messenger</h4>
            </MenuItem>
            <MenuItem  className='Item' >
                <NotificationsActiveIcon />
                {/* {notificationOnOff = false ? <NotificationsActiveIcon /> : <NotificationsOffIcon/>} */}
                <h4>Notifications</h4>
            </MenuItem>
            <MenuItem className='Item'>
                <AccountCircleRoundedIcon />
                <h4>View profile</h4>
            </MenuItem>
            <hr className='Menu__Items-border'/>
            <MenuItem className='Item'>
                <CallIcon />
                <h4>Audio call</h4>
            </MenuItem>
            <MenuItem className='Item'>
                <VideocamIcon />
                <h4>Video chat</h4>
            </MenuItem>
            
        </div>
    )
}

export default SettingCardMessenger
