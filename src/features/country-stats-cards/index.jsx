import React from 'react';
import { useAsync } from 'react-use';
import Grid from '@material-ui/core/Grid';
import { StatsDisplayCard } from '../../components/StatsDisplayCard';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { makeStyles } from '@material-ui/core/styles';
import useAppState from '../../state/AppStateProvider';
import countries from 'i18n-iso-countries';

export const useStyles = makeStyles(theme => ({
    root: {
      paddingBottom: 36
    },
}));

function CountryStatsCard() {
    const { selectedCountry } = useAppState();
    const { code } = selectedCountry;
    const classes = useStyles();
    const { value, loading, error } = useAsync(async () => {
        const isoCode = countries.alpha2ToAlpha3(code);
        const response = await fetch(`http://localhost:8080/covid19/countryReport?iso=${isoCode}`);
        const result = await response.json();
        return result;
    });

    const renderBody = () => {
        if(loading || !value) {
            return <LoadingSpinner/>
        }

        const { 
            confirmed,
            recovered,
            deaths
        } = value;
        return (
            <>
                <StatsDisplayCard title={'TOTAL CONFIRMED'} value={confirmed}/>
                <StatsDisplayCard title={'TOTAL DEATHS'} value={deaths}/>
                <StatsDisplayCard title={'TOTAL RECOVERED'} value={recovered}/>
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

export { CountryStatsCard };