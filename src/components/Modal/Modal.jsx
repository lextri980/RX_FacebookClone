import React from 'react'
import './ModalStyle.scss'

const Modal = ({children}) => {
    return (
        <div className='modal'>
            <div className="modal__overlay"></div>
            <div className="modal__body">
                {children}
            </div>
        </div>
    )
}

export default Modal
