import React from 'react'
import './BoxHeader.scss'

function BoxHeader(props) {
    return (<div>
        <div className="box-header">
            <h4><span>{props.title}</span></h4>
            <h2>{props.container}</h2>
        </div>
    </div>
    )
}

export default BoxHeader;