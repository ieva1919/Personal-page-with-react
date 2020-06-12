import React from 'react'
import BoxHeader from './BoxHeader'
import Portfoliocard from './Portfoliocard'


function Portfolio() {

    return (
        <div className="color-darker">
            <div className="container" id="portfolio">
                <BoxHeader title="MY WORKS" container="PORTFOLIO" />
                <div className="portfolio">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <Portfoliocard title="Agnės atvirukai" content="This project is created by using React, SASS, Flexbox and media query. The Style of page was created by myself.">
                                <a href="http://agnesatvirukai.lt/" target="_blank">
                                    <img src="/img/card.jpg" />
                                </a>
                            </ Portfoliocard>
                        </div>
                        <div className="col-md-4 text-center">
                            <Portfoliocard title="Templates for your CVs" content="These CV's are cretaed by using HTML and CSS">
                                <a href="#" target="_blank">
                                    <img src="/img/template.jpg" />
                                </a>
                            </Portfoliocard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;

