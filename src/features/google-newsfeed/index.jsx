import React from 'react';
import { useAsync } from 'react-use';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { NewsfeedPanel } from '../../components/NewsfeedPanel';
import { RotatingListItems } from '../../components/RotatingListItems';
import { GoogleNewsItem } from '../../components/ListItems/components';
import useAppState from 'state/AppStateProvider';

function GoogleNewsfeed() {
  const { openLiveStream } = useAppState();
  const { value, error, loading } = useAsync(async () => {
    const response = await fetch(
      'http://localhost:8080/google/everything?q=coronavirus+covid-19'
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
        ItemComponent={GoogleNewsItem}
        isRunning={openLiveStream}
      />
    );
  };

  return (
    <NewsfeedPanel panelTitle={'Top Headlines'} source={'google'}>
      {renderBody()}
    </NewsfeedPanel>
  );
}

export { GoogleNewsfeed };
