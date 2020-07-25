import React from 'react';
import { useAsync } from 'react-use';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { RotatingListItems } from '../../components/RotatingListItems';
import { RedditPostItem } from '../../components/ListItems/components';

function Newsfeed(props) {
  const { openLiveStream } = props;

  const { value, error, loading } = useAsync(async () => {
    const response = await fetch(
      'http://localhost:8080/reddit/subredditHot?subreddits=coronavirus,covid19&limit=5'
    );
    const result = await response.json();
    return result;
  });

  if (loading || !value) {
    return <LoadingSpinner />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <RotatingListItems
      items={value}
      ItemComponent={RedditPostItem}
      isRunning={openLiveStream}
    />
  );
}

export { Newsfeed };
