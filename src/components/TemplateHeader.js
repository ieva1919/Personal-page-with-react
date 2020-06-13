import React from 'react'
import './TemplateHeader.scss'
import ButtonName from './ButtonName'


function TemplateHeader() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    <ButtonName />
                </div>
                <div className="col-sm-10">
                    <p>There are some unique examples which are created by using different ideas and methods of HTML and CSS. All styles and designes are made by myself. I tried to compare background colors with special photo. You can find below some exambles:
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TemplateHeader;