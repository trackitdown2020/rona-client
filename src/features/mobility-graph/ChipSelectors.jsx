import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Chip } from '../../components/Chip';
import { typeSelection } from './constants';

function ChipSelectors({ onClick }) {
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center">
      {typeSelection.map(({ id, label }, index) => (
        <Chip
          key={id}
          id={id}
          label={label}
          onClick={onClick}
          last={typeSelection.length === index - 1}
        />
      ))}
    </Grid>
  );
}

export { ChipSelectors };
