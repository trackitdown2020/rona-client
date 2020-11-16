import React from 'react';
import { Newsfeed } from '../../features/newsfeed';

function RightToolbar() {
  const pathString = window.location.pathname;
  const workspace = pathString.replace('/', '');

  const renderRightToolbar = () => {
    switch (workspace) {
      case 'heat-map':
        return null;
      default:
        return <Newsfeed />;
    }
  };

  return <>{renderRightToolbar()}</>;
}

export { RightToolbar };
