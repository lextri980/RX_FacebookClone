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
                <h2>Cài đặt chat</h2>
                <p>tùy chỉnh trải nghiệm trên Messenger.</p>
            </div>
            <div className="header__setting-body-one">
                <div className="header__setting-body-item">
                    <PhoneCallbackIcon />
                    <h2 className='title'>Âm thanh cuộc gọi đến</h2>
                    <BasicSwitch />
                </div>
                <div className="header__setting-body-item">
                    <VolumeDownIcon />
                    <h2 className='title'>Âm thanh tin nhắn</h2>
                    <BasicSwitch />
                </div>
                <div className="header__setting-body-item">
                    <DynamicFeedIcon />
                    <div className="title">
                        <h2 >Tin nhắn mới lên</h2>
                        <p>tự động mở tin nhắn mới</p>
                    </div>
                    <BasicSwitch />
                </div>
            </div>
            <div className="header__setting-body-two">
                <div className="header__setting-body-item">
                    <CircleNotificationsIcon/>
                    <h2 className="title">Tắt trạng thái hoạt động</h2>
                </div>
                <div className="header__setting-body-item">
                    <ChatIcon/>
                    <h2 className="title">tin nhắn chờ</h2>
                </div>
                <div className="header__setting-body-item">
                    <DisplaySettingsIcon />
                    <h2 className="title">cài đặt gửi tin nhắn</h2>
                </div>
                <div className="header__setting-body-item">
                    <RemoveCircleIcon />
                    <h2 className="title">cài đặt chặn</h2>
                </div>
            </div>

        </div>
    )
}

export default HeaderSetting
