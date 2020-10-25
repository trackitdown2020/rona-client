import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { Graph } from './Graph';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import useAppState from '../../state/AppStateProvider';

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
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState([]);
  const classes = useStyles();
  const { selectedCountry } = useAppState();
  const { name = 'china' } = selectedCountry;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8080/dataModels/CountrySEIR?country=${name
          .trim()
          .toLowerCase()}`
      );
      const result = await response.json();
      setValue(result);
      setLoading(false);
    };
    fetchData();
  }, [name]);

  if (loading || !value) {
    return <LoadingSpinner />;
  }

  console.log(value);

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
