import React, { useContext, useState } from 'react';
import { AppContext } from './AppContext';


export const AppStateProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState({});
  const [openSettingsModal, setOpenSettingsModal] = useState(false);

  const handleOpenSettingsModal = () => {
    console.log('open modal')
    setOpenSettingsModal(true);
  }

  const handleCloseSettingsModal = () => {
    console.log('close modal')
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
