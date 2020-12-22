import React from 'react';
import { Newsfeed } from '../../features/newsfeed';
import StatsToolbar from '../StatsToolbar';
import useAppState from 'state/AppStateProvider';
import _ from 'lodash';

function RightToolbar() {
  const { selectedCountry } = useAppState();
  const pathString = window.location.pathname;
  const workspace = pathString.replace('/', '');

  const renderRightToolbar = () => {
    switch (workspace) {
      case 'heat-map':
        return null;
      case 'stats':
        return !_.isEmpty(selectedCountry) ? <StatsToolbar /> : <Newsfeed />;
      default:
        return <Newsfeed />;
    }
  };

  return <>{renderRightToolbar()}</>;
}

export { RightToolbar };
