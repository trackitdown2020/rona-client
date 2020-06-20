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

const useStyles = makeStyles((theme) => ({
  chipsContainer: {
    marginTop: 24,
    width: '60%'
  },
  graphContainer: {
    height: 600
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
    <>
      <div className={classes.graphContainer}>
        <Graph data={data} />
      </div>
      <div className={classes.chipsContainer}>
        <ChipSelectors onClick={onToggle} />
      </div>
    </>
  );
}

export { MobilityGraph };
