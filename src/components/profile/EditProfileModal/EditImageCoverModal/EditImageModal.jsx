import React from 'react'
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import FileUploadSharpIcon from '@mui/icons-material/FileUploadSharp';
import PhotoLibrarySharpIcon from '@mui/icons-material/PhotoLibrarySharp';
import './EditImageModal.scss'
import Modal from '../../../Modal/Modal';

const EditImageModal = props => {
    console.log(props);
    return (
        <Modal>
            <div className='modal__title'>
                <h3>Update Photo</h3>
                <div className="modal__title-iconClose" onClick={props.onCloseEdit}>
                    <div className="icon">
                        <ClearSharpIcon />
                    </div>
                </div>
            </div>
            <div className="modal__option">
                <div className="modal__option-item">
                    <div className="modal__option-icon">
                        <div className="icon">
                            <FileUploadSharpIcon/>
                        </div>
                    </div>
                    <div className="modal__option-title">Upload Photo</div>
                </div>
                <div className="modal__option-item">
                    <div className="modal__option-icon">
                        <div className="icon">
                            <PhotoLibrarySharpIcon />
                        </div>
                    </div>
                    <div className="modal__option-title">Select Photo</div>
                </div>
            </div>
        </Modal>
    )
}

export default EditImageModal
