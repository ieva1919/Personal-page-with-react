import React from 'react'
import './ButtonName.scss'

function ButtonName(props) {
    return (
        <div>
            <p className="name">{props.title}</p>
        </div>
    )
}

export default ButtonName;