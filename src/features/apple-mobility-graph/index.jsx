import React, { useState, useEffect } from 'react';
import { CountryAutocompleteField } from './CountryAutocompleteField';
import { SubregionAutocompleteField } from './SubregionAutocompleteField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Graph } from './Graph';

const useStyles = makeStyles((theme) => ({
  graph: {
    height: 700,
    width: 1500
  },
  root: {
    maxWidth: 1600,
    marginTop: 15
  }
}));

function AppleMobilityGraph() {
  const classes = useStyles();
  const [country, setCountry] = useState('');
  const [subregion, setSubregion] = useState('');

  const handleOnCountryChange = (value) => {
    setCountry(value);
  };

  const handleOnSubregionChange = (value) => {
    setSubregion(value);
  };

  return (
    <>
      <Grid container direction="row" justify="space-between" spacing={6}>
        <Grid item xs={6}>
          <CountryAutocompleteField
            country={country}
            onChange={handleOnCountryChange}
          />
        </Grid>
        <Grid item xs={6}>
          <SubregionAutocompleteField
            country={country}
            subregion={subregion}
            onChange={handleOnSubregionChange}
          />
        </Grid>
      </Grid>
      <Card className={classes.root}>
        <CardActionArea disableRipple disabled>
          <CardMedia className={classes.graph}>
            <Graph country={country} subregion={subregion} />
          </CardMedia>
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Apple Mobility Data
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export { AppleMobilityGraph };
