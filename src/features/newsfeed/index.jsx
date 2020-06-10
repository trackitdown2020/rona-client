import React from 'react';
import { GoogleNewsfeed } from '../google-newsfeed';
import { TwitterFeed } from '../twitter-feed';
import { RedditFeed } from '../reddit-feed';
import Grid from '@material-ui/core/Grid';

function Newsfeed() {
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
    )
   
}

export { Newsfeed };

