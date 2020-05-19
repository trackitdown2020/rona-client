import React from 'react';
// import Container from '@material-ui/core/Container';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
import { DashboardBase } from 'features/dashboard-base';
import { VerticalTabs } from 'components/VerticalTabs';
import { makeStyles } from '@material-ui/core/styles';
import { GoogleNewsfeed } from '../../features/google-newsfeed';
import { TwitterFeed } from '../../features/twitter-feed';
import { RedditFeed } from '../../features/reddit-feed';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 450,
  },
}));

const tabs = [
  {
    label: 'Maps',
    content: <h1> Test </h1>,
  },
  {
    label: 'Heat Maps',
    content: <h1> Heat Map </h1>,
  },
  {
    label: 'Chart 1',
    content: <h1> Chart 1 </h1>,
  },
];

export function Layout() {
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
          <GoogleNewsfeed />
          <TwitterFeed />
          <RedditFeed />
        </Grid>
      </div>
    );
  };

  return (
    <DashboardBase renderToolbar={renderNewsfeed}>
      <VerticalTabs tabs={tabs} />
    </DashboardBase>
  );
}
