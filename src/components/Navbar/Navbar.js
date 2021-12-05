import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LeftSideNav from './LeftSideNav';
import RightSideNav from './RightSideNav';
import MidNav from './MidNav';
import './Navbar.scss'
export default function Navbar() {
    return (
        <>
            <div className="space-insert"></div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className="main-nav" position="fixed" >
                    <Toolbar className="nav-toolbar">
                        <LeftSideNav />
                        <MidNav />
                        <RightSideNav />
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
