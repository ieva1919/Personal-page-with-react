import React from 'react'
import './Skill.scss'
import { makeStyles } from '@material-ui/core/styles';
import BoxHeader from './BoxHeader'
import Skillcard from './Skillcard'
import { Computer, Business, PhoneIphone, Headset } from '@material-ui/icons';

const useStyles = makeStyles({
    size: {
        fontSize: '90px',
    },
});

function Skill() {
    const classes = useStyles();

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
                                        <Computer className={classes.size} />
                                    </Skillcard >
                                </div>
                                <div className="col-sm-6">
                                    <Skillcard title="React development" content="Able to create atractive pages by using React and Material UI">
                                        <Business className={classes.size} />
                                    </Skillcard >
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Skillcard title="Responsive design" content="Able to create mobile responsive sites by using Flexbox, Bootstrap or media query">
                                        <PhoneIphone className={classes.size} />
                                    </Skillcard >
                                </div>
                                <div className="col-sm-6">
                                    <Skillcard title="Strong support" content="Able to communicate in a brief way by using english or german languages">
                                        <Headset className={classes.size} />
                                    </Skillcard >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;