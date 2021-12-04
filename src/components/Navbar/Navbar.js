import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import img from '../../assets/facebookIcon.ico';
import Paper from '@mui/material/Paper';
import CustomizedInputBase from './CustomizeInput';
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
