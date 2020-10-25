import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import { Graph } from './Graph';
import { ChipSelectors } from './ChipSelectors';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { preventDefault } from '../../lib/utils/links';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  chipsContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 16,
    width: '100%'
  },
  graph: {
    height: 600
  },
  root: {
    maxWidth: 1400,
    margin: '5%',
    boxShadow: 'unset'
  }
}));

function MobilityGraph() {
  const classes = useStyles();
  const [locations, setLocations] = useState([]);

  const onToggle = ({ id: selectedId, selected }) => {
    const copyLocations = [...locations];
    if (copyLocations.includes(selectedId)) {
      _.remove(copyLocations, (id) => id === selectedId);
    } else {
      copyLocations.push(selectedId);
    }
    setLocations(copyLocations);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.graph}>
          <Graph locations={locations} />
        </CardMedia>
      </CardActionArea>
      <CardContent>
        <div className={classes.chipsContainer}>
          <ChipSelectors onClick={onToggle} />
        </div>
        <Typography gutterBottom variant="h5" component="h2">
          Mobility in US
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          The data is scraped from{' '}
          <Link
            href="https://www.google.com/covid19/mobility/"
            onClick={preventDefault}
          >
            Google Mobility Reports
          </Link>{' '}
          and is designed to evaluate the overall percentage changes of people
          movement. [INSERT MORE COMMENTS]
        </Typography>
      </CardContent>
    </Card>
  );
}

export { MobilityGraph };
