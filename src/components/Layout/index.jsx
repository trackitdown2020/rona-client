import React from 'react';
// import Container from '@material-ui/core/Container';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
import { GoogleNewsfeed } from '../../features/google-newsfeed';
import { TwitterFeed } from '../../features/twitter-feed';
import { RedditFeed } from '../../features/reddit-feed';
import Grid from '@material-ui/core/Grid';
import { View } from './view';

export function Layout() {
  const renderNewsfeed = () => {
    return (
      <div style={{ width: 450 }}>
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

  return <View renderToolbar={renderNewsfeed} />;
}
