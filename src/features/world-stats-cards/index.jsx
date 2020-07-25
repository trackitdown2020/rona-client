import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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
      {renderBody()}
    </Grid>
  );
}

export { WorldStatsCards };
