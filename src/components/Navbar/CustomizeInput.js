import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function CustomizedInputBase() {
    return (
        <div style={{ position: 'relative' }}>
            <InputBase
                className="nav-input"
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Facebook"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <SearchIcon className="nav-search-icon" />
        </div>
    );
}