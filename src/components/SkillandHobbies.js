import React from 'react'
import './SkillandHobbies.scss'
import BoxHeader from './BoxHeader'
import Skillcard from './Skillcard'
import { Computer } from '@material-ui/icons';


function SkillandHobbies() {
    return (
        <div className="color-darker">
            <div className="container" id="skills">
                <BoxHeader title="WHAT I’M DOING" container="SKILLS & HOBBIES" />
                <div className="skill">
                    <div className="skillintechnologies">
                        <div className="KNOWLEDGE">
                            <div className="row">
                                <div className="col-sm-6">
                                    <Skillcard title="Web development" content="Able to create very nice sites by using HTML, CSS and JS">
                                        <Computer />
                                    </Skillcard >
                                </div>
                                <div className="col-sm-6">
                                    <Skillcard title="Experience with react">
                                        <Computer />
                                    </Skillcard >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="HOBBIES">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2>HOBBIES & INTERESTS</h2>
                                <span className="Ranga">Reading</span>
                                <span className="Asar">Travel</span>
                                <span className="Open-sans">Gel nails</span>
                                <span className="Lato">Running</span>
                                <span className="Oswald">Technology</span>
                                <span className="Montsrrat">Fashion</span>
                                <span className="Anton">Riding the bicycle</span>
                                <span className="Lora">News</span>
                                <span className="Eagle-Lake">Food</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillandHobbies;