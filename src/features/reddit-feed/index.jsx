import React from 'react';
import { NewsfeedPanel } from '../../components/NewsfeedPanel';
import { Newsfeed } from './Newsfeed';
import useAppState from 'state/AppStateProvider';
import { useStyles } from './styles';

function RedditFeed() {
  const { openLiveStream } = useAppState();
  const styles = useStyles();

  const title = () => {
    return (
      <div className={styles.root}>
        Reddit Hot Posts
        <div>
          <i class="fab fa-reddit-alien"></i>
        </div>
      </div>
    );
  };

  return (
    <NewsfeedPanel panelTitle={title()} source={'reddit'}>
      <Newsfeed openLiveStream />
    </NewsfeedPanel>
  );
}

export { RedditFeed };
