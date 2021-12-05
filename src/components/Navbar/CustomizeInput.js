import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


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