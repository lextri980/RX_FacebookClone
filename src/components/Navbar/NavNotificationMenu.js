import { Menu, MenuItem, Typography, Button, Avatar } from '@mui/material'
import React from 'react'
import user from '../../assets/user.jpg'

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
                <div style={{ padding: '6px 16px' }}>
                    <Typography variant='h5'><b>Notifications</b></Typography>
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
                        return <div className="nav-notification-item" >
                            <div>
                                <Avatar alt="avatar" src={user} sx={{ width: 56, height: 56, marginRight: '10px' }} />
                            </div>
                            <div>
                                <Typography><b>{data.user}</b> {data.action}<b> {data.destination}</b></Typography>
                                <Typography className="nav-notification-item-time">{data.date.toDateString()}</Typography>
                            </div>
                        </div>
                    })
                }
            </div>
        </Menu >
    )
}
