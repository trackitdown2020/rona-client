import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { useAsync } from 'react-use';
import { Graph } from './Graph';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { preventDefault } from '../../lib/utils/links';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  graph: {
    height: 600
  },
  root: {
    maxWidth: 1400,
    margin: '5%'
  }
}));

function SeirGraph() {
  const classes = useStyles();
  const { value, loading, error } = useAsync(async () => {
    const response = await fetch(
      `http://localhost:8080/dataModels/CountrySEIR?country=china`
    );
    const result = await response.json();
    return result;
  });

  if (loading || !value) {
    return <LoadingSpinner />;
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.graph}>
          <Graph data={value} />
        </CardMedia>
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Seir
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          fil latesdfasdfasdfasdfasdfasdfasdfas
        </Typography>
      </CardContent>
    </Card>
  );
}

export { SeirGraph };
