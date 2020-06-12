import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        padding: '30px 10px',
        margin: '10px 10px 70px 10px',
    },
    title: {
        fontSize: 14,
    },
    cardContent: {
        width: '100 %',
    },
});

function Skillcard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title}>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card-title">
                                {props.children}
                            </div>
                        </div>
                        <div className="col-sm-8 text-left">
                            <div className="card-content">
                                <p><b>{props.title}</b></p>
                                <p>{props.content}</p>
                            </div>
                        </div>
                    </div>
                </Typography>
            </CardContent>
        </Card >
    );
}

export default Skillcard;