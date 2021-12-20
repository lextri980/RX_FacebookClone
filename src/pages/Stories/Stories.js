import React from 'react'
import './Stories.scss'
import { IconButton } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router';
import { useParams } from 'react-router';
import RightSideNav from '../../components/Navbar/RightSideNav'

export default function Stories() {
    const { state } = useLocation(); //data
    const { id } = useParams(); //index

    const images = [
        {
            id: "like",
            description: "Thích",
            img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b2c16246101945.5847ebcf25be0.png",
        },
        {
            id: "love",
            description: "Yêu thích",
            img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0f2e8946101945.5847ebcf27535.png",
        },
        {
            id: "haha",
            description: "Haha",
            img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ceae3e46101945.5847ebcf26761.png",
        },
        {
            id: "wow",
            description: "Wow",
            img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e0150f46101945.5847ebcf26131.png",
        },
        {
            id: "sad",
            description: "Buồn",
            img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6c1e7d46101945.5847ebcf27051.png",
        },
        {
            id: "angry",
            description: "Phẫn nộ",
            img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/db294e46101945.5847ebcf27c57.png",
        },
    ];

    return (
        <div className='main-stories-page'>
            <div className="main-stories-homepage-redirect">
                <Link to="/">
                    <IconButton sx={{ marginRight: '5px' }}>
                        <CloseIcon sx={{
                            width: '28px',
                            height: '28px',
                            color: 'white',
                        }} />
                    </IconButton>
                </Link>
                <Link to="/" className="facebook-logo">
                    <svg viewBox="0 0 36 36" className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 facebook-icon" fill="url(#jsc_s_g)" height="40" width="40">
                        <defs>
                            <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_g">
                                <stop offset="0%" stopColor="#0062E0"></stop>
                                <stop offset="100%" stopColor="#19AFFF"></stop>
                            </linearGradient>
                        </defs>
                        <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
                        <path className="p361ku9c" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path>
                    </svg>
                </Link>
            </div>
            <div className="main-stories-nav-menu">
                <RightSideNav />
            </div>
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="main-stories-center">
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>

                    </div>
                    <div className="main-stories-display">
                        {state.data && <div style={{ backgroundImage: `url(${state.data[id].image})` }}></div>}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                    </div>
                </div>
                <footer style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                    <input
                        className="main-stories-input"
                        type="text"
                        placeholder="Reply..."
                    />
                    <div>
                        {images.map(i => {
                            return <img
                                className="stories-reaction-icon"
                                src={i.img}
                                alt={i.description}
                            />
                        })}
                    </div>
                </footer>
            </div>
        </div>
    )
}
