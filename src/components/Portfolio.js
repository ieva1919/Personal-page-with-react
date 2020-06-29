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
            <div className="portfolio" id="atvirukai">
                <div className="row" >
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
                <div className="destop">
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
                                    <ButtonName title="The style was created by myself" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile">
                    <div className="row">
                        <div className="usedtechnologie">
                            <h3>Technologies Used</h3>
                            <div className="usedtechnologie-buttonName">
                                <div className="col-md-4 text-left">
                                    <ButtonName title="HTML5" />
                                    <ButtonName title="CSS3" />
                                    <ButtonName title="SASS" />
                                </div>
                                <div className="col-md-4 text-left">
                                    <ButtonName title="CSS Flexbox" />
                                    <ButtonName title="CSS Media query" />
                                    <ButtonName title="React (router)" />
                                </div>
                                <div className="col-md-4 text-left">
                                    <ButtonName title="The style was created by myself" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" id="login" >
                    <div className="col-md-6 text-center">
                        <Portfoliocard title="Login page" content="This React project was created together with my two mentors from program Women go Tech">
                            <a href="https://github.com/ieva1919/WGT-React" target="_blank">
                                <img src="/img/userpage.jpg" />
                            </a>
                        </Portfoliocard>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="usedtechnologie">
                            <h3>My Role</h3>
                            <p className="text-justify">This was a really fun project that was meant to learn and to display off more of my technical React skills. I met regularly with my mentors discussing vision and goals, subtleties of components, while learning opportunities of React.</p>
                            <h3>Project Difficulties</h3>
                            <p className="text-justify">This project was my first bigger experience with React. The hardest part was the very beginning because I had a lot of time to understand and explain how React works.</p>
                            <h3>My Solution</h3>
                            <p className="text-justify">I had a lot of first cases and studied a material step by step.</p>
                        </div>
                    </div>
                </div>
                <div className="destop">
                    <div className="row">
                        <div className="col-md-12 text-left">
                            <div className="usedtechnologie">
                                <h3>Technologies Used</h3>
                                <div className="usedtechnologie-buttonName">
                                    <ButtonName title="HTML5" />
                                    <ButtonName title="CSS3" />
                                    <ButtonName title="SASS" />
                                    <ButtonName title="CSS Flexbox" />
                                    <ButtonName title="React (API, API Rest)" />
                                    <ButtonName title="React (Router, Thunk, Redux)" />
                                    <ButtonName title="Postman" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile">
                    <div className="row">
                        <div className="usedtechnologie">
                            <h3>Technologies Used</h3>
                            <div className="usedtechnologie-buttonName">
                                <div className="col-md-4 text-left">
                                    <ButtonName title="HTML5" />
                                    <ButtonName title="CSS3" />
                                    <ButtonName title="SASS" />
                                </div>
                                <div className="col-md-4 text-left">
                                    <ButtonName title="CSS Flexbox" />
                                    <ButtonName title="React (API, API Rest)" />
                                    <ButtonName title="React (Router, Thunk, Redux)" />
                                </div>
                                <div className="col-md-4 text-left">
                                    <ButtonName title="Postman" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" id="responsive">
                    <div className="col-md-6 text-center">
                        <Portfoliocard title="Responsive page" content="This project was created together with my mentors from program Women go Tech">
                            <a href="https://github.com/ieva1919/Onboarding" target="_blank">
                                <img src="/img/onboarding.jpg" />
                            </a>
                        </Portfoliocard>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="usedtechnologie">
                            <h3>My Role</h3>
                            <p className="text-justify">I received a style and completely task what I should do from my mentors. We discussed what I need to do specifically and I started to implement it.</p>
                            <h3>Project Difficulties</h3>
                            <p className="text-justify">I had to remember the Javascript and the Javascript interface with HTML and CSS because until then I did not have much experience with it.</p>
                            <h3>My Solution</h3>
                            <p className="text-justify">I have studied and remembered a lot about Javascript. Following my planning structure and help of my experts, I could to improve my opportunity and work efficiency.</p>
                        </div>
                    </div>
                </div>
                <div className="destop">
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
                                    <ButtonName title="Javascript" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile">
                    <div className="row">
                        <div className="usedtechnologie">
                            <h3>Technologies Used</h3>
                            <div className="usedtechnologie-buttonName">
                                <div className="col-md-4 text-left">
                                    <ButtonName title="HTML5" />
                                    <ButtonName title="CSS3" />
                                    <ButtonName title="SASS" />
                                </div>
                                <div className="col-md-4 text-left">
                                    <ButtonName title="CSS Flexbox" />
                                    <ButtonName title="CSS Media query" />
                                    <ButtonName title="Javascript" />
                                </div>
                                <div className="col-md-4 text-left">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" id="template">
                    <div className="col-md-6 text-center">
                        <Portfoliocard title="Templates for your CV's" content="You can see more examples of CV's by clicking this link">
                            <Link to="/templates">
                                <div className="imgcv">
                                    <img src="/img/template.jpg" />
                                </div>
                            </Link>
                        </Portfoliocard>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="usedtechnologie">
                            <h3>Overview</h3>
                            <p className="text-justify">I wanted to better realized opportunities of HTML and CSS. There is really simple project to display my basic of programming knowledge.</p>
                        </div>
                    </div>
                </div>
                <div className="destop">
                    <div className="row">
                        <div className="col-md-12 text-left">
                            <div className="usedtechnologie">
                                <h3>Technologies Used</h3>
                                <div className="usedtechnologie-buttonName">
                                    <ButtonName title="HTML" />
                                    <ButtonName title="CSS" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile">
                    <div className="row">
                        <div className="usedtechnologie">
                            <h3>Technologies Used</h3>
                            <div className="usedtechnologie-buttonName">
                                <div className="col-md-6 text-left">
                                    <ButtonName title="HTML" />
                                    <ButtonName title="CSS" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" id="portfolio">
                    <div className="col-md-6 text-center">
                        <Portfoliocard title="My portfolio page" content="My invented project from start until end">
                            <a href="/" target="_blank">
                                <img src="/img/portfolio.jpg" />
                            </a>
                        </Portfoliocard>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="usedtechnologie">
                            <h3>Overview</h3>
                            <p className="text-justify">Simple React project to display my portfolio of programming knowledges. It was built by me using React.</p>
                        </div>
                    </div>
                </div>
                <div className="destop">
                    <div className="row">
                        <div className="col-md-12 text-left">
                            <div className="usedtechnologie">
                                <h3>Technologies Used</h3>
                                <div className="usedtechnologie-buttonName">
                                    <ButtonName title="HTML5" />
                                    <ButtonName title="CSS3" />
                                    <ButtonName title="SASS" />
                                    <ButtonName title="CSS Media query" />
                                    <ButtonName title="React" />
                                    <ButtonName title="Bootstarp 4" />
                                    <ButtonName title="React Bottstrap" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile">
                    <div className="row">
                        <div className="usedtechnologie">
                            <h3>Technologies Used</h3>
                            <div className="usedtechnologie-buttonName">
                                <div className="col-md-4 text-left">
                                    <ButtonName title="HTML5" />
                                    <ButtonName title="CSS3" />
                                    <ButtonName title="SASS" />
                                </div>
                                <div className="col-md-4 text-left">
                                    <ButtonName title="CSS Media query" />
                                    <ButtonName title="React" />
                                    <ButtonName title="Bootstarp 4" />
                                </div>
                                <div className="col-md-4 text-left">
                                    <ButtonName title="React Bottstrap" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Portfolio;

