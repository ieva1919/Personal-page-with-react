import React from 'react'
import Typography from '@material-ui/core/Typography';


function CardExperience(props) {
    return (<div>
        <Typography variant="h4" >{props.title1}</Typography>
        <Typography variant="h5">{props.title2}</Typography>
    </div>
    )
}

export default CardExperience;