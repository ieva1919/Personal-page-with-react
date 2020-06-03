import React from 'react'
import './Menu.scss'

function Menu() {
    return (<div data-spy="affix" data-offset-top="830">
        <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    <p className="name">Ieva Kavaliauskienė</p>
                </div>
                <div className="col-sm-2"></div>
                <div className="col-md-8">
                    <div className="menu">
                        <ul>
                            <li><a href="#personal">Personal details</a></li>
                            <li className="dropdown">
                                <span className="dropdown-toggle" type="button" data-toggle="dropdown"> Experience
                                <span className="caret"></span>
                                </span>
                                <ul className="dropdown-menu">
                                    <li><a href="#experience">Sales operation specialist</a></li>
                                    <li><a href="#experience">Freelance translator (german)</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <span className="dropdown-toggle" type="button" data-toggle="dropdown"> Education
                                <span className="caret"></span>
                                </span>
                                <ul className="dropdown-menu">
                                    <li><a href="#distance">Distance learning</a></li>
                                    <li><a href="#administration">Master of Public Administration</a></li>
                                    <li><a href="#german">German philology</a></li>
                                </ul>
                            </li>
                            <li><a href="#skills">Skills and Hobbies</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Menu;