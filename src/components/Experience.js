import React from 'react'
import './Experience.scss'
import BoxHeader from './BoxHeader'

function Experience() {
    return (<div className="color-darker">
        <BoxHeader title="MY PROFESSIONAL BACKGROUND" container="WORK EXPERIENCE" />
        <div className="container" id="experience">
            <div className="work">
                <div className="row">
                    <div className="col-sm-4">
                        <h2>Since ~2017 and present</h2>
                        <h3>Front end experience</h3>
                    </div>
                    <div className="col-sm-8">
                        <ul>
                            <li>Online course Codecademy, Udemy</li>
                            <li>Participation of Women go Tech program and creation of new projects with mentors <a href="https://github.com/ieva1919/WGT-React">React project</a> and <a href="https://github.com/ieva1919/WGT-React">JavaScript project</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="work">
                <div className="row">
                    <div className="col-sm-4">
                        <h2>From 1 August 2018-Present</h2>
                        <h3>Senior sales operations specialist</h3>
                    </div>
                    <div className="col-sm-8">
                        <ul>
                            <li>Senior sales operations specialist:</li>
                            <li>to enter specific documents of customers in data processing system </li>
                            <li>to process documents in german, english (or in other languages) </li>
                            <li>to study materials every day </li>
                            <li>to ensure high quality of documents </li>
                            <li>to solve problems with local company </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="work">
                <div className="row">
                    <div className="col-sm-4">
                        <h2>From 22 October 2015 until 30 Juli 2018</h2>
                        <h3>Sales operation specialist</h3>
                    </div>
                    <div className="col-sm-8">
                        <ul>
                            <li>Sales operation specialist:</li>
                            <li>to enter order and quote of customers in data processing system in accordance with commonly agreed rules</li>
                            <li>to process documents in different languages (english, german, finnish, dutch)</li>
                            <li>to ensure quality of documents </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="work">
                <div className="row">
                    <div className="col-sm-4">
                        <h2>Juli 2013-Jun 2016</h2>
                        <h3>Freelance translator (german)</h3>
                    </div>
                    <div className="col-sm-8">
                        <ul>
                            <li>Freelance translator (german)</li>
                            <li>Translation of texts from German to Lithuanian. I specialize in general and medical texts.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Experience;