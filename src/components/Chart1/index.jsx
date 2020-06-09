import React from 'react';
import { View } from './view';
import useAppState from 'state/AppStateProvider';

export default () => {
  const { selectedCountry, selectedCountrySet } = useAppState();
  return <View selectedCountry={selectedCountry} />;
};
