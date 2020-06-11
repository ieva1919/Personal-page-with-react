import React from 'react'
import './Education.scss'
import BoxHeader from './BoxHeader'

function Education() {
    return (<div className="container" id="edication">
        <BoxHeader title="MY EDUCATION" container="EDUCATION" />
        <div className="distance" id="distance">
            <div className="education">
                <div className="row">
                    <div className="col-sm-4">
                        <h2>Juni 2016-Present</h2>
                        <h3>Codecademy</h3>
                        <img src="img/EO_Codecademy_01.jpg" />
                    </div>
                    <div className="col-sm-8">
                        <h4>Learning web development</h4>
                        <p className="text-justify">I started to enjoy web pages more and more. I read a lot of
                        information on the internet, sign up for Codecademy, freeCodeCamp, graduated from Kaunas
                        Coding Schools 6 weeks of intensive programming courses and now I want to build my new
                            experience in career. </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="administration" id="administration">
            <div className="education">
                <div className="row">
                    <div className="col-sm-4">
                        <h2>2013-2015</h2>
                        <h3>Kaunas University of Technology</h3>
                        <img src="img/99944f08a149c46a596edb534d007329.jpg" />
                    </div>
                    <div className="col-sm-8">
                        <h4>Master of Public Administration (MPA)</h4>
                        <p className="text-justify">When I finished German philology, I wanted to improve knowledge in
                        social sciences. I think, that it will be easier
                        to integrate into the labor market. I chose public administration studies because I wanted
                        to learn about political
                        process management, what the differences are between the public and private sectors. But
                        after finishing my studies I realized that I wanted to work only in the private sector.
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="german" id="german">
            <div className="education">
                <div className="row">
                    <div className="col-sm-4">
                        <h2>2009-2013</h2>
                        <h3>Vilnius University</h3>
                        <img src="img/38_3dc805fd69282ebe7d60a21a96b1909c.jpg" />
                    </div>
                    <div className="col-sm-8">
                        <h4>German philology</h4>
                        <p className="text-justify">When I was in the twelve class, I was interested in german language and
                        wanted to study just german philology. I'm sure that German
                        is the gateway to the world-class higher education! Sound of this language is very
                        beautiful. I also liked the fact
                        that German and English are so similar. Many words in German sound and/or look the same as
                        equivalent English words,
                        because the two languages share the same “grandparent“.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Education;
