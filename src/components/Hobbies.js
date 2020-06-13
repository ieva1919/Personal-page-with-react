import React from 'react'
import './Hobbies.scss'
import BoxHeader from './BoxHeader'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function Hobbies() {

    return (<div className="container" id="hobbies">
        <BoxHeader title="MY LEISURE" container="HOBBIES" />
        <div className="hobbies" id="hobbies">
            <Card>
                <CardContent>
                    <div className="row">
                        <div className="col-sm-4">
                            <p className="Ranga animate__animated animate__bounce">Reading</p>
                            <p className="Asar">Travel</p>
                            <p className="Open-sans animate__animated animate__flash
">Gel nails</p>
                        </div>
                        <div className="col-sm-4">
                            <p className="Lato animate__animated animate__pulse">Running</p>
                            <p className="Oswald">Technology</p>
                            <p className="Montsrrat">Fashion</p>
                        </div>
                        <div className="col-sm-4">
                            <p className="Anton animate__animated animate__shakeX">Bicycle</p>
                            <p className="Lora animate__animated animate__heartBeat
">News</p>
                            <p className="Eagle-Lake">Food</p>


                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
    )
}

export default Hobbies;