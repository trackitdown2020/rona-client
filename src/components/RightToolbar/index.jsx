import React from 'react';
import { useParams } from 'react-router-dom';
import { Newsfeed } from '../../features/newsfeed';

function RightToolbar() {
  const { workspace } = useParams();

  const renderRightToolbar = () => {
    switch (workspace) {
      default:
        return <Newsfeed />;
    }
  };

  return <>{renderRightToolbar()}</>;
}

export { RightToolbar };
