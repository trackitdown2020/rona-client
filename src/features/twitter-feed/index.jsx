import React from 'react';
import { useAsync } from 'react-use';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { NewsfeedPanel } from '../../components/NewsfeedPanel';
import { RotatingListItems } from '../../components/RotatingListItems';
import { TwitterItem } from '../../components/ListItems/components';
import useAppState from 'state/AppStateProvider';

function TwitterFeed() {
  const { openLiveStream } = useAppState();
  const { value, error, loading } = useAsync(async () => {
    const response = await fetch(
      'http://localhost:8080/twitter/popularTweets?query=coronavirus+covid-19'
    );
    const result = await response.json();
    return result;
  });

  const renderBody = () => {
    if (loading || !value) {
      return <LoadingSpinner />;
    }
    if (error) {
      console.log(error);
    }
    return (
      <RotatingListItems
        items={value}
        ItemComponent={TwitterItem}
        interval={3000}
        isRunning={openLiveStream}
      />
    );
  };

  return (
    <NewsfeedPanel panelTitle={'Twitter Popular Tweets'} source={'twitter'}>
      {renderBody()}
    </NewsfeedPanel>
  );
}

export { TwitterFeed };
