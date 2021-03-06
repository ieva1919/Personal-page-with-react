import React from 'react'
import './Personaldetail.scss'
import BoxHeader from './BoxHeader'


function Personaldetail() {
    return (<div className="container-fluid" id="personal">
        <BoxHeader title="WHO AM I?" container="Personal details" />
        <div className="personal-details">
            <div className="row">
                <div className="col-sm-4">
                    <img src="/img/personal.jpg" alt="personal" />
                </div>
                <div className="col-sm-3">
                    <ul className="details">
                        <li className="virsus">Name and surname: Ieva Kavaliauskienė</li>
                        <li>Phone: +37066288748</li>
                        <li>Email: ieva1919@gmail.com</li>
                        <li>More information: <a href="https://www.linkedin.com/in/ieva-kavaliauskien%C4%97-564586bb/" target="blank">Ievos Linkedin</a></li>
                        <li>More information: <a href="https://github.com/ieva1919" target="blank">Ievos GitHub</a></li>
                    </ul>

                </div>
                <div className="col-sm-5">
                    <h3>Front end</h3>
                    <p className="text-justify">
                        I can describe my self as someone who is persistent, a quick  learner and loves problem solving by using simple and scalable solutions.
                        <br />I have been interested in front end world more than some years. Firstly, I have been learning using online courses and by myself. Secondly, I have graduated Kaunas Coding Schools 6 weeks intensive programmer course, where I have learned the basics of JAVA, C# and web development. Finally, I was participant of Women go Tech and I have completed about ten different web projects while learning.</p>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Personaldetail;