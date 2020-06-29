import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { useAsync } from 'react-use';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { preventDefault } from '../../lib/utils/links';
import Link from '@material-ui/core/Link';
import { Graph } from './Graph';
import useAppState from 'state/AppStateProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1400,
    margin: '5%'
  },
  graph: {
    height: 600
  }
}));

function CountryStatsGraph() {
  console.log('here');
  const { selectedCountry } = useAppState();
  const classes = useStyles();

  const { value, loading, error } = useAsync(async () => {
    const response = await fetch(
      `http://localhost:8080/covid19/timeSeries/country?country=CHN`
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
        {/* <div className={classes.chipsContainer}>
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
                </Typography> */}
      </CardContent>
    </Card>
  );
}

export { CountryStatsGraph };
