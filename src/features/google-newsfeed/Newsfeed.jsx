import React from 'react';
import { useAsync } from 'react-use';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { RotatingListItems } from '../../components/RotatingListItems';
import { GoogleNewsItem } from '../../components/ListItems/components';

function Newsfeed(props) {
  const { openLiveStream } = props;

  const { value, error, loading } = useAsync(async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/google/everything?q=coronavirus+covid-19`
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
      ItemComponent={GoogleNewsItem}
      isRunning={openLiveStream}
    />
  );
}

export { Newsfeed };
