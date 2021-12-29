import React from 'react'
import './ModalStyle.scss'

const Modal = ({children}, value) => {
    console.log(value);
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
