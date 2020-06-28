import React from 'react';
import { ModalWrapper } from '../../components/ModalWrapper';
import { AutocompleteField } from './AutocompleteField';

function SettingsModal() {
  const { openSettingsModal } = useAppState();

  return (
    <ModalWrapper
      open={openSettingsModal}
      handleClose={handleCloseSettingsModal}
    >
      <AutocompleteField />
    </ModalWrapper>
  );
}

export { SettingsModal };
