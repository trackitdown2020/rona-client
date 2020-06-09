import React from 'react';
import { useAsync } from 'react-use';
import Grid from '@material-ui/core/Grid';
import { StatsDisplayCard } from '../../components/StatsDisplayCard';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
      paddingBottom: 36
    },
}));

function WorldStatsCards() {
    const classes = useStyles();
    const { value, loading, error } = useAsync(async () => {
        const response = fetch('http://localhost:8080/covid19/globalSummary');
        const result = await (await response).json();
        return result;
    });

    const renderBody = () => {
        if(loading || !value) {
            return <LoadingSpinner/>
        }

        const { 
            TotalConfirmed,
            TotalDeaths,
            TotalRecovered
        } = value;
        return (
            <>
                <StatsDisplayCard title={'TOTAL CONFIRMED'} value={TotalConfirmed}/>
                <StatsDisplayCard title={'TOTAL DEATHS'} value={TotalDeaths}/>
                <StatsDisplayCard title={'TOTAL RECOVERED'} value={TotalRecovered}/>
            </>
        );
    }

    return (
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            className={classes.root}
        >
            { renderBody() }
        </Grid>
    )
}

export { WorldStatsCards };