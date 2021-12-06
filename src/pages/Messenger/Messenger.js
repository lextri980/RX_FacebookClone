import React, { useState } from 'react'
import ListMessenger from '../../components/Messenger/ListMessenger/ListMessenger'
import MainMessenger from '../../components/Messenger/MainMessenger'
import './Messenger.scss'
export default function Messenger() {

    const defaultMess = [
        {
            id: 1,
            theme: 'blue',
            users: ['user', 'user1'],
            messengers: [
                { user: 'user', content: 'hello there', time: '11:07 PM' },
                { user: 'user1', content: 'hi', time: '11:08 PM' },
                { user: 'user', content: 'how r you been ?', time: '11:09 PM' },
                { user: 'user', content: "i'm good, how about you", time: '11:10 PM' },
            ]
        },
        {
            id: 2,
            theme: 'blue',
            users: ['user', 'user2'],
            messengers: [
                { user: 'user', content: 'hello there', time: '11:07 PM' },
                { user: 'user2', content: 'hi', time: '11:08 PM' },
                { user: 'user', content: 'how r you been ?', time: '11:07 PM' },
                { user: 'user2', content: "i'm good, how about you", time: '11:07 PM' },
            ]
        },

    ]

    const [messengers, setMessenger] = useState(defaultMess);

    return (
        <div className="messenger-container">
            <ListMessenger mainUser={'user'} messengers={messengers} />
            <MainMessenger />
        </div>
    )
}
