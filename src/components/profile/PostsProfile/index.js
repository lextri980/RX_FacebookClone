import React from 'react'
import styled from 'styled-components'
import IntroPosts from './introPost/IntroPosts'

const PostsContainer = styled('div')`
    width: 870px;
    margin: auto;
    margin-top: 10px;
`

function index() {
    return (
        <PostsContainer>
            <IntroPosts/>
        </PostsContainer>
    )
}

export default index