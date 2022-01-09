import React, {useState, useEffect, useContext} from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddCommentIcon from '@mui/icons-material/AddComment';
import SearchIcon from '@mui/icons-material/Search';
import { MessengerContext } from "./store/MessengerPopupContext";
import './MessengerStyle.scss'
import CardMessenger from './CardMessenger';
import { Popover } from '@mui/material';
import HeaderSetting from './HeaderSetting/HeaderSetting';
import Typography from '@mui/material/Typography';

const Messenger = () => {
    const [chats, setChats] = useState([])
    const datas = useContext(MessengerContext)
    const [popupMoreHorizIcon, setPopupMoreHorizIcon] = useState(null)

    const handleClickMoreHorizIcon = (e) => {
        setPopupMoreHorizIcon(e.currentTarget)
    }
    const handleCloseMoreHorizIcon = () => {
        setPopupMoreHorizIcon(null)
    }


    const openMoreHorizIcon = Boolean(popupMoreHorizIcon)
    const idMoreHorizIcon = openMoreHorizIcon ? 'popup-MoreHorizIcon' : undefined

    useEffect(() => {
        setChats(datas)
    }, [])

    console.log('data',chats);

    return (
            <div className='messenger'>
                <div className="messenger__title">
                    <div className="messenger__title-left">
                        <h2>Messenger</h2>
                    </div>
                    <div className="messenger__title-right">
                        <div className="messenger__title-right-icons" aria-describedby={idMoreHorizIcon} onClick={handleClickMoreHorizIcon}><MoreHorizIcon/></div>
                        <Popover
                            id={idMoreHorizIcon}
                            open={openMoreHorizIcon}
                            anchorEl={popupMoreHorizIcon}
                            onClose={handleCloseMoreHorizIcon}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <HeaderSetting />
                        </Popover>
                        <div className="messenger__title-right-icons"><ZoomOutMapIcon/></div>
                        <div className="messenger__title-right-icons"><VideoCallIcon /></div>
                        <div className="messenger__title-right-icons"><AddCommentIcon/></div>   
                    </div>
                </div>
                <div className="messenger__search">
                    <div className='messenger__search-icon'>
                        <SearchIcon />
                    </div>
                    <input className='messenger__search-input' type="text" placeholder='Tìm kiếm trên messenger...'/>
                </div>
                <div className="messenger__body">
                    {chats.slice(0, 10).map((chat) =>(
                        <CardMessenger 
                            key={chat.id}
                            id={chat.id}
                            picture={chat.picture}
                            name={chat.name}
                            lastchat={chat.lastChat}
                        />
                    ))}
                </div>
                <div className="messenger__goto">
                    <div className='messenger__goto-text'>See all in messenger</div>
                </div>
            </div>
    )
}

export default Messenger
