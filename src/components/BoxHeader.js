import React from 'react'
import './BoxHeader.scss'

function BoxHeader(props) {
    return (
        <div className="box-header">
            <div className="box-header--box">
                <h4><span>{props.title}</span></h4>
                <h2>{props.container}</h2>
            </div>
        </div>
    )
}

export default BoxHeader;