import React, { useContext, useState } from 'react';
import { AppContext } from './AppContext';


export const AppStateProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState({});
  const [openSettingsModal, setOpenSettingsModal] = useState(false);
  const handleOpenSettingsModal = () => {
    setOpenSettingsModal(true);
  }

  const handleCloseSettingsModal = () => {
    setOpenSettingsModal(false);
  }

  const appState = {
    selectedCountry,
    setSelectedCountry,
    openSettingsModal,
    handleOpenSettingsModal,
    handleCloseSettingsModal
  };

  return <AppContext.Provider value={appState} children={children} />;
};

export default () => useContext(AppContext);
