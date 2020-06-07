import React from 'react';
import { useAsync } from 'react-use';
import Grid from '@material-ui/core/Grid';
import { StatsDisplayCard } from '../../components/StatsDisplayCard';
import { LoadingSpinner } from '../../components/LoadingSpinner';

function WorldStatsCards() {
    const { value, loading, error } = useAsync(async () => {
        const response = fetch('http://localhost:8080/covid19/globalSummary');
        const result = await (await response).json();
        return result;
    });

    if(loading || !value) {
        return <LoadingSpinner/>
    }

    const { 
        TotalConfirmed,
        TotalDeaths,
        TotalRecovered
    } = value;

    return (
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
        >
            <StatsDisplayCard title={'TOTAL CONFIRMED'} value={TotalConfirmed}/>
            <StatsDisplayCard title={'TOTAL DEATHS'} value={TotalDeaths}/>
            <StatsDisplayCard title={'TOTAL RECOVERED'} value={TotalRecovered}/>
        </Grid>
    )
}

export { WorldStatsCards };