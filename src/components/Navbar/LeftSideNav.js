import { IconButton } from '@mui/material'
import React from 'react'
import CustomizedInputBase from './CustomizeInput'
import { Menu as MenuIcon } from '@mui/icons-material/';
export default function LeftSideNav() {
    return (
        <div className="left-nav flex-center">
            <a href="/" className="facebook-logo">
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
            </a>
            <CustomizedInputBase />
            <IconButton className="left-nav-menu">
                <svg viewBox="0 0 28 28" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv left-nav-menu-icon" height="28" width="28">
                    <path d="M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z">
                    </path>
                </svg>
            </IconButton>
        </div>
    )
}
