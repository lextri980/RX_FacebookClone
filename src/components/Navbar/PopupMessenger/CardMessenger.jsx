import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import './CardMessengerStyle.scss'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import Menu from '@mui/material/Menu';
import SettingCardMessenger from './SettingCardMessenger/SettingCardMessenger';

const CardMessenger = props => {

    const [showIconOptionMessengerCard, setIconShowOptionMessengerCard] = useState(false)
    const [anchorElMessengerCardSetting, setAnchorElMessengerCardSetting] = useState(null)
    const open = Boolean(anchorElMessengerCardSetting)

    const moveOvercard = () => {
        setIconShowOptionMessengerCard(true)
    }
    const moveLeaveCard = () => {
        setIconShowOptionMessengerCard(false)
    }

    const handleNotiSettingClick = () => {}

    const openMessengerCardSetting = (e) => {
        setAnchorElMessengerCardSetting(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorElMessengerCardSetting(null)
        setIconShowOptionMessengerCard(false)
    }

    return (
        <div className='card__messenger'
            key={props.id}
            onMouseOver={moveOvercard}
            onMouseLeave={moveLeaveCard}
        >
            <div className="card__messenger-avatar">
                <Avatar
                    alt="image"
                    src={props.picture}
                    sx={{ width: 56, height: 56 }}
                />
            </div>
            <div className="card__messenger-content">
                <h3 className="card__messenger-content-title">
                    {props.name}
                </h3>
                <p className="card__messenger-content-text">
                    {props.lastchat}
                </p>
            </div>
            {
                showIconOptionMessengerCard &&
                <div className='card__messenger-option' onClick={openMessengerCardSetting}>
                    <MoreHorizIcon className='card__messenger-option-icons' />
                </div>
            }
            <Menu
                className='Menu__setting'
                anchorEl={anchorElMessengerCardSetting}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <SettingCardMessenger />
            </Menu>

        </div>
    )
}

export default CardMessenger
