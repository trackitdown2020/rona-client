import React from 'react';
import { ModalWrapper } from '../../components/ModalWrapper';
import { AutocompleteField } from './AutocompleteField';
import useAppState from '../../state/AppStateProvider';

function SettingsModal() {
  const { openSettingsModal, handleCloseSettingsModal } = useAppState();
  console.log(openSettingsModal);

  return (
    <ModalWrapper
      isOpen={openSettingsModal}
      handleClose={handleCloseSettingsModal}
    >
      <h1> Test </h1>
      <AutocompleteField />
    </ModalWrapper>
  );
}

export { SettingsModal };
