import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


export default function CustomizedInputBase(props) {
    return (
        <div style={{ position: 'relative' }}>
            <InputBase
                {...props}

            />
            <SearchIcon className="nav-search-icon" />
        </div>
    );
}