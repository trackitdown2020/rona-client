import React, { useContext, useState } from 'react';
import { AppContext } from './AppContext';


export const AppStateProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState({});
  const [openSettingsModal, setOpenSettingsModal] = useState(false);
  const [openLiveStream, setOpenLiveStream] = useState(true);

  const handleOpenSettingsModal = () => {
    console.log('open modal')
    setOpenSettingsModal(true);
  }

  const handleCloseSettingsModal = () => {
    console.log('close modal')
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
