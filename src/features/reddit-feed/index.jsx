import React from 'react';
import { NewsfeedPanel } from '../../components/NewsfeedPanel';
import { Newsfeed } from './Newsfeed';
import NewsfeedTitle from '../../components/NewsfeedPanel/NewsfeedTitle';
// import useAppState from 'state/AppStateProvider';

function RedditFeed() {
  // const { openLiveStream } = useAppState();

  return (
    <NewsfeedPanel
      panelTitle={
        <NewsfeedTitle
          title={'Reddit Hot Posts'}
          icon={<i className="fab fa-reddit-alien" />}
        />
      }
      source={'reddit'}
    >
      <Newsfeed openLiveStream />
    </NewsfeedPanel>
  );
}

export { RedditFeed };
