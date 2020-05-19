import React, { createContext, useContext } from 'react';

const context = createContext();

export const Provider = ({ children }) => {
  // TODO add useState, useReducer, etc to handle app state

  const appState = {
    version: '0.1.0',
  };

  return <context.Provider value={appState} children={children} />;
};

export default () => useContext(context);
