import React from 'react';
import './DarkContent.scss'


function DarkContent(props) {
    return (
        <div className="color-darker">
            {props.children}
        </div>
    )
}

export default DarkContent;