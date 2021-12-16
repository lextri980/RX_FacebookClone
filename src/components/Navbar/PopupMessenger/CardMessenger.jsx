import React from 'react'
import Avatar from '@mui/material/Avatar';
import './CardMessengerStyle.scss'

const CardMessenger = props => {
    return (
        <div className='card__messenger' 
            key={props.id}
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
        </div>
    )
}

export default CardMessenger
