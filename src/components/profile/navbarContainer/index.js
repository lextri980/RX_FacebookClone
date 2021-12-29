import { Divider } from '@mui/material'
import React from 'react'
import styled from "styled-components"
import NavbarProfile from './NavbarProfile'

const NavContainer = styled('div')`
width: 870px;
margin-top: 37px;
font-family: Helvetica, Arial, sans-serif;
position:absolute;
left:50%;
transform:translateX(-50%);
bottom:0;
@media (max-width: 898px){
    width:100%;
 }
`

function index() {
    return (
        <NavContainer>
            <Divider sx={{height:"0.02em", background:"#4E4F50"}} light/>
            <NavbarProfile/>
        </NavContainer>
    )
}
    
export default index
