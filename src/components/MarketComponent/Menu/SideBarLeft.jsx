import React from 'react'
import BodyMenu from './BodyMenu'
import HeaderMenu from './HeaderMenu'
import styles from './MenuStyle.module.scss'

const SideBarLeft = () => {
    return (
        <div className={styles.menu}>
            <HeaderMenu />
            <BodyMenu />
        </div>
    )
}

export default SideBarLeft
