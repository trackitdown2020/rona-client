import React, { useContext, useState } from 'react';
import { AppContext } from './AppContext';


export const AppStateProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState({});
  const [openSettingsModal, setOpenSettingsModal] = useState(false);
  const [openLiveStream, setOpenLiveStream] = useState(true);

  const handleOpenSettingsModal = () => {
    setOpenSettingsModal(true);
  }

  const handleCloseSettingsModal = () => {
    setOpenSettingsModal(false);
  }

  const handleLiveStream = () => {
    setOpenLiveStream(!openLiveStream);
  }

  const appState = {
    selectedCountry,
    setSelectedCountry,
    openSettingsModal,
    handleOpenSettingsModal,
    handleCloseSettingsModal,
    openLiveStream,
    handleLiveStream,
  };

  return <AppContext.Provider value={appState} children={children} />;
};

export default () => useContext(AppContext);
