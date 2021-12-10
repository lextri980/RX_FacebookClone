import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import styles from './MenuStyle.module.scss'

const HeaderMenu = () => {
    return (
        <div className={styles.headerMenu}>
            <div className={styles.memuTitle}>
                <h3 className={styles.title}>Marketplace</h3>
                <div className={styles.settingIcon}>
                        <SettingsIcon />
                </div>
            </div>
            <div className={styles.searchBox}>
                <SearchIcon  />
                <input type="text" className={styles.inputSearch} name="" id="" placeholder='Tìm kiếm trên Marketplace'/>
            </div>
        </div>
    )
}

export default HeaderMenu
