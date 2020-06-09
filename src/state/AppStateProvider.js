import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const Provider = ({ children }) => {
  const [selectedCountry, selectedCountrySet] = useState('USA');

  const appState = {
    selectedCountry,
    selectedCountrySet,
  };

  return <Context.Provider value={appState} children={children} />;
};

export default () => useContext(Context);
