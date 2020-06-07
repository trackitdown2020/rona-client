import React from 'react';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    }
});

function StatsDisplayCard({title, value}) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h4" gutterBottom>
                    { title }
                </Typography>
                <Divider />
                <Typography variant="h4" gutterBottom color="textSecondary">
                    { value }
                </Typography>
            </CardContent>
        </Card>
    );
}

export { StatsDisplayCard };