import React from 'react'
import BasicSwitch from '../MUIcomponents/BasicSwitch';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ChatIcon from '@mui/icons-material/Chat';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import './HeaderSettingStyle.scss'
const HeaderSetting = () => {
    return (
        <div className='header__seting'>
            <div className="header__setting-top">
                <h2>Chat settings</h2>
                <p>Customize your Messenger experience</p>
            </div>
            <div className="header__setting-body-one">
                <div className="header__setting-body-item">
                    <PhoneCallbackIcon />
                    <h2 className='title'>Incoming call sounds</h2>
                    <BasicSwitch />
                </div>
                <div className="header__setting-body-item">
                    <VolumeDownIcon />
                    <h2 className='title'>Message sounds</h2>
                    <BasicSwitch />
                </div>
                <div className="header__setting-body-item">
                    <DynamicFeedIcon />
                    <div className="title">
                        <h2 >Pop-up new messages</h2>
                        <p>Automatically open new messages</p>
                    </div>
                    <BasicSwitch />
                </div>
            </div>
            <div className="header__setting-body-two">
                <div className="header__setting-body-item">
                    <CircleNotificationsIcon/>
                    <h2 className="title">Turn off Active Status</h2>
                </div>
                <div className="header__setting-body-item">
                    <ChatIcon/>
                    <h2 className="title">Message requests</h2>
                </div>
                <div className="header__setting-body-item">
                    <DisplaySettingsIcon />
                    <h2 className="title">Message delivery settings</h2>
                </div>
                <div className="header__setting-body-item">
                    <RemoveCircleIcon />
                    <h2 className="title">Block settings</h2>
                </div>
            </div>

        </div>
    )
}

export default HeaderSetting
