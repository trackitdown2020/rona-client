import React from 'react';
import { NewsfeedPanel } from '../../components/NewsfeedPanel';
import { Newsfeed } from './Newsfeed';
import useAppState from 'state/AppStateProvider';
import { useStyles } from './styles';

function TwitterFeed() {
  const { openLiveStream } = useAppState();
  const styles = useStyles();

  const title = () => {
    return (
      <div className={styles.root}>
        Twitter Popular Tweets
        <div>
          <i class="fab fa-twitter" />
        </div>
      </div>
    );
  };
  return (
    <NewsfeedPanel panelTitle={title()} source={'twitter'}>
      <Newsfeed openLiveStream />
    </NewsfeedPanel>
  );
}

export { TwitterFeed };
