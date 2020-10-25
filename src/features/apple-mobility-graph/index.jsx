import React, { useState } from 'react';
import { CountryAutocompleteField } from './CountryAutocompleteField';
import { SubregionAutocompleteField } from './SubregionAutocompleteField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Graph } from './Graph';

const useStyles = makeStyles((theme) => ({
  graph: {
    height: 600,
    width: '100%'
  },
  root: {
    maxWidth: 1300,
    marginTop: 15,
    boxShadow: 'unset'
  },
  cardActionArea: {
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: 'white'
    }
  },
  selectorContainer: {
    display: 'flex'
  },
  headerRoot: {
    width: '95%',
    paddingTop: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    marginRight: 5
  }
}));

function AppleMobilityGraph() {
  const classes = useStyles();
  const [country, setCountry] = useState('USA');
  const [subregion, setSubregion] = useState('California');

  const handleOnCountryChange = (value) => {
    setCountry(value);
  };

  const handleOnSubregionChange = (value) => {
    setSubregion(value);
  };

  return (
    <>
      <div className={classes.headerRoot}>
        <Typography gutterBottom variant="h5" component="h1">
          Apple Mobility Data
        </Typography>
        <div className={classes.selectorContainer}>
          <CountryAutocompleteField
            country={country}
            onChange={handleOnCountryChange}
            overrideStyle={{ width: 200, marginRight: 20 }}
          />
          <SubregionAutocompleteField
            country={country}
            subregion={subregion}
            onChange={handleOnSubregionChange}
            overrideStyle={{ width: 180 }}
          />
        </div>
      </div>
      <Card className={classes.root}>
        <CardActionArea className={classes.cardActionArea} disableRipple>
          <CardMedia className={classes.graph}>
            <Graph country={country} subregion={subregion} classes={classes} />
          </CardMedia>
        </CardActionArea>
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
            Apple Mobility Data
          </Typography> */}
        </CardContent>
      </Card>
    </>
  );
}

export { AppleMobilityGraph };
