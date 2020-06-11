import React from 'react';
import { View } from './view';
import useAppState from 'state/AppStateProvider';

export default () => {
  const { selectedCountry, setSelectedCountry } = useAppState();
  return <View selectedCountry={selectedCountry} />;
};
