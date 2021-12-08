import React from 'react'
import ava from '../../../assets/user.jpg'
import { Avatar, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

export default function EachMessenger({ otherUser, latest, id }) {
    const { id: paramId } = useParams();
    const [active, setActive] = React.useState(false);

    React.useEffect(() => {
        if (+paramId === +id) {
            setActive(true)
        } else {
            setActive(false)
        }
        return () => {
        }
    }, [paramId, id])

    return (
        <Link to={`/messenges/t/${id}`} className={`each-mess ${active && 'active'}`} >
            <div style={{ position: 'relative' }}>
                <Avatar
                    className="avatar"
                    src={ava} alt="ava"
                    sx={{ width: '56px', height: '56px', borderRadius: '100%', objectFit: 'cover' }}
                /> <div className="online-active-icon" style={{ right: '13px', bottom: '3px' }}></div>
            </div>
            <div className="each-mess-content">
                <Typography className="user-name">{otherUser}</Typography>
                <Typography className="latest-mess">
                    {(otherUser === latest.user)
                        ? <span className="truncate-one grey-color"> {latest.content}</span>
                        : <span className="truncate-one grey-color"> You: {latest.content}&#32;</span>
                    }
                    <span className="grey-color" style={{ padding: '0 3px' }}> · </span>
                    <span className="grey-color"> {latest.time} </span>
                </Typography>
            </div>
        </Link >
    )
}
