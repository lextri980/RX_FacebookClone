import React from 'react'
import './MessengerCom.scss'
import ChatSession from './ChatSession';
import SettingSession from './SettingSession'
export default function MainMessenger() {
    return (
        <div className="main-messenger">
            <ChatSession />
            <SettingSession />
        </div>
    )
}
