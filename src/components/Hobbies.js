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
                        <div className="col-sm-12">
                            <span className="Ranga animate__animated animate__bounce">Reading</span>
                            <span className="Asar">Travel</span>
                            <span className="Open-sans">Gel nails</span>
                            <span className="Lato">Running</span>
                            <span className="Oswald">Technology</span>
                            <span className="Montsrrat">Fashion</span>
                            <span className="Anton">Riding the bicycle</span>
                            <span className="Lora">News</span>
                            <span className="Eagle-Lake">Food</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
    )
}

export default Hobbies;