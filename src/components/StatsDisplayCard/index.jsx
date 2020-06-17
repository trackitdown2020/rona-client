import React from 'react';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useCountUp } from 'use-count-up';

const useStyles = makeStyles({
    root: {
        width: 275,
    },
    content: {
        textAlign: 'center',
    },
    values: {
        color: 'red'
    }

});

function StatsDisplayCard({title, value}) {
    const classes = useStyles();
    const { value:countValue } = useCountUp({
        isCounting: true,
        shouldUseToLocaleString: true,
        end: value,
        duration: 2
    }); 
    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Typography variant="h5">
                    { title }
                </Typography>
                <Divider />
                <Typography variant="h4" color="textSecondary" className={classes.values}>
                    { countValue }
                </Typography>
            </CardContent>
        </Card>
    );
}

export { StatsDisplayCard };