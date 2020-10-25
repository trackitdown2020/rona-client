import React from 'react';
import { NewsfeedPanel } from '../../components/NewsfeedPanel';
import { Newsfeed } from './Newsfeed';
import useAppState from 'state/AppStateProvider';

function GoogleNewsfeed() {
  const { openLiveStream } = useAppState();

  return (
    <NewsfeedPanel panelTitle={'Top Headlines'} source={'google'}>
      <Newsfeed openLiveStream={openLiveStream} />
    </NewsfeedPanel>
  );
}

export { GoogleNewsfeed };
