import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import useAppState from '../../state/AppStateProvider';
import { StatsCards } from './StatsCards';

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 36
  }
}));

function CountryStatsCard() {
  const classes = useStyles();
  const { selectedCountry } = useAppState();
  const { alpha3Code } = selectedCountry;

  return (
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
      className={classes.root}
    >
      <StatsCards code={alpha3Code} />
    </Grid>
  );
}

export { CountryStatsCard };
