import React from 'react';
import { DashboardBase } from '../features/dashboard-base';
import { WorldTable } from '../features/world-table';
import { WorldStatsCards } from '../features/world-stats-cards';
import Grid from '@material-ui/core/Grid';
import { GoogleNewsfeed } from '../features/google-newsfeed';
import { TwitterFeed } from '../features/twitter-feed';
import { RedditFeed } from '../features/reddit-feed';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
      width: 450,
    },
}));

function Stats() {
    const classes = useStyles();

    const renderContent = () => (
        <>
            <WorldStatsCards/>
            <WorldTable/>
        </>
    );
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
              <RedditFeed/>
            </Grid>
          </div>
        )
    }

    return (
        <DashboardBase
            title={'Worldwide COVID-19 Statistics'}
            renderContent={renderContent}
            renderToolbar={renderNewsfeed}
        />
    )
}

export { Stats };