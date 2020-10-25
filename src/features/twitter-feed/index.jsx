import React from 'react';
import { NewsfeedPanel } from '../../components/NewsfeedPanel/index';
import { Newsfeed } from './Newsfeed';
import NewsfeedTitle from '../../components/NewsfeedPanel/NewsfeedTitle';
// import useAppState from 'state/AppStateProvider';

function TwitterFeed() {
  // const { openLiveStream } = useAppState();

  return (
    <NewsfeedPanel
      panelTitle={
        <NewsfeedTitle
          title={'Twitter Popular Tweets'}
          icon={<i className="fab fa-twitter" />}
        />
      }
      source={'twitter'}
    >
      <Newsfeed openLiveStream />
    </NewsfeedPanel>
  );
}

export { TwitterFeed };
