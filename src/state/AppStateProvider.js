import React, { useContext, useState } from 'react';
import { AppContext } from './AppContext';


export const AppStateProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState({});

  const appState = {
    selectedCountry,
    setSelectedCountry,
  };

  return <AppContext.Provider value={appState} children={children} />;
};

export default () => useContext(AppContext);
