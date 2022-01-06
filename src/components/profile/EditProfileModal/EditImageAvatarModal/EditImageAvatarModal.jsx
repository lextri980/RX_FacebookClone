import React from 'react'
import Modal from '../../../Modal/Modal'
import ContentDialog from '../../avatarContainer/ContentDialog'
import './EditImageAvaterModalStyle.scss'

const EditImageAvatarModal = props => {
    console.log(props);
    return (
        <Modal>
            <div className="edit__avatar">
                <ContentDialog changeAvatar={props.changeAvatar} handleClose={props.handleClose}/>
            </div>
        </Modal>
    )
}

export default EditImageAvatarModal
