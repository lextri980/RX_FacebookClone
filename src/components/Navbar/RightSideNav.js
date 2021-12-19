import React from 'react'
import { Avatar, IconButton, Badge, Typography } from '@mui/material'
import user from '../../assets/user.jpg'
import {
    Apps as AppsIcon,
    Notifications as NotificationsIcon,
    ArrowDropDown as ArrowDropDownIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import NavNotificationMenu from './NavNotificationMenu';
import { Link } from 'react-router-dom';
export default function RightSideNav() {

    const [anchorElNoti, setAnchorElNoti] = React.useState(null);
    const open = Boolean(anchorElNoti);

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -5,
            top: -5,
            padding: '0 4px',
            backgroundColor: '#e41e3f'
        },
    }));

    const handleNotiClick = (e) => {
        setAnchorElNoti(e.currentTarget);
    }

    const handleNotiClose = () => {
        setAnchorElNoti(null);
    };

    return (
        <div className="right-nav flex-center">
            <Link to="/profile" className="nav-avatar-area flex-center" style={{ marginRight: '12px' }}>
                <Avatar alt="avatar" src={user} sx={{ width: 28, height: 28, marginRight: '5px' }} />
                <Typography style={{ fontSize: '1.17em' }}>User</Typography>
            </Link>
            <IconButton className="right-nav-btn"><AppsIcon /></IconButton>
            <IconButton className="right-nav-btn">
                <StyledBadge color="secondary" badgeContent={1} max={20}>
                    <svg viewBox="0 0 28 28" alt="" className="p361ku9c" height="24" width="24">
                        <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z">
                        </path>
                    </svg>
                </StyledBadge>
            </IconButton>

            <IconButton className="right-nav-btn" onClick={handleNotiClick}>
                <StyledBadge color="secondary" badgeContent={21} max={20}>
                    <NotificationsIcon />
                </StyledBadge>
            </IconButton>
            <IconButton className="right-nav-btn"><ArrowDropDownIcon /></IconButton>
            <NavNotificationMenu
                anchorEl={anchorElNoti}
                open={open}
                handleClose={handleNotiClose}
            />
        </div>
    )
}
