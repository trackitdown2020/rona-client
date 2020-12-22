import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useAppState from 'state/AppStateProvider';
import { LoadingSpinner } from '../LoadingSpinner';
import { CountryChoroplethMap } from '../../features/country-map';
import { useAsync } from 'react-use';
import Moment from 'moment';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  media: {
    height: '100%'
  }
});
function StatsToolbar() {
  const { selectedCountry } = useAppState();
  const classes = useStyles();

  const { loading, error, value } = useAsync(async () => {
    const worldSummaryResponse = await fetch(
      `${process.env.REACT_APP_BASE_URL}/covid19/summary/world`
    );
    const countrySummaryResponse = await fetch(
      `${process.env.REACT_APP_BASE_URL}/covid19/summary/country/${selectedCountry.code}`
    );
    const countrySummaryJson = await countrySummaryResponse.json();
    const worldSummaryJson = await worldSummaryResponse.json();
    const { cases } = worldSummaryJson;
    const { cases: countryCases } = countrySummaryJson;
    return {
      ...countrySummaryJson,
      worldProportionCases: (countryCases / cases) * 100
    };
  }, [selectedCountry]);

  if (loading || !value) {
    return <LoadingSpinner />;
  }

  console.log(value);
  const {
    updated,
    country,
    continent,
    population,
    todayCases,
    todayDeaths,
    todayRecovered,
    tests,
    worldProportionCases
  } = value;

  return (
    <Card className={classes.root}>
      <CardHeader title={country} subheader={continent} />
      <CardMedia className={classes.media}>
        <CountryChoroplethMap
          country={country}
          isToolbar={true}
          casesPercentage={worldProportionCases}
        />
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="div">
          <strong>Population</strong> {population}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <strong>People Tested</strong> {tests}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <strong>Cases Today</strong> {todayCases}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <strong>Deaths Today</strong> {todayDeaths}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <strong>Recovered Today</strong> {todayRecovered}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          More Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default StatsToolbar;
