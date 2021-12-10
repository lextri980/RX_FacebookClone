import React from 'react'
import { Link } from "react-router-dom";
import styles from './MenuStyle.module.scss'
import StorefrontIcon from '@mui/icons-material/Storefront';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DraftsIcon from '@mui/icons-material/Drafts';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SellIcon from '@mui/icons-material/Sell';
import AddIcon from '@mui/icons-material/Add';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HouseIcon from '@mui/icons-material/House';
import ConstructionIcon from '@mui/icons-material/Construction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import YardIcon from '@mui/icons-material/Yard';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CountertopsIcon from '@mui/icons-material/Countertops';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import GroupIcon from '@mui/icons-material/Group';


const BodyMenu = () => {
    return (
        <div className={styles.bodyMenu}>
            <div className={styles.bodyMenuUp}>
                <Link to='/marketplace'>
                    <div className={styles.itemMenu}>
                        <div className={styles.itemIcon}>
                            <StorefrontIcon />
                        </div>
                        <div className={styles.itemTitle}>
                            Lướt xem tất cả
                        </div>
                    </div>
                </Link>
                <Link to='/marketplace/live-shopping'>
                    <div className={styles.itemMenu}>
                        <div className={styles.itemIcon}>
                            <LiveTvIcon />
                        </div>
                        <div className={styles.itemTitle}>
                            Mua sắm trực tiếp
                        </div>
                    </div>
                </Link>
                <Link to='/marketplace/notifications'>
                    <div className={styles.itemMenu}>
                        <div className={styles.itemIcon}>
                            <NotificationsActiveIcon />
                        </div>
                        <div className={styles.itemTitle}>
                            Thông báo
                        </div>
                    </div>
                </Link>
                <Link to='/marketplace/inbox'>
                    <div className={styles.itemMenu}>
                        <div className={styles.itemIcon}>
                            <DraftsIcon />
                        </div>
                        <div className={styles.itemTitle}>
                            Hộp thư
                        </div>
                    </div>
                </Link>
                <Link to='/marketplace/you'>
                    <div className={styles.itemMenu}>
                        <div className={styles.itemIcon}>
                            <ShoppingBagIcon />
                        </div>
                        <div className={styles.itemTitle}>
                            Đang mua
                        </div>
                    </div>
                </Link>
                <Link to='/marketplace/you/selling'>
                    <div className={styles.itemMenu}>
                        <div className={styles.itemIcon}>
                            <SellIcon />
                        </div>
                        <div className={styles.itemTitle}>
                            Đang bán
                        </div>
                    </div>
                </Link>
                <Link to='/'>
                    <div className={styles.itemMenu}>
                        <div className={styles.itemIcon}>
                            <AddIcon />
                        </div>
                        <div className={styles.itemTitle}>
                            Thêm bài niêm yết mới
                        </div>
                    </div>
                </Link>
            </div>
            <div className={styles.bodyMenuDown}>
                <div className={styles.itemMenu}>
                    <div className={styles.itemIcon}>
                        <DirectionsCarIcon />
                    </div>
                    <div className={styles.itemTitle}>
                        Xe cộ
                    </div>
                </div>
                <div className={styles.itemMenu}>
                    <div className={styles.itemIcon}>
                        <AttachMoneyIcon />
                    </div>
                    <div className={styles.itemTitle}>
                        Tài sản cho thuê
                    </div>
                </div>
                <div className={styles.itemMenu}>
                    <div className={styles.itemIcon}>
                        <HouseIcon />
                    </div>
                    <div className={styles.itemTitle}>
                        Bán nhà
                    </div>
                </div>
                <div className={styles.itemMenu}>
                    <div className={styles.itemIcon}>
                        <ConstructionIcon />
                    </div>
                    <div className={styles.itemTitle}>
                        Dụng cụ sửa chữa nhà cửa
                    </div>
                </div>
                <div className={styles.itemMenu}>
                    <div className={styles.itemIcon}>
                        <FavoriteIcon />
                    </div>
                    <div className={styles.itemTitle}>
                        Gia đình
                    </div>
                </div>
                <div className={styles.itemMenu}>
                    <div className={styles.itemIcon}>
                        <CameraIndoorIcon />
                    </div>
                    <div className={styles.itemTitle}>
                        Giải trí
                    </div>
                </div>
                <div className={styles.itemMenu}>
                    <div className={styles.itemIcon}>
                        <YardIcon />
                    </div>
                    <div className={styles.itemTitle}>
                        Làm vườn và hoạt động ngoài trời
                    </div>
                </div>
                <div className={styles.itemMenu}>
                    <div className={styles.itemIcon}>
                        <MusicVideoIcon />
                    </div>
                    <div className={styles.itemTitle}>
                        Nhạc cụ
                    </div>
                </div>
                <div className={styles.itemMenu}>
                    <div className={styles.itemIcon}>
                        <LocalOfferIcon />
                    </div>
                    <div className={styles.itemTitle}>
                        Rao vặt
                    </div>
                </div>
                <div className={styles.itemMenu}>
                    <div className={styles.itemIcon}>
                        <LoyaltyIcon />
                    </div>
                    <div className={styles.itemTitle}>
                        Sản phẩm miễn phí
                    </div>
                </div>
                <div className={styles.itemMenu}>
                    <div className={styles.itemIcon}>
                        <SportsSoccerIcon />
                    </div>
                    <div className={styles.itemTitle}>
                        Sản phẩm thể thao
                    </div>
                </div>
                <div className={styles.itemMenu}>
                    <div className={styles.itemIcon}>
                        <BorderColorIcon />
                    </div>
                    <div className={styles.itemTitle}>
                        Sở thích
                    </div>
                </div>
                <div className={styles.itemMenu}>
                    <div className={styles.itemIcon}>
                        <LocalOfferIcon />
                    </div>
                    <div className={styles.itemTitle}>
                        Văn phòng phẩm
                    </div>
                </div>
                <div className={styles.itemMenu}>
                    <div className={styles.itemIcon}>
                        <SportsEsportsIcon />
                    </div>
                    <div className={styles.itemTitle}>
                        Đồ chơi và trò chơi
                    </div>
                </div>
                <div className={styles.itemMenu}>
                    <div className={styles.itemIcon}>
                        <CountertopsIcon />
                    </div>
                    <div className={styles.itemTitle}>
                        Đồ gia dụng
                    </div>
                </div>
                <div className={styles.itemMenu}>
                    <div className={styles.itemIcon}>
                        <CheckroomIcon />
                    </div>
                    <div className={styles.itemTitle}>
                        Đồ may mặc
                    </div>
                </div>
                <div className={styles.itemMenu}>
                    <div className={styles.itemIcon}>
                        <PhoneIphoneIcon />
                    </div>
                    <div className={styles.itemTitle}>
                        Đồ điện tử
                    </div>
                </div>
                <div className={styles.itemMenu}>
                    <div className={styles.itemIcon}>
                        <GroupIcon />
                    </div>
                    <div className={styles.itemTitle}>
                        Nhóm mua và bán
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyMenu
