import React from 'react'
import './CustomButton.scss'

function NormalBtn({text}) {
    return (
        <button className="profile__normal-btn">
            {text}
        </button>
    )
}

export default NormalBtn
