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
                        <img src="img/EO_Codecademy_01.jpg" alt="icon" />
                    </div>
                    <div className="col-sm-8">
                        <h4>Learning web development</h4>
                        <p className="text-justify">I started learning programming gradually. First, I just wanted to understand what it is and how it would be possible to automate simple day-to-day administrative tasks. I considered it my hobby. I became familiar with various programming languages, data hosting on servers and styles of pages. Second, I started thinking that I want to spend more time on programming and that it can be more than just a hobby. I graduated six weeks of intensive programming courses at Kaunas Coding Schools. After these studies I became more and more interested only in web development. Analyzing what I like the most and what I can the best I realized that I like the front end. </p>
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
                        <img src="img/99944f08a149c46a596edb534d007329.jpg" alt="icon" />
                    </div>
                    <div className="col-sm-8">
                        <h4>Master of Public Administration (MPA)</h4>
                        <p className="text-justify">I wanted to study further but there were no studies with german language in Lithuania. I decided to study something from social sciences. So I entered the public administration. These studies were interesting to me in that I became more aware of how public institutions work, the differences between the public and private sectors became apparent. The most important point, while studying I realized that I really don't want to work in the public sector. The study material was useful to me in general. During these studies, I began to think more and more about programming.
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
                        <img src="img/38_3dc805fd69282ebe7d60a21a96b1909c.jpg" alt="icon" />
                    </div>
                    <div className="col-sm-8">
                        <h4>German philology</h4>
                        <p className="text-justify">When I learned in school I was so interested in german language and decided to study a deeper special this speech. I was very fascinated in studium at Vilnius university and was completely happy for opportunities to improve everything with Germany and german language. My studies were going great because I had chances to familiarize a lot of literature, to titrate films, to work in Germany and to create my new experience. Also, after studium I started to work as a translator and studied a master's studies. After working for several years as a freelancer, I wanted to get a job under an employment contract. I enjoyed working with German wery vell but didn't like to work as a freelancer.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Education;
