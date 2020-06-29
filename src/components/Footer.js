import React from 'react'
import './Footer.scss'

function Footer() {
    return (<div className="footer">
        <div className="container">
            <div className="row" >
                <div className="col-md-4">
                </div>
                <div className="col-md-4 text-center">
                    <h2>Thank you</h2>
                    <p>Please contact me if you liked!</p>
                </div>
                <div className="col-md-4">
                </div>
            </div>
            <div className="row" >
                <div className="col-md-4">
                </div>
                <div className="col-md-4 text-center">
                    <ul>
                        <li>ieva1919@gmail.com</li>
                        <li><a href="https://www.linkedin.com/in/ieva-kavaliauskien%C4%97-564586bb/" target="blank">Ievos Linkedin</a></li>
                        <li><a href="https://github.com/ieva1919" target="blank">Ievos GitHub</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                </div>
            </div>
        </div>
    </div >
    )
}

export default Footer;