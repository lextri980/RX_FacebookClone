import React, { useState} from 'react'
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Popover from '@mui/material/Popover';
import Modal from "../../Modal/Modal";
import './EditProfileModalStyle.scss'
import EditImageModal from './EditImageCoverModal/EditImageModal'
import EditImageAvatarModal from './EditImageAvatarModal/EditImageAvatarModal';

const imageAvatar = "https://i.pinimg.com/564x/c7/1c/fa/c71cfa901ececa3ab8cb59968aefc0b1.jpg"
const imageCoverPage = "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/262363283_3171575486421858_460081271991288862_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_ohc=6aFXojYbRHEAX8Y_j88&tn=e_caVoF4nqMJtuev&_nc_ht=scontent.fhan5-10.fna&oh=00_AT_1fd7WPn63JR4FUAUMzZW8TPs389Bt7fovnG3blNTg0A&oe=61D051D6"
const bio = "I know who u are!!!"
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];

const EditProfileModal = props => {
    const [avatar, setAvatar] = useState(imageAvatar)
    const [coverPhoto, setCoverPhoto] = useState(imageCoverPage)
    const [openEditAvatar, setEditAvatar] = useState(false)
    const [openEditCoverPhoto, setOpenEditCoverPhoto] = useState(false)
    const handleOpenEditAvatar = () => {
        setEditAvatar(true)
    }

    const handleCloseEditAvatar = () => {
        setEditAvatar(false)
    }

    const handleOpenEditCoverPhoto = () =>{
        setOpenEditCoverPhoto(true)
    }

    const handleCloseEditCoverPhoto = () => {
        setOpenEditCoverPhoto(false)
    }

    const changeAvatar = (link) => {
        setAvatar(link)
    }


    return (
        <Modal>
            <div className='modal__content'>
                <div className="modal__content-items modal__content-header">
                    <h3 >Edit profile</h3>
                    <div className="modal__content-header-cancel-icon" onClick={props.handleCloseEditProfile}>
                        <CloseIcon />
                    </div>
                </div>
                <div className="modal__content-items modal__content-profile-picture">
                    <div className="modal__content-title">
                        <h3>Profile Picture</h3>
                        <Button variant="text" onClick={handleOpenEditAvatar}>Edit</Button>
                        {openEditAvatar && <EditImageAvatarModal changeAvatar={changeAvatar} handleClose={handleCloseEditAvatar} />}
                        {/* <EditImageModal onCloseEdit={handleCloseEditAvatar}/> */}
                    </div>
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="modal__content-items modal__content-cover-photo">
                    <div className="modal__content-title">
                        <h3>Cover Photo</h3>
                        <Button variant="text" onClick={handleOpenEditCoverPhoto}>Edit</Button>
                        {openEditCoverPhoto && <EditImageModal onCloseEdit={handleCloseEditCoverPhoto}/>}
                    </div>
                    <img src={coverPhoto} alt="cover page" />
                </div>
                <div className="modal__content-items modal__content-bio">
                    <div className="modal__content-title">
                        <h3>Bio</h3>
                        <Button variant="text">Edit</Button>
                    </div>
                    <p>{bio}</p>
                </div>
                <div className="modal__content-items modal__content-customize-your-intro">
                    <div className="modal__content-title">
                        <h3>Customize Your Intro</h3>
                        <Button variant="text">Edit</Button>
                    </div>
                    <div className="modal__content-body">
                        <div className="modal__content-body-child">
                            <AccessTimeIcon />
                            <p>Joined july 2014</p>
                        </div>
                        <div className="modal__content-body-child">
                            <RssFeedIcon />
                            <p>Followed by 72 people</p>
                        </div>

                    </div>
                </div>
                <div className="modal__content-items modal__content-hobbies">
                    <div className="modal__content-title">
                        <h3>Hobbies</h3>
                        <Button variant="text">Edit</Button>
                    </div>
                    <div className="modal__content-hobbies-content">

                    </div>
                </div>
                <div className="modal__content-items modal__content-featured">
                    <div className="modal__content-title">
                        <h3>Featured</h3>
                        <Button variant="text">Edit</Button>
                    </div>
                    <div className="modal__content-featured-picture">
                        <ImageList sx={{ width: 500, height: 250 }} cols={3} rowHeight={164}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </div>
                <div className="modal__content-items modal__button-save">
                    <p>Edit Your About Info</p>
                </div>
            </div>
        </Modal>
    )
}

export default EditProfileModal
