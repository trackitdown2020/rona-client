import React from 'react';
import { NewsfeedPanel } from '../../components/NewsfeedPanel';
import { Newsfeed } from './Newsfeed';
import useAppState from 'state/AppStateProvider';

function TwitterFeed() {
  const { openLiveStream } = useAppState();

  return (
    <NewsfeedPanel panelTitle={'Twitter Popular Tweets'} source={'twitter'}>
      <Newsfeed openLiveStream />
    </NewsfeedPanel>
  );
}

export { TwitterFeed };
