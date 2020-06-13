import React from 'react'
import './Menu.scss'
import { Dropdown } from 'react-bootstrap'

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
                            <Dropdown>
                                <Dropdown.Toggle>
                                    Experience
                                    </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#experience">Programming experience</Dropdown.Item>
                                    <Dropdown.Item href="#experience">Senior sales operations specialist</Dropdown.Item>
                                    <Dropdown.Item href="#experience">Sales operations specialist</Dropdown.Item>
                                    <Dropdown.Item href="#experience">Freelance translator (german)</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle>
                                    Education
                                    </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#distance">Programming experience</Dropdown.Item>
                                    <Dropdown.Item href="#administration">Senior sales operations specialist</Dropdown.Item>
                                    <Dropdown.Item href="#german">Sales operations specialist</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <li>
                            </li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#hobbies">Hobbies</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Menu;