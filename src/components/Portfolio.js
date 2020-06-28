import React from 'react'
import './Portfolio.scss'
import BoxHeader from './BoxHeader'
import Portfoliocard from './Portfoliocard'
import { Link } from 'react-router-dom'
import ButtonName from './ButtonName'


function Portfolio() {

    return (
        <div className="container" id="portfolio">
            <BoxHeader title="MY WORKS" container="PORTFOLIO" />
            <div className="portfolio">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <Portfoliocard
                            title="Agnės atvirukai"
                            content="This app is hosted on http://agnesatvirukai.lt/. You can see an unique design for card page."
                        >
                            <a href="http://agnesatvirukai.lt/" target="_blank">
                                <img src="/img/card.jpg" />
                            </a>
                        </ Portfoliocard>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="usedtechnologie">
                            <h3>My Role</h3>
                            <p className="text-justify">I created and oversaw all project from start to end. I discussed about project requirements and style, vision and end goals.</p>
                            <h3>Project Difficulties</h3>
                            <p className="text-justify">This project really tested my skills in architecting out a workable solution. In the beginning of development, the first thing I did was created an style sketch. It was not very detailed, many small details at the beginning was not discussed and I wasted some time because a lot of cases of style I had to do again.</p>
                            <h3>My Solution</h3>
                            <p className="text-justify">To avoid this problem in the future, I will use an special interface design application such as Figma. Following a structure, I will be able to improve my work efficiency and reach my set sprints on time.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-left">
                        <div className="usedtechnologie">
                            <h3>Technologies Used</h3>
                            <div className="usedtechnologie-buttonName">
                                <ButtonName title="HTML5" />
                                <ButtonName title="CSS3" />
                                <ButtonName title="SASS" />
                                <ButtonName title="CSS Flexbox" />
                                <ButtonName title="CSS Media query" />
                                <ButtonName title="React (router)" />
                                <ButtonName title="The style of page was created by myself" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <Portfoliocard title="Agnės atvirukai" content="This project is created by using React, SASS, CSS Flexbox and CSS Media query. The Style of page was created by myself.">
                            <a href="http://agnesatvirukai.lt/" target="_blank">
                                <img src="/img/card.jpg" />
                            </a>
                        </ Portfoliocard>
                    </div>
                    <div className="col-md-4 text-center">
                        <Portfoliocard title="Templates for your CVs" content="These CV's are cretaed by using HTML and CSS">
                            <Link to="/templates">
                                <img src="/img/template.jpg" />
                            </Link>
                        </Portfoliocard>
                    </div>
                    <div className="col-md-4 text-center">
                        <Portfoliocard title="Login page" content="This project is created by using React (API, API Rest, Router, Thunk, Redux), SASS">
                            <a href="https://github.com/ieva1919/WGT-React" target="_blank">
                                <img src="/img/userpage.jpg" />
                            </a>
                        </Portfoliocard>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <Portfoliocard title="Responsive page" content="This project is creating by using HTML, CSS, SASS, CSS Flexbox, CSS Media query, Javascript">
                            <a href="https://github.com/ieva1919/Onboarding" target="_blank">
                                <img src="/img/onboarding.jpg" />
                            </a>
                        </Portfoliocard>
                    </div>
                    <div className="col-md-4 text-center">
                        <Portfoliocard title="My portfolio page" content="This page is creating by using HTML5, CSS3, SASS, CSS Media query, React, Router, Bootstarp 4, React Bottstrap">
                            <a href="/" target="_blank">
                                <img src="/img/portfolio.jpg" />
                            </a>
                        </Portfoliocard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;

