import React from 'react';
import { DashboardBase } from '../features/dashboard-base'
import { VerticalTabs } from '../components/VerticalTabs';
import { makeStyles } from '@material-ui/core/styles';
import { GoogleNewsfeed } from '../features/google-newsfeed';
import { TwitterFeed } from '../features/twitter-feed';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    container: {
      width: 450,

    },
}));

const tabs = [
    {
      label: "Maps",
      component: () => (
        <>
          <h1> Test </h1>
        </>
      ),
    },
    {
      label: "Heat Maps",
      component: () => <h1> Heat Map </h1>,
    },
    {
      label: "Chart 1",
      component: () => <h1> Chart 1 </h1>,
    },
];

const renderVerticalTabs = () => {
    return (
        <VerticalTabs tabs={tabs}/>
    )
}

function Home() {
  const classes = useStyles();

  const renderNewsfeed = () => {
    return (
      <div className={classes.container}>
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
          >
          <GoogleNewsfeed/>
          <TwitterFeed/>
        </Grid>
      </div>
    
    )
  }

  return (
      <DashboardBase
          renderContent={renderVerticalTabs}
          renderToolbar={renderNewsfeed}
      />
  );
}

export { Home };