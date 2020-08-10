import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { StatsCards } from './StatsCards';

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 36
  }
}));

function WorldStatsCards() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
      className={classes.root}
    >
      <StatsCards />
    </Grid>
  );
}

export { WorldStatsCards };
