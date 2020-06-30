import React, { Suspense, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import _ from 'lodash';
import { useAsync } from 'react-use';
import { idMap } from './constants';
import { Graph } from './Graph';
import { ChipSelectors } from './ChipSelectors';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { preventDefault } from '../../lib/utils/links';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  chipsContainer: {
    marginTop: 10,
    marginBottom: 16,
    width: '60%'
  },
  graph: {
    height: 600
  },
  root: {
    maxWidth: 1400,
    margin: '5%'
  }
}));

function MobilityGraph() {
  const classes = useStyles();
  const [locations, setLocations] = useState([]);
  const { value, loading, error } = useAsync(async () => {
    // Change to url builder
    const response = await fetch(
      `http://localhost:8080/covid19/mobility?country=US&type=all`
    );
    const result = await response.json();
    return result;
  });

  const onToggle = ({ id: selectedId, selected }) => {
    const copyLocations = [...locations];
    if (copyLocations.includes(selectedId)) {
      _.remove(copyLocations, (id) => id === selectedId);
    } else {
      copyLocations.push(selectedId);
    }
    setLocations(copyLocations);
  };

  if (loading || !value) {
    return <LoadingSpinner />;
  }

  const data =
    locations.length > 0
      ? value.filter(({ id }) => {
          console.log(id);
          return locations.includes(idMap[id]);
        })
      : value;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.graph}>
          <Graph data={data} />
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
