import React from 'react'
import ChatSession from './ChatSession';
import SettingSession from './SettingSession'
export default function MainMessenger({ mainUser, messageFromID }) {

    const [openSetting, setOpenSetting] = React.useState(true);

    return (
        <div className="main-messenger">
            <ChatSession mainUser={mainUser} messageFromID={messageFromID} setOpenSetting={setOpenSetting} />
            <SettingSession mainUser={mainUser} messageFromID={messageFromID} openSetting={openSetting} />
        </div>
    )
}
