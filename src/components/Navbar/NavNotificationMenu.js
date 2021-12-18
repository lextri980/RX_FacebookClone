import { Menu, Typography, Avatar, IconButton } from '@mui/material'
import { MoreHoriz as MoreIcon } from '@mui/icons-material'
import React from 'react'
import user from '../../assets/user.jpg'
import NotificationSettingMenu from './NotificationSettingMenu'
import './Notification.scss'
import NavNotiItem from './NavNotiItem'
const sample_data = [
    {
        user: 'Dennis Nguyen',
        action: 'posted in',
        destination: 'Hanu FIT WPR 2021',
        date: new Date('02-02-2021')
    },
    {
        user: 'Dennis Nguyen',
        action: 'ask a question in ',
        destination: 'Nhom hoc Hanu FIT WPR 2021 Programming Go pro',
        date: new Date('02-02-2021')
    },
    {
        user: 'Dennis Nguyen',
        action: 'posted in',
        destination: 'Hanu FIT WPR 2021',
        date: new Date('02-02-2021')
    },
    {
        user: 'Dennis Nguyen',
        action: 'ask a question in ',
        destination: 'Nhom hoc Hanu FIT WPR 2021 Programming Go pro',
        date: new Date('02-02-2021')
    },
    {
        user: 'Dennis Nguyen',
        action: 'posted in',
        destination: 'Hanu FIT WPR 2021',
        date: new Date('02-02-2021')
    },
    {
        user: 'Dennis Nguyen',
        action: 'ask a question in ',
        destination: 'Nhom hoc Hanu FIT WPR 2021 Programming Go pro',
        date: new Date('02-02-2021')
    },
    {
        user: 'Dennis Nguyen',
        action: 'posted in',
        destination: 'Hanu FIT WPR 2021',
        date: new Date('02-02-2021')
    },
    {
        user: 'Dennis Nguyen',
        action: 'ask a question in ',
        destination: 'Nhom hoc Hanu FIT WPR 2021 Programming Go pro',
        date: new Date('02-02-2021')
    }
]


export default function NavNotificationMenu({ anchorEl, open, handleClose }) {


    const [anchorElSetting, setAnchorElSetting] = React.useState(null);
    const openSetting = Boolean(anchorElSetting);

    const handleNotiSettingClick = (e) => {
        setAnchorElSetting(e.currentTarget);
    }

    const handleNotiSettingClose = () => {
        setAnchorElSetting(null);
    };

    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            className="nav-notification"
        >
            <div style={{ width: '380px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 16px' }}>
                    <Typography variant='h5'><b>Notifications</b></Typography>
                    <IconButton onClick={handleNotiSettingClick}>
                        <MoreIcon sx={{ color: '#b0b3b8' }} />
                    </IconButton>
                </div>
                <div style={{ padding: '2px 16px' }}>
                    <button className="nav-notification-filter-btn active">
                        <Typography sx={{ fontSize: 'inherit', color: 'inherit' }}><b>All</b></Typography>
                    </button>
                    <button className="nav-notification-filter-btn">
                        <Typography sx={{ fontSize: 'inherit', color: 'inherit' }}><b>Unread</b></Typography>
                    </button>
                </div>
                <div style={{ padding: '6px 16px' }}>
                    <Typography><b>Earlier</b></Typography>
                </div>
                {
                    sample_data.map(data => {
                        return <NavNotiItem data={data}/>
                    })
                }
            </div>
            <NotificationSettingMenu
                anchorEl={anchorElSetting}
                open={openSetting}
                handleClose={handleNotiSettingClose}
            />
        </Menu >
    )
}


