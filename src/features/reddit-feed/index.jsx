import React from 'react';
import { NewsfeedPanel } from '../../components/NewsfeedPanel';
import { Newsfeed } from './Newsfeed';
import useAppState from 'state/AppStateProvider';

function RedditFeed() {
  const { openLiveStream } = useAppState();

  return (
    <NewsfeedPanel panelTitle={'Reddit Hot Posts'} source={'reddit'}>
      <Newsfeed openLiveStream />
    </NewsfeedPanel>
  );
}

export { RedditFeed };
