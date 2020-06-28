import React from 'react'
import './Portfolio.scss'
import BoxHeader from './BoxHeader'
import Portfoliocard from './Portfoliocard'
import { Link } from 'react-router-dom'


function Portfolio() {

    return (
        <div className="container" id="portfolio">
            <BoxHeader title="MY WORKS" container="PORTFOLIO" />
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

