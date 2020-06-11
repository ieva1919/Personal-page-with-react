import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
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
                <div className="row">
                    <div className="col-sm-6">
                        <Typography className={classes.title}>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="card-title">
                                        {props.children}
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="card-content">
                                        <p>{props.title}</p>
                                        <p>{props.content}</p>
                                    </div>
                                </div>
                            </div>
                        </Typography>
                    </div>
                </div>
            </CardContent>
        </Card >
    );
}

export default Skillcard;